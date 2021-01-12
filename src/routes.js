import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function route() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/teste" exact component={() => <h2>Yesye</h2>} />
            </Switch>
        </BrowserRouter>
    )
};