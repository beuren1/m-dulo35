import { restaurants } from '../../data/mock'
import { Container, Grid } from '../../styles/Layout'
import Hero from './Hero'
import RestaurantCard from './RestaurantCard'

export default function Home() {
  return (
    <>
      <Hero />
      <Container style={{ marginTop: 80 }}>
        <Grid>
          {restaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </Grid>
      </Container>
    </>
  )
}
