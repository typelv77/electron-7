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
   setBooleanTokenEmail: React.Dispatch<React.SetStateAction<boolean>>
   setBooleanInformEmail: React.Dispatch<React.SetStateAction<boolean>>
} 

const RecoverInformEmail = ({setBooleanTokenEmail,setBooleanInformEmail}: IProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false)

   const switchLoading=()=>{
    setLoading(!loading)
   }

  const submit = async () => {
    localStorage.setItem("e", email)
    switchLoading()
      await Api.post("/user/recover",{email});
      switchLoading()
      setBooleanInformEmail(false);
      setBooleanTokenEmail(true);
      alert("Caso o email for verdadeiro, será enviado um email de verificação, verifique em sua caxa de correio ou span");
  
  }


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
          Corfime o Email
        </Text>
        <FormControl>
          <FormLabel fontWeight={"800"}>Digite seu email cadastrado</FormLabel>
          <Input
          gap={"3rem"}
            type="email"
            placeholder="informe seu email para recuperação:"
            padding={"0.5rem"}
            width={"20rem"}
            borderRadius={"10px"}
            onChange={(e) => {
              setEmail(e.target.value);
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
          isLoading={loading}
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

export default RecoverInformEmail;