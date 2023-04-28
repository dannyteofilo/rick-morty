import { Stack, Avatar, Heading } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { AuthForm } from "../../components/authform/AuthForm";
import { AuthFormData } from "../../interfaces/Authprops.interface";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useAppContext } from "../../hooks/useAppContext";
import AuthLayout from "../../layouts/AuthLayout";
import { authProvider } from "../../api/auth";

const Login: FC = () => {
  const { user } = useAppContext()
  const { handleSignUp, errorRequest } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const from = location.state?.from?.pathname || "/";


  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate(from, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorRequest])

  const handleRegister = (data: AuthFormData) => {
    handleSignUp(data);
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
            type="register"
            onSubmit={handleRegister}
          />
        </Stack>
      </AuthLayout>
    </>
  );
};

export default Login;
