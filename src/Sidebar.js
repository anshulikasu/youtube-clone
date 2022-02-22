import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import  WatchLaterIcon  from '@material-ui/icons/WatchLater';
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OnedemandVideoicon  from "@material-ui/icons/OndemandVideo";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import  ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreRounded';
function Sidebar() {
  return( <div className="sidebar">
      
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow  Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
      <hr />
      <SidebarRow  Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow  Icon={OnedemandVideoicon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
      <SidebarRow  Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />  
      

      

  </div>
  );
}

export default Sidebar;
