import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'; // 헤더 컴포넌트 임포트
import Footer from '../components/Footer'; 
import Slider from "../components/ImgSlider";
import MainPitcture from './Pic/StudyMain.png'
// 전체 페이지를 감싸는 컨테이너
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  color: white;
  background-color: #1a1a1a;
  min-height: 100vh;
  box-sizing: border-box;
`;

// 검색 섹션 스타일
const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
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
  background-color: #555;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #777;
  }
`;

// 제목 검색 테이블 스타일
const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

const TableHead = styled.th`
  padding: 10px;
  border-bottom: 2px solid #444;
  text-align: left;
  color: #aaa;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #444;
`;

// 페이지네이션과 버튼
const Pagination = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #555;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #777;
  }
`;
const Notification = () => {
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
    return(
        <>
        <Header/>
        <Slider title="공지사항"/>
        <Container>
      

      <SearchSection>
        <Select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="title">제목</option>
          <option value="author">작성자</option>
          <option value="author">제목+내용</option>
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
        <Button>◀</Button> 1 / 11 <Button>▶</Button>
      </Pagination>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button>글쓰기</Button>
      </div>
    </Container>
    <Footer />
    </>
    );
};

export default Notification;
