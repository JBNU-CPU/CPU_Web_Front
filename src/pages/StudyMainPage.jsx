import React,{useState} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionMain from "../components/SectionMain";
import StudyMain from "../components/StudyMain";
import ProjectMain from "../components/ProjectMain";
import MainPitcture from './Pic/StudyMain.png'

const Container = styled.div`
    width: 100%;
    margin: 0px;
    padding: 0px;
`
const Img = styled.img`
    width: 100%;
    height: 250px;
    opacity: 0.5;
    @media screen and (min-width : 768px) {
        height: 400px;
    }
`
const PictureWrapper = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
    @media screen and (min-width : 768px) {
        height: 400px;
    }
`;

const Title = styled.h1`
    text-align: center;
    color: white;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    background: none;
    font-family: 'arial';
    @media screen and (min-width : 768px) {
        top: 140px;
    }
`;

const Summary = styled.p`
    color: white;
    text-align: center;
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;
    background: none;
    font-family: 'arial';
    font-weight: 700;
    @media screen and (min-width : 768px) {
        top: 210px;
    }
`;

const SelectWrapper = styled.ul`
    color: white;
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
`

const Select = styled.li`
    width: 100px;
    color: white;
    margin: 0px;
    padding: 5px 10px;
    text-align: center;
    border-bottom: 2px solid transparent;
    &:hover{
        color: gray;
        cursor: pointer;
        border-bottom: 2px solid #EA0079 ;
    }
`

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Study = () => {
    const [section, setSection] = useState(true);
    const [study, setStudy] = useState(false);
    const [project, setProject] = useState(false);

    const SectionClick = () =>{
        setSection(true);
        setStudy(false);
        setProject(false);
        console.log('section')
    }
    const StudyClick = () =>{
        setSection(false);
        setStudy(true);
        setProject(false);
        console.log('study')

    }
    const ProjectClick = () =>{
        setSection(false);
        setStudy(false);
        setProject(true);
        console.log('project')

    }

    return(
        <Container>
            <Header/>
            <PictureWrapper>
                <Img src= {MainPitcture} alt="pic"/>
                <Title>Study</Title>
                <Summary>세션 / 스터디 / 프로젝트</Summary>
            </PictureWrapper>
            <SelectWrapper>
                <Select onClick={SectionClick}>세션</Select>
                <Select onClick={StudyClick}>스터디</Select>
                <Select onClick={ProjectClick}>프로젝트</Select>
            </SelectWrapper>
            <MainWrapper>
                {section && <SectionMain/>}
                {study && <StudyMain/>}
                {project && <ProjectMain/>}
            </MainWrapper>
            <Footer/>
        </Container>
    );
};

export default Study;

