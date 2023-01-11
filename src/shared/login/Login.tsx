import React, { useState } from "react";
import {
  Box,
  Link,
  Button,
  Image,
  Input,
  Flex,
  Stack,
  Avatar,
  Heading,
  FormControl,
  InputGroup,
  InputLeftElement,
  chakra,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import Logo from "../../assets/icons/logo.png";
import { Link as ReachLink, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Login = () => {
  const { signIn } = useAppContext();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn(username, () => navigate(from, { replace: true }));
  };
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(90deg, #BBDF2B 23.66%, #00AFC8 101.77%)"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="white">Login</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <Flex justifyContent="center" alignItems="center">
                <Image src={Logo} width="250px" height="100px"></Image>
              </Flex>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Iniciar sesión
              </Button>
              <hr />
              <p></p>
              <Text fontSize='lg'>Aun no tienes cuenta con nosotros?</Text>
              <Link as={ReachLink} to="/auth/register">
                Registrate aqui
              </Link>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
