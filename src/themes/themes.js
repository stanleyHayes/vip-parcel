import {createTheme} from '@material-ui/core';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#001E3CBF',
            paper: '#001E3CFF'
        },
        text: {
            primary: '#ffffff',
            secondary: '#AAB4BEFF'
        },
        primary: {
            main: '#001E3CFF'
        }
    },
    typography: {
        fontFamily: 'IBM Plex Sans, Urbanist, Raleway'
    },
    shape: {
        borderRadius: 32
    }
});

const lightTheme = createTheme({
    palette: {
        type: 'light',
        background: {
            default: '#E5E5E5',
            paper: '#ffffff'
        },
        text: {
            primary: '#132F4C',
            secondary: '#20262D'
        },
        primary: {
            main: '#ffffff'
        }
    },
    typography: {
        fontFamily: 'IBM Plex Sans, Urbanist, Raleway'
    },
    shape: {
        borderRadius: 32
    }
});

export const THEME = {darkTheme, lightTheme};