import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import reducers from './reducers'
import PostsIndex from './components/PostsIndex'
import PostsShow from './components/PostsShow'
import PostsNew from './components/PostsNew'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

export default renderRoutes= () => (
   <Provider>
    <BrowserRouter>
        <Switch>
            <Route path="/api/v1/create" component={PostsNew} />
            <Route path="/api/v1/show" component={PostsShow} />
            <Route path="/api/v1/index" component={PostsIndex} />
        </Switch>
    </BrowserRouter>
   </Provider>
)