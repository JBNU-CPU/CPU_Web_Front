import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Certification from "../components/Certification";
import Next_Btn from "../components/Next_Btn";
import Resend_Btn from "../components/Resend_Btn";
import { Link } from "react-router-dom";


const Container = styled.main`
    width: 100%;
    height: auto;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const MainName = styled.p`
    font: bold 30px 'arial';
    color: white;
    background: none;
    padding-top: 63px;
`
const NameText = styled.p`
    padding: 0;
    margin: 0;
    background: none;
    color: white;
    padding-bottom: 10px;
    font: bold 14px 'arial';
    position: relative;
    padding-right: 260px;
`

const EmailText = styled.p`
    padding: 0;
    margin: 0;
    background: none;
    color: white;
    padding-bottom: 10px;
    font: bold 14px 'arial';
    position: relative;
    padding-right: 250px;
`

const StyledInput = styled.input`
    width: 280px;
    height: 45px;
    background: #1B1B25;
    border : none;
    border-radius: 14px;
    margin: 25px;
    margin-top: 0;
    color: white;
    padding-left: 20px;
    font: bold 14px 'arial';
`

const CertificationWrapper = styled.div`
    margin: 0;
    padding: 0;
    background: none;
    position: relative;
    padding-left: 230px;
    padding-bottom: 25px ;
`

const NextWrapper = styled.div`
    margin: 0;
    padding: 0;
    background: none;
`

const QuestWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
`

const Quest = styled.p`
    font: bold 12px 'arial';
    background: none;
    color: white;
    padding : 50px 20px;
`

const StyledLink = styled(Link)`
    background: none;
    color: #3987EC;
    text-decoration: none;
    font: bold 12px 'arial';
`

// 인증 부분에서 certi값에 따라 컴포넌트 변화하도록 코드 수정하기
const Join = () => {
    const certi = true;
    return(
        <>
            <Header/>
            <Container>
                <MainName>Join</MainName>
                <NameText>이름</NameText>
                <StyledInput type='text' placeholder="이름을 입력해주세요"/>
                <EmailText>이메일</EmailText>
                <StyledInput type = 'email' placeholder="이메일 주소를 입력해주세요"/>
                <CertificationWrapper>
                    {certi === true ? <Certification/> : <Resend_Btn/>}
                </CertificationWrapper>
                {certi === true ? null : <StyledInput type="text" placeholder="인증번호"/>}
                <NextWrapper>
                    <Next_Btn/>
                </NextWrapper>
                <QuestWrapper>
                    <Quest>이미 계정이 있으신가요?</Quest><StyledLink to = '/login'>로그인</StyledLink>
                </QuestWrapper>
            </Container>
            <Footer/>
        </>
    );
};

export default Join;