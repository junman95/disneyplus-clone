import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//firebase
import { auth, provider } from "../firebase";
//redux
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/user/userSlice";

function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userEmail = useSelector(selectUserEmail);
  //google login
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  //setting User informations to store
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo src="images/logo.svg" />
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/">
              <img alt="Disney+" src="images/home-icon.svg" />
              <span>Home</span>
            </Link>
            <a>
              <img alt="" src="images/search-icon.svg" />
              <span>Search</span>
            </a>
            <a>
              <img alt="" src="images/watchlist-icon.svg" />
              <span>watchlist</span>
            </a>
            <a>
              <img alt="" src="images/original-icon.svg" />
              <span>original</span>
            </a>
            <a>
              <img alt="" src="images/movie-icon.svg" />
              <span>movie</span>
            </a>
            <a>
              <img alt="" src="images/series-icon.svg" />
              <span>series</span>
            </a>
          </NavMenu>
        </>
      )}
      {userPhoto ? <UserImg src={userPhoto} alt={userName}></UserImg> : <></>}
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  cursor: pointer;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }

    &:visited {
      text-decoration: none;
      color: white;
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border-radius: 4px;
  border-color: white;
  border: solid 1px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  font-size: 16px;
  margin-left: auto;
`;
