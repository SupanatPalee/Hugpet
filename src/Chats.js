import React from "react";
import "./Chats.css";
import Chat from "./Chat"

const Chats = () => {
  return <div className="chats">
      <Chat
      name="Labrador"
      message="Wuff" 
      timestamp="6 mins ago" 
      profilePic="https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAxMjg4MjkxNjI5MTQ3Njc1/labrador-retriever-guide.jpg"
      />
      <Chat
      name="Shiba Inu"
      message="Bork" 
      timestamp="1 hr ago" 
      profilePic="https://thehappypuppysite.com/wp-content/uploads/2019/06/Mini-Shiba-Inu-HP-long.jpg"/>
      <Chat
      name="Corgi"
      message="Awooo" 
      timestamp="4 hrs ago" 
      profilePic="https://i.pinimg.com/originals/cb/d4/1f/cbd41fb83c06a915a79ed0ab9ca63789.jpg"/>
      <Chat
      name="Papillion"
      message="Awooo" 
      timestamp="4 hrs ago" 
      profilePic="https://www.petcare.com.au/wp-content/uploads/2017/09/Papillion_Petcare-8.jpg"/>
      <Chat
      name="Doberman"
      message="Awooo" 
      timestamp="4 hrs ago" 
      profilePic="https://www.protectiondogs.co.uk/content/uploads/2023/08/new-4.jpg"/>
      <Chat
      name="Shetland Sheepdog"
      message="Awooo" 
      timestamp="4 hrs ago" 
      profilePic="https://facts.net/wp-content/uploads/2023/11/15-captivating-facts-about-shetland-sheepdog-1699774809.jpg"/>
      
  </div>;
};

export default Chats;
