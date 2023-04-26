import { FormControl, Input, InputGroup, InputLeftElement, chakra } from '@chakra-ui/react'
import React, { FC } from 'react'
import { FaUserAlt } from 'react-icons/fa';


interface EmailProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    email: string | undefined;
    name: string;
    placeholder: string;
}

const CFaUserAlt = chakra(FaUserAlt);
export const Email: FC<EmailProps> = ({ name, email, placeholder, onChange }) => {
    return (
        <FormControl>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                />
                <Input
                    type="email"
                    name={name}
                    placeholder={placeholder}
                    value={email}
                    onChange={onChange}
                />
            </InputGroup>
        </FormControl>
    )
}
