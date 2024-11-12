import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'; // 헤더 컴포넌트 임포트
import Footer from '../components/Footer'; // 푸터 컴포넌트 임포트
import MainPitcture from './Pic/StudyMain.png'
import WritePost from './WritePost';
import CommentSection from './CommentSection';

// 전체 페이지를 감싸는 컨테이너
const Container = styled.div`
  font-family: Arial, sans-serif;
  color: white;
  background: transparent;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderImg = styled.img`
    width: 100%;
    height: 250px;
    opacity: 0.5;
    @media screen and (min-width : 768px) {
        height: 400px;
    }
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

// 제목 이미지와 텍스트를 감싸는 배경 이미지 컨테이너
const TitleContainer = styled.div`
  background-image: url('/background-image.jpg'); /* 배경 이미지 경로 수정 */
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TitleText = styled.h1`
  font-size: 24px;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

// 검색 섹션 스타일
const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  background: transparent;
`;

const Select = styled.select`
  padding: 5px;
  background-color: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  padding: 5px;
  width: 200px;
  background-color: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 5px 10px;
  font: bold 13px 'arial';
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #EA0079;
  &:hover {
    color: gray;
  }
`;

// 제목 검색 테이블 스타일
const Table = styled.table`
  width: calc(80%);
  margin-top: 20px;
  border-collapse: collapse;
  background: transparent;
  text-align: center;
`;

const TableHead = styled.th`
  padding: 10px;
  border-bottom: 2px solid #444;
  text-align: center;
  color: #aaa;
  background: transparent;
  font: bold 14px 'arial';
`;

const TableRow = styled.tr`
  cursor: pointer;
  background: transparent;
  &:hover {
    background-color: #333;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #444;
  background: transparent;
  font: bold 14px 'arial';
`;

// 페이지네이션과 버튼
const Pagination = styled.div`
  text-align: center;
  margin-top: 20px;
  background: transparent;

`;

const Button = styled.button`
  padding: 5px 10px;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #EA0079;
  font: bold 13px 'arial';
  &:hover {
    color: #777;
  }
  &.page{
    border: none;
  }
`;

const Community = () => {
  const [searchType, setSearchType] = useState('title');
  const [searchTerm, setSearchTerm] = useState('');
  const posts = [
    { id: 1, title: 'Unity 2D 프로젝트', author: '박도현', date: '24.08.31' },
    { id: 2, title: 'Unity 2D 프로젝트', author: '박도현', date: '24.08.31' },
    { id: 3, title: 'Unity 2D 프로젝트', author: '박도현', date: '24.08.31' },
    { id: 4, title: 'Unity 2D 프로젝트', author: '박도현', date: '24.08.31' },
    { id: 5, title: 'Unity 2D 프로젝트', author: '박도현', date: '24.08.31' },
    { id: 6, title: 'Unity 2D 프로젝트', author: '박도현', date: '24.08.31' },
    { id: 7, title: 'Unity 2D 프로젝트', author: '박도현', date: '24.08.31' },
  ];

  const handleSearch = () => {
    // 검색 로직을 여기에 추가 (예: API 요청 등)
    console.log(`검색 유형: ${searchType}, 검색어: ${searchTerm}`);
  };

  return (
    <Container>
      <Header />
      <PictureWrapper>
        <HeaderImg src= {MainPitcture} alt="pic"/>
        <Title>커뮤니티</Title>
        <Summary>부원들과 소통하는 공간입니다.</Summary>
      </PictureWrapper>

      <SearchSection>
        <Select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="title">제목</option>
          <option value="author">작성자</option>
        </Select>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <SearchButton onClick={handleSearch}>검색</SearchButton>
      </SearchSection>

      <Table>
        <thead>
          <tr>
            <TableHead scope="col">제목</TableHead>
            <TableHead scope="col">작성자</TableHead>
            <TableHead scope="col">작성일</TableHead>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>{post.date}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Button className='page'>◀</Button> 1 / 11 <Button className='page'>▶</Button>
      </Pagination>
      
      <div style={{ textAlign: 'center', marginTop: '20px', background :'transparent', marginBottom:'20px'}}>
        <Button>글쓰기</Button>
      </div>

      <Footer />
    </Container>
  );
};

export default Community;
