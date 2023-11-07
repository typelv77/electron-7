import { Box, Button, Flex, FormControl, Input, TagLabel, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";
import ImageUpload from "../ImageUpload";

interface IProps {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({ setLogged }: IProps) => {
  const [tokenbot, setTokenBot]=useState<string>()
  const [chatid, setChatId]=useState<string>()
  const [schedule, setSchedule]=useState<string>()
  const [message, setMessage]=useState<string>()
  const [images, setImages]=useState<[] | string[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

   const switchLoading=()=>{
    setLoading(!loading)
   }


  const sendDatos = async () => {

    try {
      switchLoading()
      await Api.post("telegram/send",{tokenbot, chatid, schedule, message , images})
      alert("Mensagem programada!")
      switchLoading()
    } catch (error){ 
      setLoading(false)
      alert("Error ao programar mensagem!!")

    }

  };


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
        minHeight={"40rem"}
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
        onChange={(e)=>setTokenBot(e.target.value)}

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
        color={"red"}
        onChange={(e)=>setChatId(e.target.value)}
        />
        
        </FormControl>

        <FormControl display={"flex"} flexDirection={"column"} color={"black"}fontWeight={"800"} >
        <label >Data de hora de envio:</label>
        <Input 
        id="date time"
        type="datetime-local"
        width={"48rem"} 
        height={"1.5rem"} 
        padding={"0.5"} 
        borderRadius={"1rem"}
        color={"black"}
        onChange={(e)=>setSchedule(e.target.value)}
        />
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
          onChange={(e)=>setMessage(e.target.value)}
        ></Textarea>
        </FormControl>

       <ImageUpload images={images} setImages={setImages} maxImages={8}/>

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
        isLoading={loading}
        >Programar mensagem</Button>
       
      </Flex>
    </>
  );
};

export default Home;
