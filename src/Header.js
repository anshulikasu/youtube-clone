import React, {useState} from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import  Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
 const[inputSearch, setInputSearch] = useState("");

  return(
  <div className="header">
      <div className="header__left">
      <MenuIcon />
      <Link>
      <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
      alt="logo" />
      </Link>
      </div>
      <div className="header__input" >
      <input
       onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch} 
        placeholder="search" 
        type="search" />
        <Link to={`/search/${inputSearch}`}>
      <SearchIcon  className="header__inputbutton"/>
      </Link>
      </div>
      <div className="header__icons">
      <VideoCallIcon className="header__icons" />
      <AppsIcon className="header__icons" />
      <NotificationsIcon className="header__icons" />
      <Avatar 
      alt="name"
      src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4d%2F8e%2Fba%2F4d8eba8ac2307088c4a24b239c7e14c2.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F74802043799590898%2F&tbnid=pSP4W2FRRZp4sM&vet=12ahUKEwjUgeGI0PL1AhUz_jgGHRheAsAQMygDegUIARDNAQ..i&docid=CHA8x0ugITVfIM&w=430&h=496&q=images%20book&hl=en-GB&ved=2ahUKEwjUgeGI0PL1AhUz_jgGHRheAsAQMygDegUIARDNAQ"
      />
      </div>
       
  </div>
  );
}

export default Header;
