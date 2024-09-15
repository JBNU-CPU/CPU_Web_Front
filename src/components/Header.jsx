import React,{useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from './logo/CPU_logo_white.png';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Menu from "./Menu";

const MainHeader = styled.header`
    width : 100%;  
    height: 60px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    @media screen and (min-width : 768px) {
        justify-content: flex-start;
    }
`;

const Text = styled.p`
    display: inline;
    color: white;
    background: none;
    padding-left: 10px;
    font: bold 20px 'arial';
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const Img = styled.img`
    width: 60px;
    height: 60px;
    background: black;
    padding: 0;
    margin: 0;
`

const ImgLink = styled(Link)`
    width: 60px;
    height: 60px;
    background: black;
    padding: 0;
    margin: 0;
`

const Hamburger = styled(GiHamburgerMenu)`
    color: white;
    background: black;
    width: 31px;
    height: 31px;
    position: absolute;
    right: 20px;
    cursor: pointer;
    z-index: auto;
    &:hover{
        color: gray;
    }
`

// to경로 메인 페이지로 이동하도록 설정하기
const Header = () => {
    const [MenuOpen, setMenuOpen] = useState(false);

    const ToggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return(
        <MainHeader>
            <ImgLink to = '/'><Img src={logo} alt="cpu_white_logo"/></ImgLink><Text>C P U</Text> 
            <Hamburger onClick = {ToggleMenu}/>{MenuOpen && <Menu/>}
        </MainHeader>
    );
};

export default Header;