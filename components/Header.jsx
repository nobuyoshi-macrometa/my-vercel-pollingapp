import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'

import Container from '@/components/Container'
import Logo from '@/assets/macrometa-logo-white.svg'

const HeaderContainer = styled.header`
${props => props.background};
  margin-bottom: 1rem;
`

const Heading1 = styled.h1`
  margin: 0;
`

const StyledLink = styled.a`
  color: white;
  cursor: pointer;
  display: block;
  text-decoration: none;
`

const StyledLogo = styled.img`
  height: 28px;
  margin: 0 0 4px;
`

Header.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
}

export default function Header({
  background = 'background-color: #20232a'
}) {
  return (
    <HeaderContainer background={background}>
      <Container>
        <Heading1>
          <Link href="/">
            <StyledLink>
              <StyledLogo src={Logo.src} />
            </StyledLink>
          </Link>
        </Heading1>
      </Container>
    </HeaderContainer>
  )
}
