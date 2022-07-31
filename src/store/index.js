import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import appSaga from "../sagas/appSaga";
import appSlice from "./appSlice";
import uiSlice from "./uiSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { app: appSlice, ui: uiSlice },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(appSaga);
export default store;
