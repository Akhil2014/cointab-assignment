import React from "react";
import {
  Avatar,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
const TableComponent = ({ data }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>Avatar</Th>
            <Th>City</Th>
            <Th>Gender</Th>
            <Th isNumeric>Age</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((e) => {
            return (
              <Tr key={e._id}>
                <Td>
                  {" "}
                  <Avatar name="Ryan Florence" src={e.picture.large} />
                </Td>
                <Td>{e.location.city}</Td>
                <Td>{e.gender}</Td>
                <Td isNumeric>{e.dob.age}</Td>
                <Td>{e.email}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
