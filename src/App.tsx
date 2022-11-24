import React from 'react';
import './style/App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Layouts from './components/Layouts/index';
import { Layout } from 'antd';
// import { useSelector } from 'react-redux'
// import { RootState } from './store/index'
// import routers from './router'
import Login from './pages/Login/index'
// import Home from './pages/Home/index'
function App() {
  // const values = useSelector((state: RootState) => state.App.text)
  // const dispatch = useDispatch()
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      {/* <Route path='/' element={<Layouts />}>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>12321</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Route> */}
      {/* <Layouts></Layouts> */}
      {/* <Home path='/' component={routers} /> */}
      <Route path='/' element={<Layouts />}></Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
