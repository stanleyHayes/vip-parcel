import {createTheme} from '@material-ui/core';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#001E3CF2',
            paper: '#001428'
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
        fontFamily: 'Urbanist,Raleway, IBM Plex Sans'
    },
    shape: {
        borderRadius: 16
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
        fontFamily: 'Urbanist, Raleway, IBM Plex Sans'
    },
    shape: {
        borderRadius: 16
    }
});

export const THEME = {darkTheme, lightTheme};