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
  Alert,
  AlertDescription,
  Text,
  Checkbox,
  AlertIcon,
  Container,
} from "@chakra-ui/react";
import Logo from "../../assets/icons/logo.png";
import { Link as ReachLink } from "react-router-dom";
import { isValidPassword } from "../../helpers/common";

import { FaUserAlt, FaLock, FaEye } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEye = chakra(FaEye);

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    passworConfirm: "",
    accept: false,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleShowClickConfirm = () =>
    setShowPasswordConfirm(!showPasswordConfirm);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (
      formData.name !== "" &&
      formData.password !== "" &&
      formData.passworConfirm !== "" &&
      formData.accept
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [formData]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { password, passworConfirm } = formData;
    event.preventDefault();
    if (!isValidPassword(password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales"
      );
      setShowAlert(true);
      return;
    } else if (password !== passworConfirm) {
      setError("Las contrasenas no coinciden");
      setShowAlert(true);
      return;
    } else {
      console.log(formData);
    }
  };

  const { name, password, passworConfirm, accept } = formData;

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
        <Heading color="white">Registrar</Heading>
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
                justifyContent="center"
                alignItems="center"
                flexDir="column"
              >
                <Image src={Logo} width="250px" height="100px"></Image>
                <Text fontSize="lg">Hola, por favor ingresa tus datos</Text>
              </Flex>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(event) => {
                      showAlert && setShowAlert(false);
                      handleChange(event);
                    }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      <CFaEye color="gray.300" />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPasswordConfirm ? "text" : "password"}
                    name="passworConfirm"
                    value={passworConfirm}
                    onChange={(event) => {
                      showAlert && setShowAlert(false);
                      handleChange(event);
                    }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleShowClickConfirm}
                    >
                      <CFaEye color="gray.300" />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Checkbox
                checked={accept}
                onChange={() => setFormData({ ...formData, accept: !accept })}
              >
                <Text maxW={{ base: "220px", sm: "400px" }}>
                  Acepto y he leido los Terminos y condicones y la politica de
                  privacidad
                </Text>
              </Checkbox>
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
                Registrar
              </Button>
              <hr />
              <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="lg">Ya tienes cuenta con nosotros?</Text>
                <Link as={ReachLink} to="/auth/login">
                  Iniciar Sesion
                </Link>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
