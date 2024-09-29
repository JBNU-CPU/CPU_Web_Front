import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/ImgSlider";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

import img from '../components/SliderImg/img1.png';

const Wrap = styled.div`
	width : 100%;
	display : flex;
	align-items : center;
	flex-direction : column;
`
const Button = styled.button`
	display : flex;
	flex-direction : column;
	align-items : center;
	width: 80%;
  border-radius: 10px;
  padding: 0;
  border: none;
  cursor: pointer;
  overflow: hidden;
	margin: 30px;

	img{
		width : 100%;
		aspect-ratio: 5/3;
		border-radius : 10px;
		object-fit: cover;
		margin-bottom : 10px;
	}
`
const Text = styled.text`
	color: ${props => props.color || '#F5F7FF'};
	font-size: ${props => props.fontSize || '15px'};
	margin-top: 5px;
`;
const PageIndex = styled.div`
	display : flex;
	align-items : center;
	justify-content : center;
	flex-direction : row;
	margin : 10px;
	p{
		color : white;
		cursor : default;
	}
`
const PageBtn = styled.button`
	margin: 0 5px;
	background-color: rgba(0,0,0,0);
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	display : flex;
	justify-content : center;
	text-align : center;
	&:disabled {
		cursor : default;
	}
`
const ArrowForward = styled(MdOutlineArrowForwardIos)`
  margin-left: 1px;
  color: ${(props) => (props.disabled ? 'grey' : 'white')};
`;
const ArrowBack = styled(MdOutlineArrowBackIos)`
    margin-left: 1px;
    color: ${(props) => (props.disabled ? 'grey' : 'white')};
`;

const Gallery = () => {
	const [currentPg, setCurrentPg] = useState(0); //현재 페이지
	const itemsPerPg = 5; // 페이지당 나타낼 게시물 수

	const totalPg = Math.ceil(items.length/itemsPerPg); // 전체 페이지 계산

	const currentItem = items.slice(currentPg*itemsPerPg, (currentPg+itemsPerPg)); // 현재 페이지에 나타낼 게시물

	const nextPg = () =>{
		if(currentPg<totalPg-1){
			setCurrentPg(currentPg+1);
		}
	};

	const prevPg = () =>{
		if(currentPg>0){
			setCurrentPg(currentPg-1);
		}
	};

	//게시물 접근
	const handleDetail =(id) =>{


	}

  return(
		<>
		<Header/>
		<Slider title='갤러리' content='CPU 활동사진들을 기록하는 공간입니다.'/>
			
    	<Wrap>
				{currentItem.map((item)=>(
					<Button key={item.id} onClick={handleDetail(item.id)}>
						<img src={item.image} alt={item.title}/>
						<Text>{item.title}</Text>
						<Text color="#BCC0CF" fontSize="12px">{item.date}</Text>

					</Button>
				))}
				<PageIndex>
					<PageBtn onClick={prevPg} disabled={currentPg===0}><ArrowBack disabled={currentPg===0}/></PageBtn>
					<p>{currentPg+1} / {totalPg}</p>
					<PageBtn onClick={nextPg} disabled={currentPg===totalPg-1}><ArrowForward disabled={currentPg===totalPg-1}/></PageBtn>
				</PageIndex>

    	</Wrap>
			<Footer/>
	</>
	);
};

export default Gallery;


//게시물들..어떻게 해야 할까용가리
const items =[
	{
		id: 1,
		title: '멋대 12기 해커톤',
		date: '2024-09-29',
		author: '작성자',
		description: '멋대 12기 해커톤 내용내용내용내용ㄴ애ㅛㅇ애',
		image: img,
	},
	{
		id: 2,
		title: '두번째',
		date: '2024-09-28',
		author: '작성자 B',
		description: '멋대 12기 해커톤 내용내용내용내용ㄴ애ㅛㅇ애 두번째',
		image: img,
	},
	{
		id: 3,
		title: '멋대 12기 해커톤',
		date: '2024-09-29',
		author: '작성자',
		description: '멋대 12기 해커톤 내용내용내용내용ㄴ애ㅛㅇ애',
		image: img,
	},
	{
		id: 4,
		title: '두번째',
		date: '2024-09-28',
		author: '작성자 B',
		description: '멋대 12기 해커톤 내용내용내용내용ㄴ애ㅛㅇ애 두번째',
		image: img,
	},
	{
		id: 5,
		title: '멋대 12기 해커톤',
		date: '2024-09-29',
		author: '작성자',
		description: '멋대 12기 해커톤 내용내용내용내용ㄴ애ㅛㅇ애',
		image: img,
	},
	{
		id: 6,
		title: '두번째',
		date: '2024-09-28',
		author: '작성자 B',
		description: '멋대 12기 해커톤 내용내용내용내용ㄴ애ㅛㅇ애 두번째',
		image: img,
	},
]
