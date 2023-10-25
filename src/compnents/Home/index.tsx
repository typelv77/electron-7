import { Box, Button, Flex, FormControl, Input, TagLabel, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IProps {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({ setLogged }: IProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/");
  };

  return  (
    <>
      <button  id="Log"onClick={logout}>Logout</button>
      <Flex
        border={"1px solid black"}
        width={"60rem"}
        height={"40rem"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"center"}
        borderRadius={"1rem"}
        margin={"auto"}
        background={"white"}
        boxShadow={"1rem 1rem 4rem 1rem"}
        color={"#1c4e4e9d"}
        
        >
          <h1 id="title-h1">Programar Mensagens telegram</h1>

        <FormControl display={"flex"} flexDirection={"column"}color={"black"}fontWeight={"800"} >
        <label>Token Bot:</label>
        <Input 
        id="token bot"
        width={"48rem"} 
        height={"1.5rem"} 
        padding={"0.5"}
        borderRadius={"1rem"}
 />
        </FormControl>

        <FormControl display={"flex"} flexDirection={"column"} color={"black"}fontWeight={"800"} >
        <label > Chat Id:</label>
        <Input 
        id="chat id" 
        width={"48rem"} 
        height={"1.5rem"} 
        padding={"0.5"} 
        borderRadius={"1rem"}
        color={"red"}/>
        </FormControl>
        
        <FormControl display={"flex"} flexDirection={"column"} color={"black"}fontWeight={"800"} >
        <label >Mensagem:</label>
        <Textarea 
          id="Mensagem"
          width={"48rem"}
          height={"5rem"}
          padding={"0.5"}
          borderRadius={"1rem"}
          color={"black"}
        ></Textarea>
        </FormControl>

       <Box 
       gap={""}
        borderStyle={"dotted"} 
        width={"80%"}
        height={"3rem"}
        padding={"0.5"}
        borderRadius={"1.5rem"}
        fontSize={"1.5rem"}
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        color={"black"}
        fontWeight={"800"} 
        >
        <text>Clique ou arraste para adicionar arquivos</text>
        </Box>
         
         <Box display={"flex"} justifyContent={"flex-start"} width={"80%"} color={"black"}fontWeight={"800"} >
         <span>Imagens selecionadas:</span>
         </Box>

        <Button 
        padding={"1rem"} 
        borderRadius={"1.3rem"} 
        color={"black"} 
        border={"none"} 
        fontWeight={"800"} 
        background={"#08e8a1"} 
        cursor={"pointer"}
        _hover={{color:"white" }}
        >Programar mensagem</Button>

      </Flex>
    </>
  );
};

export default Home;
