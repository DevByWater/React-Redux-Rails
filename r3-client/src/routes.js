import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import reducers from './reducers'
import ArticlesIndex from './components/ArticlesIndex'
import ArticlesShow from './components/ArticlesShow'
import ArticlesNew from './components/ArticlesNew'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

export default renderRoutes= () => (
   <Provider>
    <BrowserRouter>
        <Switch>
            <Route path="/api/v1/create" component={ArticlesNew} />
            <Route path="/api/v1/show" component={ArticlesShow} />
            <Route path="/api/v1/index" component={ArticlesIndex} />
        </Switch>
    </BrowserRouter>
   </Provider>
)