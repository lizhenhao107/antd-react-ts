import React from 'react';
import './style/App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { RootState } from './store/index'
// import routers from './router'
import Login from './pages/Login/index'
// import Home from './pages/Home/index'
function App() {
  // const values = useSelector((state: RootState) => state.App.text)
  // const dispatch = useDispatch()
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      {/* <Home path='/' component={routers} /> */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
