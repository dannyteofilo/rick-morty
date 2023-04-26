import React, { FC, useEffect, useState } from "react";
import {
  Box,
  Link,
  Button,
  Image,
  Flex,
  Stack,
  Alert,
  AlertDescription,
  Text,
  Checkbox,
  AlertIcon,
  Container,
} from "@chakra-ui/react";
import Logo from "../../assets/icons/logo.png";
import { Link as ReachLink } from 'react-router-dom';
import { AuthFormData, AuthProps } from '../../interfaces/Authprops.interface'
import { Password } from "../inputs/Password";
import { Email } from "../inputs/Email";
import { isValidPassword } from "../../helpers/common";



export const AuthForm: FC<AuthProps> = ({ type, onSubmit }) => {
  const [formValid, setFormValid] = useState<boolean>(false);
  const [error, setError] = useState<string>('')
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const isRegister = type === "register";

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    showAlert && setShowAlert(false)
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const requiredFields = ["email", "password"];

    const formIsValid =
      type === "register" && !formData.acceptTerms
        ? false
        : requiredFields.every((field) => formData[field as keyof AuthFormData]);

    setFormValid(formIsValid);
  }, [formData, type]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isRegister) {
      const { password, confirmPassword } = formData;
      if (!isValidPassword(password)) {
        showError(
          "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales"
        );
        return;
      } else if (password !== confirmPassword) {
        showError("Las contraseñas no coinciden");
        return;
      } else {
        onSubmit(formData)
      }
    } else {
      onSubmit(formData)
    }
  };

  const showError = (msg: string) => {
    setError(msg);
    setShowAlert(true);
  };

  return (
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
          </Flex>
          <Email email={formData.email} name="email" placeholder="Email" onChange={handleChange} />
          <Password password={formData.password} placeholder="Contraseña" onChange={handleChange} name="password" />
          {
            isRegister && (
              <>
                <Password password={formData.confirmPassword} placeholder="Confirmar contraseña" onChange={handleChange} name="confirmPassword" />
                <Checkbox
                  checked={formData.acceptTerms}
                  onChange={() => setFormData({ ...formData, acceptTerms: !formData.acceptTerms })}
                >
                  <Text maxW={{ base: "220px", sm: "400px" }}>
                    Acepto y he leido los Terminos y condicones y la politica de
                    privacidad
                  </Text>
                </Checkbox>
              </>
            )
          }

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
            isDisabled={!formValid}
          >
            {isRegister ? 'Registrar' : 'Iniciar sesión'}
          </Button>
          <hr />
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="lg">{isRegister ? '¿Ya tienes cuenta con nosotros?' : '¿Aún no tienes cuenta con nosotros?'}</Text>
            <Link as={ReachLink} to={isRegister ? "/auth/login" : "/auth/register"} color="#00AFC8">
              {isRegister ? 'Iniciar sesión' : 'Registrate aquí'}
            </Link>
          </Flex>
        </Stack>
      </form>
    </Box>
  )
}
