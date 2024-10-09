import React,{useState, useRef, useEffect, useContext} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import axios from 'axios';
import Login_Btn from "../components/Login_Btn"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

const Container = styled.form`
    width: 100%;
    height: auto;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;
`

const MainName = styled.p`
    font: bold 30px 'arial';
    color: white;
    background: none;
    padding-top: 63px;
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
const LoginWrapper = styled.div`
    margin: 0;
    padding: 0;
    background: none;
`

const FindPassWrapper = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
    background: none;
    left: 110px;
    bottom : 20px
`

const FindPass = styled.p`
    background: none;
    color: white;
    &:hover{
        color: gray;
    }
`

const JoinWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    padding-top: 20px;
    padding-bottom: 100px;
`

const StyledLink = styled(Link)`
    background: none;
    color: #3987EC;
    text-decoration: none;
    font: bold 12px 'arial';
`

const Join = () => {
    const [username,setusername] = useState("");
    const [password, setpassword] = useState("");
    const firstInputRef = useRef(null);
    const LoginNavigate = useNavigate();
    // 여기
   const {setIsAuthenticated} = useContext(AuthContext);

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://3.36.125.67:8080/loginProc",{
                username,
                password,
            });
            if(response.status === 200){
                alert("로그인 되었습니다.");
                setIsAuthenticated(true);
                LoginNavigate('/');
            }else{
                alert("아이디, 비밀번호를 다시 확인하세요");
            }
        } catch(error) {
            console.error("로그인 실패:",error);
            alert("로그인 중 문제가 발생했습니다.");
        }
    };


    useEffect(() => {
        if(firstInputRef.current){
            firstInputRef.current.focus();
        }
    },[]);

    const isButtonActive = username && password;
    return(
        <>
            <Header/>
            <Container onSubmit = {handleLogin}>
                <MainName>Log in</MainName>
                <StyledInput type='text' placeholder="아이디를 입력해주세요" ref = {firstInputRef} value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                <StyledInput type = 'password' placeholder="비밀번호를 입력해주세요" value={password} onChange = {(e) => {setpassword(e.target.value)}}/>   
                <FindPassWrapper>
                    <StyledLink to ='/findpassword'><FindPass>비밀번호 찾기</FindPass></StyledLink>
                </FindPassWrapper>
                <LoginWrapper>
                    <Login_Btn type="submit" isActive = {isButtonActive}/>
                </LoginWrapper>
                <JoinWrapper>
                    <StyledLink to = '/join'>회원가입</StyledLink>
                </JoinWrapper>
            </Container>
        </>
    );
};

export default Join;