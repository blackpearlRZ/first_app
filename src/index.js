import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './EFM-TANGER-2023/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {storeStagiaire} from './EFM-TANGER-2023/redux/storeStagaire'
import { store } from './Redux/adduser1/store';
import { livreStore } from './EFM-BENIMELLAL-2023/exercise2/livreStore';
import ListLivre from './EFM-BENIMELLAL-2023/exercise2/listLivre';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   <Provider store={livreStore}>
         <ListLivre/>
   </Provider>
   </>
);