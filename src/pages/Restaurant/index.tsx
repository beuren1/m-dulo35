import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Grid } from '../../styles/Layout'
import { menuByRestaurant, restaurants, Dish } from '../../data/mock'
import { Banner, BannerInner } from './styles'
import ProductCard from './ProductCard'
import DishModal from '../../components/DishModal'

export default function Restaurant() {
  const { id } = useParams()
  const restaurantId = Number(id)

  const restaurant = useMemo(
    () => restaurants.find((r) => r.id === restaurantId),
    [restaurantId]
  )

  const dishes = menuByRestaurant[restaurantId] ?? []
  const [selected, setSelected] = useState<Dish | null>(null)

  if (!restaurant) return null

  return (
    <>
      <Banner style={{ backgroundImage: `url(${restaurant.cover})` }}>
        <BannerInner>
          <Container>
            <p>{restaurant.type}</p>
            <h2>{restaurant.title}</h2>
          </Container>
        </BannerInner>
      </Banner>

      <Container style={{ marginTop: 56 }}>
        <Grid>
          {dishes.map((dish) => (
            <ProductCard key={dish.id} dish={dish} onClick={() => setSelected(dish)} />
          ))}
        </Grid>
      </Container>

      {selected && <DishModal dish={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
