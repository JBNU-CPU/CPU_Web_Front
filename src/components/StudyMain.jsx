import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: white;
    border-bottom: 2px solid #EA0079;
    text-align: center;
    width: 120px;
`;

const Summary = styled.p`
    color: white;
    font: 400 14px 'arial';
    text-align: center;
    padding-bottom: 20px;
`;

const SubmitWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    width: calc(90%);
    border-bottom: 1.5px solid white;
    margin: 0px;
    padding: 0px;
    margin-bottom: 40px;
`;

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
    &:hover {
        color: gray;
        cursor: pointer;
    }
`;

const ContentWrapper = styled.div`
    width: calc(90%);
    height: 100%;
    &:hover {
        cursor: pointer;
    }
`;

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
    background: #1B1B25;
    &:hover {
        border: 1px solid #EA0079;
    }
`;

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    margin: 15px 20px 5px 30px;
    align-items: center;
    background: none;
`;

const Icon = styled.img`
    background: white;
    width: 12px;
    height: 12px;
    background: none;
`;

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
`;

const StudyName = styled.p`
    font: 500 14px 'arial';
    color: white;
    padding: 0;
    margin: 0;
    margin-left: 30px;
    background: none;
`;

const Teacher = styled.p`
    font: 500 10px 'arial';
    color: white;
    padding: 0;
    margin: 5px 0px 15px 30px;
    background: none;
`;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-block: 20px;
`;

const PaginationButton = styled.button`
    border: none;
    padding: 5px 12px;
    margin: 0 5px;
    background-color: #ea0079;
    color: white;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        background-color: gray;
        cursor: not-allowed;
    }
`;

// 샘플 데이터 생성
const sampleData = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  studyName: `스터디 ${index + 1}`,
  teacher: `세션장: 박도현 / 요일: 화, 목`,
  state: index % 2 === 0 ? "모집중" : "모집완료",
}));

const StudyMain = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(`move to ${id}`);
    navigate(`/study/${id}`);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // 현재 페이지에 표시할 데이터 슬라이스
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sampleData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container>
      <Title>스터디</Title>
      <Summary>다양한 IT 분야 중 원하는 분야를 자율적으로 선택하여 공부하는 활동입니다.</Summary>
      <SubmitWrapper>
        <SubmitButton type="button">개설 신청</SubmitButton>
      </SubmitWrapper>
      {currentItems.map((item) => (
        <ContentWrapper key={item.id} onClick={() => handleClick(item.id)}>
          <Content>
            <Head>
              <Icon />
              <RecruitState>{item.state}</RecruitState>
            </Head>
            <StudyName>{item.studyName}</StudyName>
            <Teacher>{item.teacher}</Teacher>
          </Content>
        </ContentWrapper>
      ))}
      <PaginationWrapper>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </PaginationButton>
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(sampleData.length / itemsPerPage)}
        >
          다음
        </PaginationButton>
      </PaginationWrapper>
    </Container>
  );
};

export default StudyMain;
