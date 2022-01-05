import React from "react";
import { IconButton, Avatar } from "@material-ui/core";

import "../styles/SidebarChat.css";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h3>Room name</h3>
                <p>This is the last message</p>
            </div>
        </div>
    );
}

export default SidebarChat;
