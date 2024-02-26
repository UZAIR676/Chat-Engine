import React from 'react'
import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced"
const chatpage = (props) => {
  const ChatProps = useMultiChatLogic('5eaa4dab-bdde-4263-8818-4a9bb8e2c29b',
  props.user.username,
  props.user.secrets
  )
  return (
    <div style={{height:'100vh'}}>
      <MultiChatSocket {...ChatProps}/>  { /*it will help us yo connect to the chat engine websockets} */}
      <MultiChatWindow {...ChatProps}  style={{height:"100%"}}/>
    </div>
  )
}

export default chatpage
