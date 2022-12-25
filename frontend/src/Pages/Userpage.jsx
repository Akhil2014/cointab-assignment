import { Box, Button, Flex, Heading, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TableComponent from "../Components/TableComponent";
import Loader from "../Components/Loader";
import { useSearchParams } from "react-router-dom";

const Userpage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = searchParams.get("page");
  const intiFilter = searchParams.get("gender");
  console.log(intiFilter, initPage);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(intiFilter ? intiFilter : "");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(initPage || 1);

  const getData = async (limit = 10) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://cointab-zeta.vercel.app/api?filter=${filter}&page=${page}&limit=${limit}`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
    setPage(1);
  };
  const handlePage = (page) => {
    setPage(page);
  };
  useEffect(() => {
    getData();
  }, [filter, page]);

  useEffect(() => {
    const payload = {
      page,
    };
    if (filter) payload.gender = filter;
    setSearchParams(payload);
  }, [page, filter, setSearchParams]);

  return (
    <Box w="100%" bg="#118ab2" m="auto" h="auto" p="50px">
      <Flex alignItems="center" justifyContent="center">
        <Heading>Filter By Gender</Heading>
        <Select onChange={(e) => handleFilter(e)} placeholder="Both">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </Flex>
      {loading ? <Loader /> : <TableComponent data={data.data} />}
      <Flex m="auto" justifyContent="space-around" p="20px">
        {new Array(Math.ceil(data.length / 10)).fill(0).map((e, i) => {
          return (
            <Button
              onClick={() => handlePage(i + 1)}
              colorScheme={Number(page) === i + 1 ? "whiteAlpha" : "blackAlpha"}
            >
              {i + 1}
            </Button>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Userpage;
