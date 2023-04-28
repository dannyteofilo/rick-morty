import { Flex } from '@chakra-ui/react'
import RickYMorty from "../assets/rick_y_morty.svg"
import React, { FC } from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            justifyContent="center"
            alignItems="center"
            background={`url(${RickYMorty}) no-repeat`}
            bgSize="cover"
        >
            {children}
        </Flex>
    )
}

export default AuthLayout
