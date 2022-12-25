
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Mainroutes from "./Routes/Mainroutes";
function App() {
  return (
    <Box>
      <Flex
        w="100%"
        h="60px"
        bg="#001d3d"
        color="white"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Cointab Software Private Limited</Heading>
      </Flex>
      <Mainroutes />
    </Box>
  );
}

export default App;
