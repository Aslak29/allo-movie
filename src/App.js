import {BrowserRouter, Routes, Route} from "react-router-dom"
import Accueil from './pages/Accueil';
import Details from './pages/Details';
import Favoris from './pages/Favoris';

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path="/" element={<Accueil />}/>
  <Route path="/Details/:movieId" element={<Details />}/>
  <Route path="/Favoris" element={<Favoris />}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
