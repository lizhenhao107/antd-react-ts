import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/flex.css';
import 'antd/dist/reset.css';
import App from './App';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './store/index'
import { HashRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zh_CN}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
