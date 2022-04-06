import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styled from '@emotion/styled'
import logo from '../styles/images/Taylor-Logo-Fire-01.png'

const Navbar = () => {
  return (
    <Nav>
        <div>
                <Image
                src={logo}
                width={50}
                height={50}
                alt='taylor-logo' 
                objectFit="cover"
                />
        </div>
        <LinkContainer>
        <div>
            <Link href="/" passHref>
                <StyledLink>Home</StyledLink>
            </Link>
        </div>
        <div>
            <Link href="/" passHref>
                <StyledLink>Projects</StyledLink>
            </Link>
        </div>
        <div>
            <Link href="/" passHref>
                <StyledLink>Logs</StyledLink>
            </Link>
        </div>
        <div>
            <Link href="/" passHref>
                <StyledLink>Contact</StyledLink>
            </Link>
        </div>
        </LinkContainer>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled.a`
    padding: 0rem 2rem;
`;

const LinkContainer = styled.div`
    
    display: flex;
    align-items: center;
`



