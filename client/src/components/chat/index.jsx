import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";
import Ai from "@/components/customMessageForms/Ai";
import AiCode from "@/components/customMessageForms/AiCode";
import AiAssist from "../customMessageForms/AiAssist";

function Chat() {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "test-user",
    "test"
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AI_Chat")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AI_CodeHelp")) {
            return <AiCode props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AI_Assist")) {
            return <AiAssist props={props} activeChat={chatProps.chat} />;
          }
          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
}

export default Chat;
