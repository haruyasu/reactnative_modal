import React from 'react'
import {LogBox} from 'react-native'
import {RootNavigator} from './src/navigation'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import spaceReducer from './src/store/reducers/space'

const rootReducer = combineReducers({
  space: spaceReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

LogBox.ignoreAllLogs()

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App
