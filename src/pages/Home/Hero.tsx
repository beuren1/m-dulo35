import { Container } from '../../styles/Layout'
import { HeroBar, HeroText } from './styles'

export default function Hero() {
  return (
    <HeroBar>
      <Container>
        <HeroText>
          Viva experiências gastronômicas no conforto da sua casa
        </HeroText>
      </Container>
    </HeroBar>
  )
}
