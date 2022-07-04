import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import dashboardReducers from './reducers/dashboard'


const rootReducer = combineReducers({
    items : dashboardReducers
})
let store = createStore(rootReducer, applyMiddleware(thunk))
export default store