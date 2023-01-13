import {
  Action,
  AnyAction,
  CombinedState,
  configureStore,
  Dispatch,
  EmptyObject,
  ThunkDispatch
} from "@reduxjs/toolkit";
import logger from "redux-logger";
// STATE PERSIST
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { ThunkAction } from "redux-thunk";

// REDUCERS
import { default as reducers } from "./rootReducer";
import { CombinedRootState } from "./slices/combined-state";
import storage from "./storage";

const devMode = import.meta.env.DEV;

const persistConfig = {
  key: "exx_dapp",
  storage,
  stateReconciler: autoMergeLevel2
};

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers as any),
  devTools: devMode,
  middleware: (getDefaultMiddleware) =>
    devMode
      ? getDefaultMiddleware({
          thunk: true,
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST]
          }
        }).concat(logger)
      : getDefaultMiddleware({
          thunk: true,
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST]
          }
        })
});

export const persistor = persistStore(store);

export type RootState = EmptyObject & CombinedRootState;
export type AppDispatch = ThunkDispatch<
  CombinedState<CombinedRootState>,
  undefined,
  AnyAction
> &
  Dispatch<AnyAction>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export { store as default };
