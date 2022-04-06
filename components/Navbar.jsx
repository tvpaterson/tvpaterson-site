import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <div>
        <Nav>This is the navbar</Nav>
    </div>
  )
}

export default Navbar

const Nav = styled.nav`
    height: 80px;
    background: #f4f4;
`;