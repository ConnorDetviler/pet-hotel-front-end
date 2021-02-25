import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// import rootReducer from './redux/reducers/_root.reducer'; // imports ./redux/reducers/index.js
// import rootSaga from './redux/sagas/_root.saga'; // imports ./redux/sagas/index.js

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeEvery('FETCH_PETS', petSaga)
}

function* petSaga() {
  try {
    const petsGet = yield axios.get(`/api/pets`)
    console.log(petsGet.data)
    yield put({
      type: 'SET_PETS',
      payload: petsGet.data
    })
  } catch (err) {
    console.log('ERROR in petSaga', err)
  }
}

const petsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PETS':
      return action.payload
    default:
      return state
  }
}

const ownersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OWNERS':
      return action.payload
    default:
      return state
  }
}


const store = createStore(
  combineReducers({
    petsReducer,
    ownersReducer
  }),
  // adds all middleware to our project including saga and logger
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
