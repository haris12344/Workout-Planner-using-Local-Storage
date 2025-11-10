import { createSlice } from '@reduxjs/toolkit'

const savedItems = JSON.parse(localStorage.getItem("workouts")) || [];

export const workoutSlice = createSlice({
    name : "workout",
    initialState : {
        list : savedItems,
    },
    reducers : {
        addToWorkout : (state,action) => {
            const {name,set,reps,duration,date} = action.payload;
            state.list.push({
                id:Date.now(),
                name,
                set,
                reps,
                duration,
                date,
                completed:false,
            })
            localStorage.setItem("workouts",JSON.stringify(state.list))
        },
        removeFromWorkout : (state,action) => {
            state.list = state.list.filter((w)=>w.id !== action.payload)
            localStorage.setItem("workouts",JSON.stringify(state.list));
        },
        toggleCompleted : (state,action) => {
            let exists = state.list.find((w)=>w.id == action.payload);
            if(exists){
                exists.completed = !exists.completed;
            }
            localStorage.setItem("workouts",JSON.stringify(state.list));
        },
    }
})

export const {addToWorkout, removeFromWorkout, toggleCompleted} = workoutSlice.actions;

export default workoutSlice.reducer;