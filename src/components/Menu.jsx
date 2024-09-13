import React, {useState} from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from './logo/CPU_logo_white.png';
import { Link } from "react-router-dom";

const Container = styled.div`
    width: calc(50%);
    height: 1000px;
    background: black;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
`


const IconWapper = styled.div`
    display: flex;
    align-items: flex-end;
    background: none;
`
const Hamburger = styled(GiHamburgerMenu)`
    color: white;
    background: black;
    width: 31px;
    height: 31px;
    cursor: pointer;
    padding: 20px;
    margin-left: auto;
    &:hover{
        color:gray
    }
`

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    background: none;
    padding: 10px;
`

const Logo = styled.img`
    background: none;
    width: 90px;
    height: 90px;
`

const MenuWrapper = styled.ul`
    list-style: none;
    background: none;
    font: bold 20px 'arial';
    text-align: center;
    margin: 0;
    padding: 0;
`

const Menuli = styled.li`
    color: white;
    background: none;
    padding-top: 15px;
    padding-bottom: 15px;
    cursor: pointer;
`

const SubMenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    background: none;
`

const SubMenu = styled.ul`
    background: none;
    border-top: 2px solid #EA0079;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 150px;
    font: bold 15px 'arial';
`

const LoginWrapper =styled.div`
    background: none;
    display: flex;
    justify-content: center;
    position: relative;
    top: 100px;
`

const Login = styled.button`
    align-items: center;
    border: 1.5px solid #EA0079;
    border-radius: 5px;
    background: none;
    font: bold 12px 'arial';
    font-weight: 700;
    width: 70px;
    height: 30px;
    color : white;
`

const StyledLink = styled(Link)`
    background: none;
    text-decoration: none;
    color: white;
    &:hover{
        cursor: pointer;
        color:gray;
    }
`

const Menu = () => {
    const [isStudyOpen, setIsStudyOpen] = useState(false);
    const [isBoardOpen, setIsBoardOpen] = useState(false);

    const handleStudyClick = () => {
        setIsStudyOpen(prev => !prev);
        setIsBoardOpen(false); // Board가 열려 있으면 닫기
    };

    const handleBoardClick = () => {
        setIsBoardOpen(prev => !prev);
        setIsStudyOpen(false); // Study가 열려 있으면 닫기
    };

    return (
        <Container>
            <IconWapper>
                <Hamburger/>
            </IconWapper>
            <LogoWrapper>
                <Logo src={logo}/>
            </LogoWrapper>
            <MenuWrapper>
                <Menuli><StyledLink to='/'>About CPU</StyledLink></Menuli>
                <Menuli onClick={handleStudyClick}>Study</Menuli>
                {isStudyOpen && (
                    <SubMenuWrapper>
                        <SubMenu>
                            <Menuli style={{color : '#C0C0C0'}}><StyledLink>세션</StyledLink></Menuli>
                            <Menuli style={{color : '#C0C0C0'}}><StyledLink>스터디</StyledLink></Menuli>
                            <Menuli style={{color : '#C0C0C0'}}><StyledLink>프로젝트</StyledLink></Menuli>
                        </SubMenu>
                    </SubMenuWrapper>
                )}
                <Menuli onClick={handleBoardClick}>Board</Menuli>
                {isBoardOpen && (
                    <SubMenuWrapper>
                        <SubMenu>
                            <Menuli style={{color : '#C0C0C0'}}><StyledLink>공지사항</StyledLink></Menuli>
                            <Menuli style={{color : '#C0C0C0'}}><StyledLink>커뮤니티</StyledLink></Menuli>
                            <Menuli style={{color : '#C0C0C0'}}><StyledLink>갤러리</StyledLink></Menuli>
                        </SubMenu>
                    </SubMenuWrapper>
                )}
                <Menuli><StyledLink>Recruit</StyledLink></Menuli>
                <Menuli><StyledLink>Management</StyledLink></Menuli>
            </MenuWrapper>
            <LoginWrapper>
                <Login><StyledLink>Log in</StyledLink></Login>
            </LoginWrapper>
        </Container>
    );
};

export default Menu;