import { Dish } from '../../data/mock'
import Button from '../../components/Button'
import { Card, Image, Title, Desc, PriceHint } from './ProductCardStyles'
import { formatPrice } from '../../utils/format'

type Props = {
  dish: Dish
  onClick: () => void
}

export default function ProductCard({ dish, onClick }: Props) {
  return (
    <Card>
      <Image src={dish.image} alt={dish.name} />
      <Title>{dish.name}</Title>
      <Desc>{dish.description}</Desc>
      <PriceHint>A partir de {formatPrice(dish.price)}</PriceHint>
      <Button type="button" onClick={onClick}>
        Mais detalhes
      </Button>
    </Card>
  )
}
