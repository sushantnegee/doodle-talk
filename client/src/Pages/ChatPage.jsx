import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import ChatBox from "../Components/ChatBox";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import MyChats from "../Components/MyChats";
import { ChatState } from "../Context/ChatProvider"
const ChatPage = () => {
    const {user} = ChatState();
    console.log(user)
    // useEffect(() => {
      
    // }, [user])
    
  return (
    <div style={{ width: "100%" }}>
      {user?<SideDrawer/>:""}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
      {user?<MyChats/>:""}
      {user?<ChatBox/>:""}
      </Box>
    </div>
  )
}

export default ChatPage