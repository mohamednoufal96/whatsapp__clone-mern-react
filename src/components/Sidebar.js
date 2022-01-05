import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Avatar } from "@material-ui/core";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../styles/Sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="data:image/jpeg;base64,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" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="search" placeholder="Search or start a new chat" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;
