import { InputReducer } from "./inputReducer";

export const Store = (InputReducer) => {
    let state = {};
    const subscribes = [];

    return {
        dispatch(action){
            state = InputReducer(state, action)
            
        },
        subscribe(callback){
            subscribes.push(callback)
        },
        getStore(state){
            return state
        }
    }
}