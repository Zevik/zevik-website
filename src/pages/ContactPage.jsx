import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 4rem 5%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  text-align: right;
`;
const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
`;
const Textarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
`;
const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
`;
const SubmitButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.9; }
`;

export default function ContactPage() {
  return <div>Contact Page</div>;
} 