import { applyMiddleware, combineReducers, createStore } from "redux";
import { tasks } from "./tasks";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import session from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage: session,
    whitelist: ["tasks"],
};

const combinedReducer = combineReducers({ tasks });

const rootReducer = persistReducer(persistConfig, combinedReducer);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof rootReducer>;

// redux-logger(+ -D @types/redux-logger)
// 상태 변경 시 console.log로 보여줌
// -D redux-devtools-extension
// redux-persist
// 상태가 localStorage나 sessionStorage를 통해 남아 있을 수 있도록 도와주는 middlware
