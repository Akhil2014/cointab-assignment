import React, { useEffect, useState } from "react";
import { Button, Flex, useDisclosure, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
const Homepage = () => {
  const [auth, setAuth] = useState(false);
  const toast = useToast();

  const deleteUser = async () => {
    try {
      alert(`Are you sure you want to delete`);
      await axios.delete("https://cointab-zeta.vercel.app/delete");
      console.log("Done");
      toast({
        title: "Sucessfully Deleted.",
        description: "Thank You.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      alert("Something went wrong");
      console.log("error deleting");
    }
  };

  const getUser = async () => {
    try {
      if (auth) {
        toast({
          title: "Request is still process.",
          description: "Thank You.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        return;
      }
      setAuth(true);
      await axios.post("https://cointab-zeta.vercel.app/data");
      setAuth(false);
      alert("Data fetch sucessfully...");
    } catch (error) {
      console.log("error getting user");
    }
  };

  return (
    <div>
      <Flex
        w="100%"
        bg="#0077b6"
        m="auto"
        h="700px"
        alignItems="center"
        justifyContent="space-around"
      >
        <Button onClick={() => getUser()} size="lg" colorScheme="orange">
          Fetch Users
        </Button>
        <Button onClick={() => deleteUser()} size="lg" colorScheme="orange">
          Delete Users
        </Button>
        <Link to="/userpage">
          <Button size="lg" colorScheme="orange">
            User Details
          </Button>
        </Link>
      </Flex>
    </div>
  );
};

export default Homepage;
