import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 300px;
  margin: 0 auto;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #62e18c;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  height: 50px;
  padding: 0 20px;
  background-color: #3f04a5;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-color: #3f04a5;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #5108cf;
  }
  &:active {
    background-color: #005acc;
  }
`;