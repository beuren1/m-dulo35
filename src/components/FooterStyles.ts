import styled from 'styled-components'
import { colors } from '../styles/GlobalStyle'

export const FooterBar = styled.footer`
  background: ${colors.cream};
  padding: 40px 0;
  margin-top: 120px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`

export const Socials = styled.div`
  display: flex;
  gap: 16px;

  a {
    font-size: 12px;
    font-weight: 700;
    color: ${colors.salmon};
    background: rgba(230, 103, 103, 0.12);
    padding: 8px 10px;
    border-radius: 4px;
  }
`

export const Copy = styled.p`
  max-width: 480px;
  text-align: center;
  font-size: 10px;
  line-height: 18px;
  color: ${colors.salmon};
`
