import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom"
import { useAppSelector } from "../Data/hooks";
import CreatePlaylist from "../pages/CreatePlaylist";
import Home from "../pages/home";
import { RootState } from "../Data/store";

const AppRouter = () => {
    const accessToken = useAppSelector((state: RootState) => state.accessToken.value);
    return (
        < Router >
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create-playlist">
                    {accessToken !== undefined ? <CreatePlaylist /> : <Redirect to="/" />}
                </Route>
                <Route path="*" component={() => (<h1>ERROR 404 NOT FOUND</h1>)} />
            </Switch>
        </Router >
    )
}

export default AppRouter;