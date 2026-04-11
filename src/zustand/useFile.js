import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFile = create(persist(
    (set)=>({
      files:[],
      setFile:(payload)=>set((state)=>({
       files:[...state.files,payload]
      }))
}),
{name:"files"}
))