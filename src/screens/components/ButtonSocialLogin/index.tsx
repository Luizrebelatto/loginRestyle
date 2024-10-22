import { createBox, createText } from '@shopify/restyle';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

import { TouchableOpacity } from 'react-native';
import { ThemeProps } from '../../../theme';

interface IButtonSocialLogin {
    title: string;
    iconName: "apple1" | "google"
}

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export default function ButtonSocialLogin(data: IButtonSocialLogin) {
    return (
        <TouchableOpacity>
            <Box 
                width={140} 
                height={50} 
                bg="gray" 
                marginRight="s" 
                alignItems="center"
                justifyContent="center" 
                flexDirection="row"
                borderRadius={20}
            >
                <AntDesign name={data.iconName} size={24} color="white" />
                <Text color="white" textAlign="center" marginLeft="s">{data.title}</Text>
            </Box> 
        </TouchableOpacity>
    );
}
