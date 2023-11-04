import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Todo from './pages/Todo';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {


  return (
  <>
  <BrowserRouter>
   <Routes>
    
    <Route path='/' element={<Todo/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
 
   </Routes>
  </BrowserRouter>

  </>
  )
}

export default App