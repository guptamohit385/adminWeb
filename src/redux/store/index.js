import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducer)
export let store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
export let persistor = persistStore(store)
