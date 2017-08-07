import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import reducers from './reducers'
import App from './components/App'
import ArticlesIndex from './components/ArticlesIndex'
import ArticlesShow from './components/ArticlesShow'
import ArticlesNew from './components/ArticlesNew'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

 function renderRoutes() {
     return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/new" component={ArticlesNew} />
                        <Route path="/:id" component={ArticlesShow} />
                        <Route exact path="/" component={ArticlesIndex} />
                    </Switch> 
                </App>
            </BrowserRouter>
        </Provider>
     )
 }
    


export default renderRoutes
  