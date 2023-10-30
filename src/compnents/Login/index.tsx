import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";

interface IProps {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setLogged }: IProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("t"));

    setLogged(token ? true : false);
  }, []);

  const submit = async () => {
    try {
      const datos = { email, password };

      const token = await Api.post("/auth/login", datos);

      localStorage.setItem("t", JSON.stringify(token.data));
      setLogged(true);
      navigate("/");
      alert("Usuário Logado");
    } catch (error) {
      alert(error);
      console.log("error");
    }
  };

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundImage={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS53eMRi5HMYXDYXjPUbv5i4ZRFaB0RmHLTw&usqp=CAU"
      }
    >
      <Flex
        margin={"auto"}
        flexDirection={"column"}
        alignItems={"Center"}
        gap={"2rem"}
        border={"1px solid black"}
        borderRadius={"1rem"}
        width={"23%"}
        justifyContent={"center"}
        height={"45%"}
        boxShadow={"1rem 1rem 2.5rem"}
        color={"black"}
        backgroundImage={
          "https://institutodoartesao.com/wp-content/uploads/2022/02/papel-de-parede-quarto-bebe-menino-azul-claro-liso-ssca-076-papel-de-parede-para-quarto-de-bebe.jpg"
        }
      >
        <Text fontSize="3rem" fontWeight="bold" mb={4}>
          Login
        </Text>
        <FormControl>
          <FormLabel fontWeight={"800"}>Email</FormLabel>
          <Input
            type="email"
            placeholder="Seu email:"
            padding={"0.5rem"}
            width={"20rem"}
            borderRadius={"10px"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel fontWeight={"800"}>Senha</FormLabel>
          <Input
            type="password"
            placeholder="Sua senha:"
            padding={"0.5rem"}
            width={"20rem"}
            borderRadius={"10px"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          width="8rem"
          borderRadius={"10px"}
          onClick={submit}
          cursor={"pointer"}
        _hover={{color:"#C0C0C0" }}
        color={"white"}
        background={"#00BFFF"}
        >
          Entrar
        </Button>

        <Text mt={2}>
          <Link 
          color="teal.500" 
          href="#">
            Esqueceu a senha?
          </Link>
        </Text>

        <Text mt={2}>
          Ainda não tem uma conta?{" "}
          <Link color="teal.500" href="#register">
            Criar novo usuário
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Login;
