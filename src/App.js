import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar"
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="app">
     <Router>
       <Switch>
         <Route path="/search">
         <div className="app__page">
     <Sidebar />
     <SearchPage />
     </div>
         </Route>
         <Route path="/">
     <Header />
     <div className="app__page">
     <Sidebar />
     <RecommendedVideos />
     </div>
     </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;