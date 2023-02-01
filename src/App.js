import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import Index from './Components/Index/Index'
import '../src/Style/ResetResponsive.css'
function App() {
  return (
    <>
    
   <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Index />}/>
        <Route path='/login' exact element={<Login />}/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
