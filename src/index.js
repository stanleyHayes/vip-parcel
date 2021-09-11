import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import {THEME} from "./themes/themes";
import {ThemeProvider} from "@material-ui/styles";
import {CONSTANTS} from "./constants/constants";
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

const variant = localStorage.getItem(CONSTANTS.VIP_PARCEL_TOKEN_KEY) ? JSON.parse(localStorage.getItem(CONSTANTS.VIP_PARCEL_TOKEN_KEY)) : 'dark';
ReactDOM.render(
    <React.StrictMode>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={variant === 'dark' ? THEME.darkTheme : THEME.lightTheme}>
                    <App/>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
        </MuiPickersUtilsProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
