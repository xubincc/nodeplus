import React from 'react';
import './styles/common.css'
import './styles/hovers.css'

import {store} from "./Store";
import { Provider } from 'react-redux'
import Intel from './Intl'

import { BrowserRouter, Route } from 'react-router-dom'
import Home from './scenes/Home'
import Privacy from './scenes/Terms/privacy'
import TermsOfUse from './scenes/Terms/termsOfUse'


function App() {
  return (
        <Provider store={store}>
            <Intel>
              <BrowserRouter>
                <Route path="/" exact name="home" component={Home} />
                <Route path="/Privacy" exact name="privacy" component={Privacy} />
                <Route path="/TermsOfUse" exact name="terms" component={TermsOfUse} />
              </BrowserRouter>
            </Intel>
        </Provider>
  )
}

export default App;
