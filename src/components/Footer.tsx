import { Container } from '../styles/Layout'
import { FooterBar, Socials, Copy } from './FooterStyles'
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <FooterBar>
      <Container>
        <img src={logo} alt="eFood" width={125} />
        <Socials>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <span>Instagram</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <span>Facebook</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <span>Twitter</span>
          </a>
        </Socials>
        <Copy>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade
          dos produtos é toda do estabelecimento contratado.
        </Copy>
      </Container>
    </FooterBar>
  )
}
