import React from "react";
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

const Login = (): JSX.Element => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvZjqwXMyPCtW9j3IO5uWHOvOwrk8HBYXqQ&usqp=CAU"}
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
        background={"white"}
        
      >
        <Text fontSize="3rem" fontWeight="bold" mb={4}>
          Login
        </Text>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Seu email:" padding={"0.5rem"} width={"20rem"}borderRadius={"10px"}/>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Senha</FormLabel>
          <Input type="password" placeholder="Sua senha:" padding={"0.5rem"} width={"20rem"} borderRadius={"10px"}/>
        </FormControl>

        <Button mt={4} colorScheme="teal" width="8rem" borderRadius={"10px"}>
          Entrar
        </Button>

        <Text mt={2}>
          <Link color="teal.500" href="#">
            Esqueceu a senha?
          </Link>
        </Text>

        <Text mt={2}>
          Ainda não tem uma conta?{" "}
          <Link color="teal.500" href="#">
            Criar novo usuário
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Login;
