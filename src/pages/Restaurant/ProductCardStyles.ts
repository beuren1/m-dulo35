import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Card = styled.article`
  background: ${colors.salmon};
  color: ${colors.cream};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Image = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
`

export const Desc = styled.p`
  font-size: 14px;
  line-height: 22px;
  flex: 1;
`

export const PriceHint = styled.span`
  font-size: 12px;
  opacity: 0.9;
`
