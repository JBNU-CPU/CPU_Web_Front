import React,{useState, useRef, useEffect} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleWrapper = styled.div`
    margin: 0%;
    padding: 0;
    padding: 50px 0;

`

const Title = styled.p`
    color: white;
    font: bold 25px 'arial';
`

const SubtitleWrapper = styled.div`
    width: 320px;
`
const Subtitle = styled.p`
    color: white;
    font: bold 18px "arial";
    padding: 0;
    margin: 0;
`

const MenuWrapper = styled.ul`
    margin: 10px 0;
    padding: 10px;
    width: 320px;
    height : 130px;
    border: 1px solid gray;
    border-left: none;
    border-right : none;
`
const InfoMenu = styled.li`
    color: #878C9E;
    list-style: none;
    width: 42px;
    height: 18px;
    padding-right: 20px;
    padding-bottom: 10px;
    font: 400 15px "arial";
`
const Info = styled.p`
    color: #878C9E;
    padding: 0;
    margin: 0;
    font: 400 15px "arial";
`
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledLinkWrapper = styled.div`
    width: 320px;
    height: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    margin: 0;
    padding-top: 20px;
`

const StyledLink = styled(Link)`
    font: 400 15px 'arial';
    text-decoration: none;
    color: #3987EC;
`

const RightIcon = styled(FaChevronRight)`
    color: #3987EC;
    position: relative;
    top: 2.5px;
`

const Logout = styled.p`
    margin: 0;
    padding: 0;
    padding-top: 100px;
    font: 400 12px 'arial';
    color: white;
    &:hover{
        cursor: pointer;
    }
`

const Leave = styled.p`
    margin: 0;
    pad: 0;
    padding-top: 50px;
    font: 400 12px 'arial';
    color: #FF0000;
    &:hover{
        cursor: pointer;
    }
`

const Mypage = () => {
    return(
        <>
            <Header/>
            <Container>
                <TitleWrapper><Title>마이페이지</Title></TitleWrapper>
                <SubtitleWrapper><Subtitle>회원정보</Subtitle></SubtitleWrapper>
                <MenuWrapper>
                        <InfoWrapper><InfoMenu>이름</InfoMenu><Info>이다영</Info></InfoWrapper>
                        <InfoWrapper><InfoMenu>닉네임</InfoMenu><Info>삼다영</Info></InfoWrapper>
                        <InfoWrapper><InfoMenu>이메일</InfoMenu><Info>cpu@jbnu.ac.kr</Info></InfoWrapper>
                        <StyledLinkWrapper><StyledLink to ='/revisememberinfo'>회원정보 수정<RightIcon /></StyledLink></StyledLinkWrapper>
                </MenuWrapper>
                <Logout>로그아웃</Logout>
                <Leave>회원탈퇴</Leave>
            </Container>
        </>
    );
};

export default Mypage;