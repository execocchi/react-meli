import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/index.scss';
import Navbar from './layout/Navbar/index';
import ItemDetails from './pages/ItemDetails';
import ShowItems from './pages/ShowItems';
import Search from './pages/Search';
import Main from './layout/Main';
import Error from './components/Error';

const App = () => (
    <Router>
        <div className='App'>
            <Navbar />
            <Main>
                <Switch>
                    <Route exact path='/items/:id' component={ItemDetails} />
                    <Route exact path='/items' component={ShowItems} />
                    <Route exact path='/' component={Search} />
                    <Route path='*' component={Error} />
                </Switch>
            </Main>
        </div>
    </Router>
);

export default App;
