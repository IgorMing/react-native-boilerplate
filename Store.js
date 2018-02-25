import { applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';

import reducers from './src/Reducers';

export default createStore(reducers, applyMiddleware(Thunk));
