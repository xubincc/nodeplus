import { createStore,applyMiddleware } from 'redux';
import Reducer from './Reducer';
import  { persistStore,persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/es/storage'

const persistConfig = {
  key: 'root',
  storage,  // storage is now required
  // blacklist: [], // reducer 里不持久化的数据
// 　whitelist: ['subject']  //reducer里持久化的数据
}


const persistReducerResult = persistReducer(persistConfig, Reducer);


const configureStore = onComplete => {
  // let store = createStoreWithMiddleware(persistReducerResult);
const store = createStore(persistReducerResult,applyMiddleware(thunk))
  
	let persistor = persistStore(store, null, onComplete);
	return { persistor, store };
};

const { persistor, store } = configureStore();

export  {store};

// let reducer = persistReducer(storageConfig, Reducer);

// const store = createStore(reducer,applyMiddleware(thunk))
// let persistor = persistStore(store);
// export {store,persistor} ;
