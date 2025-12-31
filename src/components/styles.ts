import styled from 'styled-components'
import { colors } from '../styles/GlobalStyle'

export const HeaderBar = styled.header`
  background: ${colors.cream};
  padding: 40px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    padding: 24px 0;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: auto;
`

export const CartText = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.salmon};
`
