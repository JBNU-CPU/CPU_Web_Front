import React,{useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: white;
    border-bottom: 2px solid #EA0079;
    text-align: center;
    width: 100px;
`

const Summary = styled.p`
    color: white;
    font: 400 14px 'arial';
    text-align: center;
    padding-bottom: 20px;
`

const SubmitWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    width: calc(90%);
    border-bottom: 1.5px solid white;
    margin: 0px;
    padding: 0px;
    margin-bottom: 40px;
`

const SubmitButton = styled.button`
    position: relative;
    right: 10px;
    margin-bottom: 10px;
    width: 70px;
    height: 25px;
    border-radius: 10px;
    color: white;
    font: 600 10px 'arial';
    border: 1px solid #EA0079;
    &:hover{
        color: gray;
        cursor: pointer;
    }
`
const ContentWrapper = styled.div`
    width: calc(90%);
    height: 100%;
    &:hover{
        cursor: pointer;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc(90);
    height: 95px;
    border-radius: 15px;
    border: 1px solid #424755;
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
    background:#1B1B25;
    &:hover{
        border: 1px solid #EA0079;
    }
`
const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    margin: 15px 20px 5px 30px;
    align-items: center;
    background: none;

`
const Icon = styled.img`
    background: white;
    width: 12px;
    height: 12px;
    background: none;

`
const RecruitState = styled.div`
    width: 50px;
    height: 20px;
    color: white;
    border: 1px solid #EA0079;
    border-radius: 15px;
    font: 500 10px 'arial';
    text-align: center;
    line-height: 20px;
    background: none;

`

const StudyName = styled.p`
    font: 500 14px 'arial';
    color: white;
    padding: 0;
    margin: 0;
    margin-left: 30px;
    background: none;

`

const Teacher = styled.p`
    font: 500 10px 'arial';
    color: white;
    padding: 0;
    margin: 5px 0px 15px 30px;
    background: none;

`

// Content 부분 서버로 부터 정보가져와서 구성해야함
// 모든 요소 {value}로 처리하기
// '모집중' 부분은 {state ? 컴포넌트 : 컴포넌트} 형식으로 처리하기
const SectionMain = () =>{
    const SectionNavigate = useNavigate();
    const onClick = () => {
        console.log('move');
        SectionNavigate('/section');
    }

    return(
        <Container>
            <Title>세션</Title>
            <Summary>동아리 회원이 다른 동아리 회원에게 강의 형식으로 지식을 제공하는 활동입니다.</Summary>
            <SubmitWrapper>
                <SubmitButton type="button">세션장 신청</SubmitButton>
            </SubmitWrapper>
            <ContentWrapper onClick={onClick}>
                <Content>
                    <Head>
                        <Icon/>
                        <RecruitState>모집중</RecruitState>
                    </Head>
                    <StudyName>C언어 스터디</StudyName>
                    <Teacher>세션장: 박도현 / 요일 : 화, 목</Teacher>
                </Content>
            </ContentWrapper>
        </Container>
    );
};

export default SectionMain;