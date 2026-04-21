import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFile = create(persist(
    (set)=>({
      files:[],
      setFile:(payload)=>set((state)=>({
       files:[...state.files,payload]
      })),
      updateFile:(id,payload)=>set((state)=>({
        files:state.files.map((file)=>{
          if(file.id === id)
          {
            return{...file, ...payload}
          }else{
            return file
          }
        })
      })),
      deleteFile:(id)=>set((state)=>({
        files:state.files.filter((file)=>file.id !== id)
      }))
}),
{name:"files"}
))