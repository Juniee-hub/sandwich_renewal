import create from "zustand";

export const authStore = create((set)=>({
    isLogin: (process.env.REACT_APP_AUTH_STATE.toLowerCase() === 'true'),
    auth:{},
    setAuth: ()=> set( (state)=>({auth:state}) ),
    clearAuth: ()=> set( ()=>({auth:{}}) )
}))
