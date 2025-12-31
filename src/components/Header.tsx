import { Link, useLocation } from 'react-router-dom'
import { Container } from '../styles/Layout'
import { HeaderBar, Logo, CartText } from './styles'
import logo from '../assets/logo.svg'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <HeaderBar>
      <Container>
        <div>
          <Link to="/">
            <Logo src={logo} alt="eFood" />
          </Link>
        </div>

        <div>
          {isHome ? (
            <CartText>0 produto(s) no carrinho</CartText>
          ) : (
            <Link to="/">
              <CartText>Restaurantes</CartText>
            </Link>
          )}
        </div>
      </Container>
    </HeaderBar>
  )
}
