import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export interface State {
    token: string;
    applicantId: string;
}

const initialState: State = {
    token: "",
    applicantId: "",
};

const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<State>) => {
            return { ...state, ...action.payload };
        },
        updateToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            return state;
        },
        updateApplicantId: (state, action: PayloadAction<string>) => {
            state.applicantId = action.payload;
            return state;
        },
    },
});

export const store = configureStore({
    reducer: persistReducer({ key: "cudos-kyc-poc-state", storage }, stateSlice.reducer),
    middleware: (defaultMiddleware) => defaultMiddleware({ serializableCheck: false }),
});

export const { updateState, updateToken, updateApplicantId } = stateSlice.actions;

export const selectToken = (state: State) => state.token;

export const selectApplicantId = (state: State) => state.applicantId;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
