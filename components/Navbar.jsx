import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Image, Box } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Nav>
        <div>
            <Box boxSize='80px'>
                <Image
                src='https://i.imgur.com/m2GskYc.png'
                alt='taylor-logo' 
                objectFit="cover"
                />
            </Box>
        </div>
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



