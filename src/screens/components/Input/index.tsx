import { createBox, createText } from '@shopify/restyle';
import React from 'react';

import { TextInput } from 'react-native';
import { ThemeProps } from '../../../theme';

interface IInput {
    placeholder: string;
    label: string;
    keyboardType: "default" | "email-address";
    isPassword: boolean;
}

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export default function Input(data: IInput) {
    return (
        <Box flexDirection="row" alignItems="center" width="100%" justifyContent='center'>
            <Box width={100} height={50} justifyContent='center'>
                <Text marginRight="m" color="title" textAlign='left'>{data.label}</Text>
            </Box>
            <Box width={200} height={50} borderBottomWidth={2} borderStyle="solid" borderBottomColor="gray" >
                <TextInput
                    keyboardType={data.keyboardType}
                    style={{ height: 50, color: 'white', paddingLeft: 5 }}
                    placeholder={data.placeholder}
                    placeholderTextColor="#545462"
                    secureTextEntry={data.isPassword}
                />
            </Box>
        </Box>
    );
}
