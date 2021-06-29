import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailProductPage from '../pages/DetailProductPage';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/DetailProductPage/">
                    <DetailProductPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;