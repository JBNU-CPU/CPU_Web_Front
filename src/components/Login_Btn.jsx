import React from 'react';
import styled from 'styled-components';

const Button  = styled.button`
    width: 70px;
    height: 30px;
    border-radius: 5px;
    background: ${({isActive}) => (isActive ? '#3987EC' : '#6F7486')};
    text-align: center;
    font : bold 12px 'arial';
    border : none;
    font-weight: 700;
    color:#E6E9F3;
    line-height: 12.5px;
    &:hover{
        cursor: ${({isActive}) => (isActive ? 'pointer' : 'default')};
    }
`;

const Complete_Btn = ({onClick, isActive}) => {
    return(
        <Button onClick={isActive ? onClick : null} isActive={isActive} type='submit'>로그인</Button>
    );
};

export default Complete_Btn;