import styled from 'styled-components'
import { colors } from '../styles/GlobalStyle'

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 999;
`

export const ModalCard = styled.div`
  position: relative;
  max-width: 1024px;
  width: 100%;
  background: ${colors.salmon};
  color: ${colors.cream};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: 0;
  background: rgba(255, 255, 255, 0.2);
  color: ${colors.cream};
  font-size: 20px;
  border-radius: 4px;
`

export const ModalImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
