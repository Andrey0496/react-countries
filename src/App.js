import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import Country from './screens/Country';
import Home from './screens/Home';
import GlobalStyles from './styles/GlobalStyles';

function AppRoutes() {
  return (
    <Switch>
      <Route path="/country/:countryId">
        <Country />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
