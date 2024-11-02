import React, { useState } from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import MainPitcture from './Pic/StudyMain.png'


// 메인 컨테이너 스타일
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh; // 화면을 채우기 위한 높이 설정
  box-sizing: border-box;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center; /* 탭 버튼들을 중앙으로 배치 */
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%; /* 부모 요소 너비에 맞춤 */
  text-align: center;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  color: ${({ isActive }) => (isActive ? 'gray' : 'white')};
  font-size: 18px;
  cursor: pointer;
  }
`;

// 이미지와 텍스트 스타일
const Section = styled.div`
  margin: 20px auto;
  width: 100%;
  max-width: 600px;
`;

const HeaderImg = styled.img`
    width: 100%;
    height: 250px;
    opacity: 0.5;
    @media screen and (min-width : 768px) {
        height: 400px;
    }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  margin: 10px 0;
`;


const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 10px 0;
  text-align: left; 
  align-items: left;
`;

const SectionHeader = styled.h2`
  align-items: center;
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

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

// 섹션 컴포넌트
const AboutSection = () => (
  <Section>
    <SectionHeader>Creative Personal computer User Club</SectionHeader>
    <Text>
      CPU는 전북대학교와 주도적인 개인 컴퓨터 사용자 모임으로써 지역 활성화에 힘쓰는 동아리로, 전북 지역 사회의 Computer Mind 가치 확산에 기여하고 있습니다.
    </Text>
    <Text>
      동아리 회원들은 학습 연구 및 평가 교육을 통해 프로그래밍 언어 및 컴퓨터 공학 지식을 체득할 수 있습니다.
    </Text>
  </Section>
);

const LocationSection = () => (
  <Section>
    <SectionHeader>동아리방 위치</SectionHeader>
    <Image src="동아리방 지도 이미지 URL" alt="동아리방 위치" />
    <Text>전북대학교 제2공학관 403호</Text>
    <SectionHeader>동아리방 내부</SectionHeader>
    <Image src="내부 사진 URL 1" alt="동아리방 내부" />
    <Image src="내부 사진 URL 2" alt="동아리 활동 모습" />
  </Section>
);

const ManagementSection = () => (
  <Section>
    <SectionHeader>운영진</SectionHeader>
    <Text>조직도와 회장단 및 기획복지부 정보가 표시됩니다.</Text>
    <Image src="조직도 이미지 URL" alt="조직도" />
  </Section>
);

// 메인 컴포넌트
const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'location':
        return <LocationSection />;
      case 'management':
        return <ManagementSection />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header />
      <PictureWrapper>
        <HeaderImg src= {MainPitcture} alt="pic"/>
        <Title>About CPU</Title>
        <Summary>전북대학교 중앙 컴퓨터동아리 CPU</Summary>
      </PictureWrapper>
      <TabContainer>
        <TabButton isActive={activeTab === 'about'} onClick={() => setActiveTab('about')}>소개</TabButton>
        <TabButton isActive={activeTab === 'location'} onClick={() => setActiveTab('location')}>동아리방</TabButton>
        <TabButton isActive={activeTab === 'management'} onClick={() => setActiveTab('management')}>운영진</TabButton>
      </TabContainer>
      {renderContent()}
      <Footer /> {/* Footer는 별도의 스타일을 가지므로 그대로 사용 */}
    </Container>
  );
};

export default App;