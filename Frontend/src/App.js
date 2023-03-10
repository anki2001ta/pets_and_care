import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/login';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Pages/Navbar';
import Mobile from './Pages/mobile';
import { useEffect, useState } from 'react';
import Cat from './Pages/Cat';


function App() {
  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () => setSize(window.innerWidth);

  useEffect(() => (window.onresize = updateSize), []);

  return (
    <div className="App">
       {/* <Mobile/> */}
     <AllRoutes/>
     
    </div>
  );
}

export default App;
