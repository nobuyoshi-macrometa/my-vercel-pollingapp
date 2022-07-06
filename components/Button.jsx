import styled from 'styled-components'

const Button = styled.button`
  padding: 8px 20px;
  background-color: #6767E6;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  border: none;
  filter: ${({ disabled }) => (disabled ? 'grayscale(1)' : 'hue-rotate(0deg)')};
  transition: all 300ms linear;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:focus,
  &:hover {
    background-color: #4D4DAD;
  }
`

export default Button
