import React from 'react';
import styled from 'styled-components';

const Button  = styled.button`
    width: 70px;
    height: 30px;
    border-radius: 5px;
    background: #6F7486;
    text-align: center;
    font : bold 12px 'arial';
    border : none;
    font-weight: 700;
    color:#E6E9F3;
    &:hover{
        cursor: pointer;
    }
`;

const Certification = () => {
    return(
        <Button>인증요청</Button>
    );
};

export default Certification;