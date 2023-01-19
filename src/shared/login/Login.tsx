import React, { useEffect, useState } from "react";
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
  Text,
  Container,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import Logo from "../../assets/icons/logo.png";
import {
  Link as ReachLink,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { FaUserAlt, FaLock, FaEye } from "react-icons/fa";
import { singInRequest } from "../../helpers/request";
import { authProvider } from "../../api/auth";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEye = chakra(FaEye);

export const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");

  const handleShowClick = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (username !== "" && password !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);

  if (authProvider.isAuth()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    singInRequest({ email: username, password }).then((response: any) => {
      const { errors, token, user } = response;
      if (errors) {
        setError(errors.errors.map((e: any) => e.msg));
        setShowAlert(true);
      } else {
        setError("");
        setShowAlert(false);
        const userStorage = {
          user,
          token,
        };
        localStorage.setItem("user", JSON.stringify(userStorage));
        navigate(from, { replace: true });
      }
    });
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
        <Heading color="white">Ingresar</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius="10px"
            >
              <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
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
                    placeholder="Email"
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
                    placeholder="Contraseña"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      <CFaEye color="gray.300" />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {showAlert && (
                <Container maxW="md">
                  <Alert status="error">
                    <AlertIcon />
                    <AlertDescription color="red">{error}</AlertDescription>
                  </Alert>
                </Container>
              )}
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                disabled={isButtonDisabled}
              >
                Iniciar sesión
              </Button>
              <hr />
              <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="lg">¿Aún no tienes cuenta con nosotros?</Text>
                <Link as={ReachLink} to="/auth/register" color="#00AFC8">
                  Registrate aquí
                </Link>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
