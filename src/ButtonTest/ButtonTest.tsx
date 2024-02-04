import React from 'react';
import {Button} from '@chakra-ui/react'

export type ButtonTestProps = {
    buttonText: string;
}

export const ButtonTest = (props: ButtonTestProps) => {
    return (
        <Button colorScheme='blue'>{props.buttonText}</Button>
    )
}

