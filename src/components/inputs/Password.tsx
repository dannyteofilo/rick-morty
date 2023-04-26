import { Button, FormControl, chakra, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import React, { FC, useState } from 'react'
import { FaEye, FaLock } from 'react-icons/fa';

interface PasswordProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    password: string | undefined;
    name: string;
    placeholder: string;
}
const CFaLock = chakra(FaLock);
const CFaEye = chakra(FaEye);

export const Password: FC<PasswordProps> = ({ onChange, password, name, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <FormControl>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLock color="gray.300" />}
                />
                <Input
                    type={showPassword ? "text" : "password"}
                    name={name}
                    placeholder={placeholder}
                    value={password}
                    onChange={onChange}
                />
                <InputRightElement width="4.5rem">
                    <Button
                        h="1.75rem"
                        size="sm"
                        onClick={togglePasswordVisibility}
                    >
                        <CFaEye color="gray.300" />
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    )
}
