import { useState } from "react";
import {useDispatch} from 'react-redux'
import { addToWorkout } from "../redux/workoutSlice";
function WorkoutForm() {
  const dispatch = useDispatch();
  let [name,setName] = useState('');
  let [set,setSets] = useState('');
  let [reps,setReps] = useState('');
  let [duration,setDuration] = useState('');
  let [date,setDate] = useState('');
  function handleAddWorkout(){
    if(name && set && reps && duration && date !== ''){
    dispatch(addToWorkout({name,set,reps,duration,date}))
    }
    else{
      alert("Please fill all the details...");
    }
    setName('');
    setSets('');
    setReps('');
    setDuration(''); 
    setDate('');
  }
  return (
    <>
    <h1 className="mt-10 font-bold text-2xl sm:text-3xl md:text-4xl text-black text-center drop-shadow-2xl px-4">
    Collect and submit workout details such as name, goal, and duration of workout.
    </h1>

<div className="flex justify-center items-center mt-10 mb-10 bg-blue-900 w-[90%] sm:w-[550px] mx-auto p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-blue-700/50 transition-all duration-300">
  <div className="w-full">
    <div className="flex justify-center mt-2">
      <input
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        type="text"
        placeholder="🏆 Enter the Name of workout"
        className="font-semibold text-black w-[95%] sm:w-[500px] text-base sm:text-lg border border-green-700 bg-green-100 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all duration-300 placeholder-gray-700"
      />
    </div>

    <div className="flex justify-center">
      <input
        value={date}
        onChange={(e) => setDate(e.currentTarget.value)}
        type="date"
        placeholder="🕒 Enter the date of workout"
        className="font-semibold text-black w-[95%] sm:w-[500px] text-base sm:text-lg border border-green-700 bg-green-100 p-2 mt-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all duration-300 placeholder-gray-700"
      />
    </div>

    <div className="flex justify-center">
      <input
        value={set}
        onChange={(e) => setSets(e.currentTarget.value)}
        type="time"
        placeholder="🕒 Enter the starting time of workout"
        className="font-semibold text-black w-[95%] sm:w-[500px] text-base sm:text-lg border border-green-700 bg-green-100 p-2 mt-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all duration-300 placeholder-gray-700"
      />
    </div>

    <div className="flex justify-center">
      <input
        value={reps}
        onChange={(e) => setReps(e.currentTarget.value)}
        type="text"
        placeholder="🎯 Enter the Goal of workout"
        className="font-semibold text-black w-[95%] sm:w-[500px] text-base sm:text-lg border border-green-700 bg-green-100 p-2 mt-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all duration-300 placeholder-gray-700"
      />
    </div>

    <div className="flex justify-center">
      <input
        value={duration}
        onChange={(e) => setDuration(e.currentTarget.value)}
        type="text"
        placeholder="⏱ Enter the Duration of workout (in minutes)"
        className="font-semibold text-black w-[95%] sm:w-[500px] text-base sm:text-lg border border-green-700 bg-green-100 p-2 mt-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all duration-300 placeholder-gray-700"
      />
    </div>

    <div className="flex justify-center">
      <button
        onClick={handleAddWorkout}
        className="font-bold bg-white text-black mt-4 px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300"
      >
        Submit
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default WorkoutForm;