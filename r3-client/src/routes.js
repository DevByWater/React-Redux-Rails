import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom'
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
            <Route path="/articles/new" component={ArticlesNew} />
            <Route path="/articles/show" component={ArticlesShow} />
            <Route exact path="/" component={ArticlesIndex} />
        </Switch>
    </BrowserRouter>
   </Provider>
)