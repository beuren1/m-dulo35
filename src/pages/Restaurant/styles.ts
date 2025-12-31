import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Banner = styled.section`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const BannerInner = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);

  > div {
    height: 100%;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    color: ${colors.white};
    font-size: 32px;
    font-weight: 100;
  }

  h2 {
    color: ${colors.white};
    font-size: 32px;
    font-weight: 900;
  }

  @media (max-width: 600px) {
    p, h2 { font-size: 24px; }
  }
`
