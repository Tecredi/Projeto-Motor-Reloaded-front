import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

type Props = {
  icon: any;
  content: any;
};

const TextContainer = styled(Col)`
  font-family: 'Roboto Slab', sans-serif;
  color: rgb(255, 255, 255);
  font-size: 17px;
  text-align: left;
  padding-left: 20px;
`;

const IconContainer = styled(Col)`
  * {
    color: rgb(168, 200, 255);
    width: 40px;
    height: auto;
  }
`;

const AdvantageItem = ({ icon, content }: Props) => (
  <Row className={'mb-4'}>
    <IconContainer span={3}>{icon}</IconContainer>
    <TextContainer span={21}>{content}</TextContainer>
  </Row>
);

export default AdvantageItem;
