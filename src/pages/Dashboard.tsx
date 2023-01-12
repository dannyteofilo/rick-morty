import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import { generateNumberRandom } from "../helpers/common";
import { useAppContext } from "../hooks/useAppContext";
import { useFetchData } from "../hooks/useFetchData";

const Dashboard = () => {
  const { user, characters } = useAppContext();
  const { handleGetCharacters } = useFetchData();

  useEffect(() => {
    const randoms = generateNumberRandom({
      min: 1,
      max: 826,
      total: 8,
    }).toString();
    handleGetCharacters(randoms);
  }, []);

  return (
    <>
      <Header userName={user}></Header>
      <SideBar></SideBar>
      <Flex
        height="91vh"
        bgGradient="linear(137.73deg, #BBDF2B -107.85%, #00AFC8 107.28%);"
        ml={{ base: 0, md: 60 }}
      >
        <Flex flexWrap="wrap" mb="2" overflow="scroll">
          {characters.map((item) => (
            <Box
              cursor="pointer"
              height={{ base: 200, md: 300, sm: 200 }}
              width={{ base: 200, md: 300, sm: 150 }}
              key={item.id}
              m={8}
              p={2}
              borderRadius="8px"
              boxShadow="0px 35px 14px rgba(0, 0, 0, 0.01), 0px 20px 12px rgba(0, 0, 0, 0.05), 0px 9px 9px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)"
              backgroundColor="#1C1F24"
              display="flex"
              flexDirection="column"
            >
              <Text
                color="white"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {item.name}
              </Text>
              <Image mt={2} src={item.image} alt="" height="90%" />
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
