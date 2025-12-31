import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const HeroBar = styled.section`
  background: ${colors.cream};
  padding: 40px 0 24px;

  @media (max-width: 600px) {
    padding: 24px 0 16px;
  }
`

export const HeroText = styled.h1`
  max-width: 540px;
  margin: 0 auto;
  text-align: center;
  font-size: 36px;
  line-height: 42px;
  font-weight: 900;
  color: ${colors.salmon};

  @media (max-width: 600px) {
    font-size: 26px;
    line-height: 32px;
  }
`
