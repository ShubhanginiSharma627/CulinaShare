import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import RecipeDetail from './screens/RecipeDetail';
import Contribute from './screens/Contribute';
import Favorites from './screens/Favorites';
import AboutUs from './screens/AboutUs';
import NavigationBar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import {  useTheme } from './ThemeContext';
function App() {
  const {  theme } = useTheme();
  return (
    <Provider store={store}>
    <Router>
      <div className="App" style={{backgroundColor: theme == "dark" ? "#001F3F" : "#F4EAD3"}}>
        <NavigationBar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
