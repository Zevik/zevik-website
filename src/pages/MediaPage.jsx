import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  direction: rtl;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto;
`;

const MediaPage = () => {
  return (
    <PageContainer>
      <Title>מדיה וכתבות</Title>
      <Description>כאן יופיעו קטעי מדיה, כתבות, ראיונות וסרטונים.</Description>
    </PageContainer>
  );
};

export default MediaPage; 