import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'

import Container from '@/components/Container'

const HeaderContainer = styled.header`
${props => props.background};
  margin-bottom: 1.45rem;
`

const Heading1 = styled.h1`
  margin: 0;
`

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`

Header.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
}

export default function Header({
  background = 'background-color: #20232a',
  title = 'Polling App'
}) {
  return (
    <HeaderContainer background={background}>
      <Container>
        <Heading1>
          <Link href="/">
            <StyledLink>{title}</StyledLink>
          </Link>
        </Heading1>
      </Container>
    </HeaderContainer>
  )
}
