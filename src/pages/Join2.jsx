import React,{useState,useRef,useEffect} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Complete_Btn from "../components/Complete_Btn";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Container = styled.main`
    margin-top: 100px;
    margin-bottom: 100px;
    height: auto;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: rgba(255, 255, 255, 0.1); /* 반투명한 배경 */
    backdrop-filter: blur(10px); /* 블러 효과 */
    border-radius: 5px;
`

const MainName = styled.p`
    font: bold 30px 'arial';
    color: white;
    background: none;
    padding-top: 63px;
`
const NickText = styled.p`
    padding: 10px;
    margin: 0;
    background: none;
    color: white;
    padding-bottom: 10px;
    font: bold 14px 'arial';
    position: relative;
    padding-right: 260px;
`
const IDText = styled.p`
    padding: 0;
    margin: 0;
    background: none;
    color: white;
    padding-bottom: 10px;
    font: bold 14px 'arial';
    position: relative;
    padding-right: 230px;
`

const PasswordText = styled.p`
    padding: 0;
    margin: 0;
    background: none;
    color: white;
    padding-bottom: 10px;
    font: bold 14px 'arial';
    position: relative;
    padding-right: 250px;
`

const RePasswordText = styled.p`
    padding: 0;
    margin: 0;
    background: none;
    color: white;
    padding-bottom: 10px;
    font: bold 14px 'arial';
    position: relative;
    padding-right: 220px;
`


const StyledInput = styled.input`
    width: 300px;
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

const CompleteWrapper = styled.div`
    margin: 0;
    padding: 0;
    padding-top: 15px;
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

const Join2 = () => {
    const [nickName,setnickName] = useState("");
    const [username, setusername] =useState("");
    const [password,setpassword] = useState("");
    const [repassword, setrepassword] = useState("");

    const CompleteNavigate= useNavigate();
    const firstInputRef = useRef(null);

    useEffect(() => {
        if(firstInputRef.current){
            firstInputRef.current.focus();
        }
    },[]);

    const onClick = () => {
        alert('회원가입이 완료되었습니다')
        CompleteNavigate('/')
    }

    const passwordRight = (password && repassword) && (password === repassword);
    const isButtonActive = nickName && username && passwordRight;
    return(
        <>
            <Header/>
            <Wrapper>
                <Container>
                    <MainName>Join</MainName>
                    <NickText>닉네임</NickText>
                    <StyledInput type='text' placeholder="닉네임을 입력해주세요" ref={firstInputRef} value={nickName} onChange={(e) => {setnickName(e.target.value)}}/>
                    <IDText>아이디(학번)</IDText>
                    <StyledInput type='id' placeholder="학번을 입력해주세요" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                    <PasswordText>비밀번호</PasswordText>
                    <StyledInput type='password' placeholder="비밀번호를 입력해주세요" value={password} onChange={(e) => setpassword(e.target.value)}/>
                    <RePasswordText>비밀번호 확인</RePasswordText>
                    <StyledInput type='password' placeholder="비밀번호를 다시 입력해주세요" value={repassword} onChange={(e) => setrepassword(e.target.value)}/>
                    <CompleteWrapper>
                        <Complete_Btn onClick = {onClick} isActive={isButtonActive}/>
                    </CompleteWrapper>
                    <QuestWrapper>
                        <Quest>이미 계정이 있으신가요?</Quest><StyledLink to = '/login'>로그인</StyledLink>
                    </QuestWrapper>
                </Container>
            </Wrapper>
        </>
    );
};

export default Join2;