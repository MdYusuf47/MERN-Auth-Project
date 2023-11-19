import {configureStore} from "@reduxjs/toolkit"
import userReducer from './user/userSlice' //here userReducer actually is reducer i just rename it

export const store = configureStore({
    reducer:{user:userReducer},
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    })
})