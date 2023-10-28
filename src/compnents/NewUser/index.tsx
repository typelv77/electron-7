import { Button, Flex, FormControl, FormLabel,Input,} from "@chakra-ui/react"
import ImageUpload from "../ImageUpload"
import { useState } from "react"
import Api from "../../Api";

const NewUser = () => {
    const [picture, setPicture] = useState<[] | string[]>([]);
    
    const sendDatos = async () => {

        try {
          await Api.post("/user",{

            picture})
          alert("Usuario com sucesso!")

        } catch (error){ 
          alert("Error ao cadastra novo usuario!!")
    
        }
    
      };

    return(   
    <Flex  border={"1px solid black"}
    width={"60rem"}
    minHeight={"40rem"}
    flexDirection={"column"}
    alignItems={"center"}
    gap={"1rem"}
    justifyContent={"center"}
    borderRadius={"1rem"}
    margin={"auto"}
    background={"white"}
    boxShadow={"1rem 1rem 4rem 1rem"}
    color={"black"}>

      <h1 style={{color:"black"}}>Cadastra novo usuario</h1>
    
      <FormControl>
        <FormLabel fontWeight={"800"}>Nome:</FormLabel>
        <Input 
        id="name"
         type="text"
        width={"48rem"} 
        height={"1.5rem"} 
        padding={"0.5"}
        borderRadius={"1rem"}>
        </Input>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight={"800"}>Email:</FormLabel>
        <Input
        id="email" 
        type="email"
        width={"48rem"} 
        height={"1.5rem"} 
        padding={"0.5"}
        borderRadius={"1rem"}></Input>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight={"800"}>Senha:</FormLabel>
        <Input 
        id="password"
         type="password"
        width={"48rem"} 
        height={"1.5rem"} 
        padding={"0.5"}
        borderRadius={"1rem"}></Input>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight={"800"}>Confirmar senha:</FormLabel>
        <Input
        id="confirmarpassword" 
        type="password"  
        width={"48rem"} 
        height={"1.5rem"} 
        padding={"0.5"}
        borderRadius={"1rem"}
        ></Input>
      </FormControl>
      
      <ImageUpload images={picture} setImages={setPicture} maxImages={1}/>

      <Button 
        padding={"1rem"} 
        borderRadius={"1.3rem"} 
        color={"black"} 
        border={"none"} 
        fontWeight={"800"} 
        background={"#08e8a1"} 
        cursor={"pointer"}
        _hover={{color:"white" }}
        onClick={sendDatos}
        marginBottom={"2rem"}
        >Confirmar</Button>

    </Flex>)

}

export default NewUser