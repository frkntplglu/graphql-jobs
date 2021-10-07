import "./global/style.scss"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import JobList from './components/JobList/JobList';
import JobDetail from './components/JobDetail/JobDetail';
import PostJob from "./components/PostJob/PostJob";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.graphql.jobs/",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/post-job" exact>
            <PostJob />
          </Route>
          <Route path="/:company/:slug" exact>
            <JobDetail />
          </Route>
          <Route path="/" exact>
            <JobList />
          </Route>
        </Switch>
        
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
