import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './notFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content max-w-[600px] my-[40px] mx-auto p-[20px]">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
