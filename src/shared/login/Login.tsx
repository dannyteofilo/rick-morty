import { FC, useEffect, useState } from "react";
import {
  Stack,
  Avatar,
  Heading,
  useToast,
} from "@chakra-ui/react";
import {
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { AuthForm } from "../../components/authform/AuthForm";
import { AuthFormData } from "../../interfaces/Authprops.interface";
import { useAppContext } from "../../hooks/useAppContext";
import { useAuth } from "../../hooks/useAuth";
import { authProvider } from "../../api/auth";

export const Login: FC = () => {

  const { user } = useAppContext()
  const { handleSignIn, errorRequest } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate(from, { replace: true });
    }
  }, [user])

  useEffect(() => {
    if (errorRequest) {
      toast({
        title: errorRequest,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [errorRequest])

  const handleSubmit = (data: AuthFormData) => {
    handleSignIn(data);
  }

  const redirectToHomeIfAuth = () => {
    if (authProvider.isAuth()) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  };

  return (
    <>
      {redirectToHomeIfAuth()}
      <AuthLayout>
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="white">Ingresar</Heading>
          <AuthForm
            type="login"
            onSubmit={handleSubmit}
          />
        </Stack>
      </AuthLayout>
    </>
  );
};

export default Login;
