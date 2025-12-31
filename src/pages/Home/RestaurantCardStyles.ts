import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Card = styled.article`
  border: 1px solid ${colors.salmon};
  background: ${colors.cream};
  display: flex;
  flex-direction: column;
`

export const CardHeader = styled.div`
  height: 160px;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const CardBody = styled.div`
  padding: 8px 8px 16px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.salmon};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.salmon};
  }
`

export const Rating = styled.div`
  display: flex;
  gap: 6px;
  font-weight: 900;
  color: ${colors.salmon};
`

export const CardFooter = styled.div`
  padding: 0 8px 8px;

  button {
    width: 100%;
    border: 0;
    background: ${colors.salmon};
    color: ${colors.cream};
    padding: 8px 0;
    font-size: 14px;
    font-weight: 700;
  }
`
