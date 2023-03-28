import {BrowserRouter, Routes, Route} from "react-router-dom"
import Accueil from './pages/Accueil';
import Details from './pages/Details';
import Favoris from './pages/Favoris';
import {Provider} from "react-redux";
import {store} from "./store"


function App() {
  return (
<Provider store={store}>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Accueil />}/>
  <Route path="/Details/:movieId" element={<Details />}/>
  <Route path="/Favoris" element={<Favoris />}/>
</Routes>
</BrowserRouter>
</Provider>
  );
}

export default App;
