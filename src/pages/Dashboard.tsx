import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { authProvider } from "../api/auth";
import CarouselSlide from "../components/Carousel/Carousel";
import CharacterDetail from "../components/characterDetail/CharacterDetail";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import { generateNumberRandom } from "../helpers/common";
import { useAppContext } from "../hooks/useAppContext";
import { useFetchData } from "../hooks/useFetchData";
import { CharactersInterface } from "../interfaces/Characters.interface";


const Dashboard = () => {
  const { characters } = useAppContext();
  const [user, setUser] = useState("");
  const { handleGetCharacters } = useFetchData();
  const [detail, setDetail] = useState<CharactersInterface | null>(null);

  useEffect(() => {
    const randoms = generateNumberRandom({
      min: 1,
      max: 826,
      total: 8,
    }).toString();
    handleGetCharacters(randoms);
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowDetail = (detail: CharactersInterface) => {
    setDetail(detail);
  };

  const handleLogOut = () => {
    authProvider.logOut();
  };

  const getUserInfo = () => {
    setUser(authProvider.userInfo().email);
  };

  return (
    <>
      <Header userName={user}></Header>
      <SideBar click={handleLogOut}></SideBar>
      <Flex
        width="100wh"
        height="91vh"
        flexDirection="column"
        bgGradient="linear(137.73deg, #BBDF2B -107.85%, #00AFC8 107.28%);"
        ml={{ base: 0, md: 60 }}
        overflow="scroll"
      >
        <Flex w="80%" margin="0 auto" mt={8}>
          <CarouselSlide></CarouselSlide>
        </Flex>
        <Flex flexWrap="wrap" mb="2" textAlign="center" justifyContent="center">
          {characters.map((item) => (
            <Box
              cursor="pointer"
              height={{ base: 200, md: 300, sm: 200 }}
              width={{ base: 140, md: 300, sm: 150 }}
              key={item.id}
              mb={8}
              mr={{ base: 2, md: 8, sm: 4 }}
              p={2}
              borderRadius="8px"
              boxShadow="0px 35px 14px rgba(0, 0, 0, 0.01), 0px 20px 12px rgba(0, 0, 0, 0.05), 0px 9px 9px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)"
              backgroundColor="#1C1F24"
              display="flex"
              flexDirection="column"
              onClick={() => handleShowDetail(item)}
            >
              <Text
                color="#BBDF2B"
                fontSize={20}
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {item.name}
              </Text>
              <Image
                mt={2}
                src={item.image}
                alt=""
                height="85%"
                borderRadius={4}
              />
            </Box>
          ))}
        </Flex>
        <Box></Box>
      </Flex>
      {detail !== null && <CharacterDetail {...detail} />}
    </>
  );
};

export default Dashboard;
