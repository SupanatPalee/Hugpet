import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header__logo"
          src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/433265238_1462093507712281_2021214036257759766_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGbDy3LPavdERn09dX1Db7T_HUliLJtkEz8dSWIsm2QTJwfRc3aBI9dqSwjcwLi8g3XzOtutzAH8FzIcCk92BYT&_nc_ohc=I5Z9KELu0_gAX-gPY0X&_nc_ht=scontent.fcnx3-1.fna&oh=03_AdQCu2PNSKrfBR6qr8c7EdFsd22oGhD_39BTLuRr2S0TTA&oe=6620A1AE"
          alt="tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
