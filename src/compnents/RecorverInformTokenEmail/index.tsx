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
    setBooleanInformNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
    setBooleanTokenEmail: React.Dispatch<React.SetStateAction<boolean>>;
}
const RecoverInformTokenEmail= ({  setBooleanTokenEmail, setBooleanInformNewPassword}: IProps): JSX.Element => {
  const [TokenEmail, setTokenEmail] = useState<string>("");
  const navigate = useNavigate();

  const submit = ()=> {
    setBooleanTokenEmail(false)
    setBooleanInformNewPassword(true)
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
          Informe token 
        </Text>
        <FormControl>
          <FormLabel fontWeight={"800"}>Token</FormLabel>
          <Input
          gap={"3rem"}
            type="text"
            placeholder="Digite o token enviado por email:"
            padding={"0.5rem"}
            width={"20rem"}
            borderRadius={"10px"}
            onChange={(e) => {
                setTokenEmail(e.target.value);
              }}
          />
        </FormControl>


       <Flex gap={"5rem"}>

        <Button
          padding={"1rem"} 
          borderRadius={"1.3rem"} 
          color={"black"} 
          border={"none"} 
          fontWeight={"800"} 
          background={"#08e8a1"} 
          cursor={"pointer"}
          _hover={{color:"white" }}
          marginBottom={"2rem"}
          onClick={submit}

        >Confirmar</Button>

        <Button 
        padding={"1rem"} 
        borderRadius={"1.3rem"} 
        border={"none"} 
        fontWeight={"800"} 
        color={"black"} 
        background={"#FF0000"} 
        cursor={"pointer"}
        _hover={{color:"white" }}
        onClick={()=>navigate("/")}
        marginBottom={"2rem"}

        >Cancelar</Button>
       </Flex>

      </Flex>
    </Box>
  );
};

export default RecoverInformTokenEmail;