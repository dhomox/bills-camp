import { colors } from './theme';
import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 71px;
  line-height: 79px;
  letter-spacing: -1px;
  color: ${({ color }) => color ? color : colors.white};
`;

export const H2 = styled.h2`
  font-size: 40px;
  line-height: 46px;
  color: ${({ color }) => color ? color : colors.white};
`;

export const H3 = styled.h3`
  font-size: 25px;
  line-height: 32px;  
  color: ${({ color }) => color ? color : colors.white};
`;

export const Text = styled.p`
  font-family: SharpGrotesk,Open Sans,sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: ${({ color }) => color ? color : colors.white};
`;

export const Image = styled.img`
  flex-shrink: 0;
`;

export const Line = styled.hr`
  color: ${colors.white};
`;