import { createTheme } from "@shopify/restyle"

const theme = createTheme({
    colors: {
        background: "#0F101B",
        blue: "#2463EB",
        title: "#FFFFFF",
        gray: "#272832",
        lightGray: "#4B4B5B",
        mediumGray: "#78798A",
        white: "#FFFFFF"
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40
    },
    textVariants: {
        defaults: {
            color: "blue",
            fontFamily: "Poppins_400Regular"
        },
        title: {
            fontSize: 30,
            fontFamily: "Poppins_700Bold"
        },
        subtitle: {
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
            color: "lightGray"
        }
    }
})

const darkTheme = {
    ...theme,
    colors: {
        background: "#F6F6FB",
        blue: "#4A90E2",
        title: "#756f6f",
        gray: "#272832",
        lightGray: "#4B4B5B",
        mediumGray: "#78798A",
        white: "#FFFFFF"
    },
  };

type ThemeProps = typeof theme;

export { theme, ThemeProps, darkTheme } 