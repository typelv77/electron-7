import { Button, Flex, FormControl, FormLabel,Input,} from "@chakra-ui/react"
import ImageUpload from "../ImageUpload"
import { useState } from "react"
import Api from "../../Api";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
    const [picture, setPicture] = useState<[] | string[]>([]);
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>()
    const [email, setEmail] = useState<string>();

    const navigate = useNavigate()

    
    const sendDatos = async () => {
      try {
          if(password !== confirmPassword) throw Error("As senhas não são igual");
        else{
         await Api.post ("/user",{
           picture: picture[0],
            name,
            password,
            email,
          });
          alert("Usuario com sucesso!")
          navigate("/");

         }
        } catch (error){ 
          alert("Error ao cadastra novo usuario!!"+error.message);
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
    color={"black"}
    marginTop={"8rem"}>

      <h1 style={{color:"black"}}>Cadastra novo usuario</h1>
    
      <FormControl>
        <FormLabel fontWeight={"800"}>Nome:</FormLabel>
        <Input 
        id="name"
         type="text"
        width={"48rem"} 
        height={"1.5rem"} 
        padding={"0.5"}
        borderRadius={"1rem"}
        onChange={(e)=>setName(e.target.value)}>
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
        borderRadius={"1rem"}
        onChange={(e)=>setEmail(e.target.value)}></Input>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight={"800"}>Senha:</FormLabel>
        <Input 
        id="password"
         type="password"
        width={"48rem"} 
        height={"1.5rem"} 
        padding={"0.5"}
        borderRadius={"1rem"}
        onChange={(e)=>setPassword(e.target.value)}></Input>
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
        onChange={(e)=>setConfirmPassword(e.target.value)}
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