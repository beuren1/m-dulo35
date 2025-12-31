import { useEffect } from 'react'
import Button from './Button'
import { Dish } from '../data/mock'
import { ModalOverlay, ModalCard, ModalImage, ModalContent, CloseBtn } from './ModalStyles'
import { formatPrice } from '../utils/format'

type Props = {
  dish: Dish
  onClose: () => void
}

export default function DishModal({ dish, onClose }: Props) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <ModalOverlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <CloseBtn aria-label="Fechar" onClick={onClose}>
          ×
        </CloseBtn>

        <ModalImage src={dish.image} alt={dish.name} />
        <ModalContent>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p>Serve: 1 pessoa</p>
          <Button type="button">Adicionar ao carrinho - {formatPrice(dish.price)}</Button>
        </ModalContent>
      </ModalCard>
    </ModalOverlay>
  )
}
