import { createBox, createText } from '@shopify/restyle';
import React from 'react';

import { TouchableOpacity } from 'react-native';
import { ThemeProps } from '../../../theme';

interface IButton {
    title: string;
}

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export default function Button(data: IButton) {
    return (
        <Box width="100%" paddingHorizontal='l' marginTop='xl'>
            <TouchableOpacity>
                <Box 
                    width="100%" 
                    height={50} 
                    bg="blue" 
                    marginRight="s" 
                    alignItems="center"
                    justifyContent="center" 
                    flexDirection="row"
                    borderRadius={20}
                >
                    <Text color="white" textAlign="center" marginLeft="s">{data.title}</Text>
                </Box> 
            </TouchableOpacity>
        </Box>
    );
}
