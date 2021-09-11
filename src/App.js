import './App.css';
import {Switch, Route} from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard-page";
import ArchivesPage from "./pages/archives/archives-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import LoginPage from "./pages/authentication/login-page";
import ResetPasswordPage from "./pages/authentication/reset-password";
import DeliveriesPage from "./pages/deliveries/deliveries-page";
import ParcelsPage from "./pages/parcels/parcels-page";
import ProfilePage from "./pages/profile/profile-page";
import SettingsPage from "./pages/settings/settings-page";
import {ThemeProvider} from "@material-ui/styles";
import {useSelector} from "react-redux";
import {selectUI} from "./redux/ui/ui-reducer";
import {THEME} from "./themes/themes";

function App() {
    const {variant} = useSelector(selectUI);
    return (
        <ThemeProvider theme={variant === 'dark' ? THEME.darkTheme : THEME.lightTheme}>
            <Switch>
                <Route exact={true} path="/" component={DashboardPage}/>
                <Route exact={true} path="/archives" component={ArchivesPage}/>
                <Route exact={true} path="/auth/forgot-password" component={ForgotPasswordPage}/>
                <Route exact={true} path="/auth/login" component={LoginPage}/>
                <Route exact={true} path="/auth/reset-password" component={ResetPasswordPage}/>
                <Route exact={true} path="/deliveries" component={DeliveriesPage}/>
                <Route exact={true} path="/profile" component={ProfilePage}/>
                <Route exact={true} path="/parcels" component={ParcelsPage}/>
                <Route exact={true} path="/settings" component={SettingsPage}/>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
