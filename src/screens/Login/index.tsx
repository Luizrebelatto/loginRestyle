import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";

import ButtonSocialLogin from "../components/ButtonSocialLogin";
import Input from "../components/Input";
import Button from "../components/Button";
import { Switch } from "react-native";
import { useThemeContext } from "../../context/themeContext";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function Login(){ 
    const { isDarkMode, toggleTheme } = useThemeContext();

    return (
       <Box flex={1} bg="background" alignItems="center" justifyContent="center">
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleTheme}
                value={isDarkMode}
            />
            <Text color="title" variant="title">Create an account</Text>
            <Text variant="subtitle" marginBottom="m">Sign up with</Text>
            <Box flexDirection="row" marginBottom="l">
                <ButtonSocialLogin title="Google" iconName="google"/>
                <ButtonSocialLogin title="Apple" iconName="apple1"/>
            </Box>
            <Input
                keyboardType="default"
                label="Username"
                placeholder="Enter your name"
                isPassword={false}
            />
            <Input
                keyboardType="email-address"
                label="E-mail"
                placeholder="Enter your email"
                isPassword={false}
            />
            <Input
                keyboardType="default"
                label="Password"
                placeholder="Enter your password"
                isPassword={true}
            />
            <Button title="Register"/>
       </Box>
    )
}