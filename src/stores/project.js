import create from "zustand";

export const projectStore = create((set)=>({
    projects:[
        {},
        {}
    ],
    setProjects: ()=> set( (state)=>({projects:state}) ),
}))
