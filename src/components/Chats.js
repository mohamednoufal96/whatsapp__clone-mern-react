import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton, Avatar } from "@material-ui/core";

import "../styles/Chats.css";

function Chats() {
    const sendMessage = () => {};
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar />
                <div className="chats__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at 9:45 pm </p>
                </div>
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AttachFileOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreVertOutlinedIcon />
                </IconButton>
            </div>
            <div className="chats__body">
                <p className="chat__message">
                    <span className="chat__name">Noufal</span>This is a new message !
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Noufal</span>This is a new message !
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Noufal</span>This is a new message !
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Noufal</span>This is a new message !
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Noufal</span>This is a new message !
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Noufal</span>This is a new message !
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Noufal</span>This is a new message !
                    <span className="chat__timeStamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <IconButton>
                    <SentimentSatisfiedAltOutlinedIcon />
                </IconButton>
                <form action="">
                    <input type="text" placeholder="Type a message..." />
                    <button type="submit">Send message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Chats;
