import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouters from './Routers/CustomerRouters.jsx';
import AdminRouters from './Routers/AdminRouters.jsx';

function App() {
  return (<div className='App'>
    <Routes>
      {/* Customer Routes */}
      <Route path="/*" element={<CustomerRouters />} />
      <Route path="/admin/*" element={<AdminRouters />}></Route>
      {/* Admin Routes */}
    </Routes>


  </div >);
}

export default App;
