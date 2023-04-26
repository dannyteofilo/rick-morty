import { Stack, Avatar, Heading } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { AuthForm } from "../../components/authform/AuthForm";
import { AuthFormData } from "../../interfaces/Authprops.interface";
import { isValidPassword } from "../../helpers/common";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useAppContext } from "../../hooks/useAppContext";
import { useToast } from "@chakra-ui/react";
import AuthLayout from "../../layouts/AuthLayout";

const Login: FC = () => {
  const { user } = useAppContext()
  const { handleSignUp, errorRequest } = useAuth()
  let navigate = useNavigate();
  let location = useLocation();
  const toast = useToast();
  let from = location.state?.from?.pathname || "/";
  const [error, setError] = useState<string>('')
  const [showAlert, setShowAlert] = useState<boolean>(false)

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate(from, { replace: true });
    }
  }, [user])

  useEffect(() => {
    console.log('errorRequest ', errorRequest)
    if (errorRequest) {
      toast({
        title: errorRequest,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [errorRequest])

  const handleRegister = (data: AuthFormData) => {
    const { password, confirmPassword } = data;
    if (!isValidPassword(password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales"
      );
      setShowAlert(true);
      return;
    } else if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      setShowAlert(true);
      return;
    } else {
      handleSignUp(data);
    }
  }

  return (
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
          showAlert={showAlert}
          msgError={error}
          onCloseAlert={() => setShowAlert(false)}
        />
      </Stack>
    </AuthLayout>
  );
};

export default Login;
