import { useSelector } from "react-redux"
function WorkoutStatus() {
  const completed = useSelector((state)=>state.workout.list.filter((w)=>w.completed));
  const notcompleted = useSelector((state)=>state.workout.list.filter((w)=>!w.completed));

  return (
    <>
    <div className="mt-6 mb-10 px-4">
  <h1 className="font-bold text-4xl text-green-500 text-center drop-shadow-lg animate-pulse">
    ✅ Completed Workouts are listed below...
  </h1>
  {completed.length > 0 ? (
    completed.map((workout, index) => {
      return (
        <div key={index} className="mt-4">
          <div className="border w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto rounded-xl p-4 bg-green-950 shadow-2xl hover:shadow-blue-600/20 transition-all duration-200 hover:border-none text-neutral-300">
            <div className="font-bold text-xl">🏋️ Workout Name : {workout.name}</div>
            <div className="font-bold text-xl">📅 Workout Date : {workout.date}</div>
            <div className="font-bold text-xl">🕒 Workout Start time : {workout.set}</div>
            <div className="font-bold text-xl">🎯 Workout Goal : {workout.reps}</div>
            <div className="font-bold text-xl">⏱ Workout Duration : {workout.duration}</div>
          </div>
        </div>
      );
    })
  ) : (
    <h1 className="font-bold text-2xl mt-10 text-center">No completed workouts listed yet.</h1>
  )}
</div>

<hr className="border-neutral-700 my-10 w-full" />

<div className="mt-6 mb-10 px-4">
  <h1 className="font-bold text-4xl text-yellow-800 text-center drop-shadow-lg animate-pulse">
    🕓 Pending Workouts are listed below...
  </h1>
  {notcompleted.length > 0 ? (
    notcompleted.map((workout, index) => {
      return (
        <div key={index} className="mt-4">
          <div className="border w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto rounded-xl p-4 bg-amber-500 text-neutral-300 shadow-2xl hover:shadow-blue-600/20 transition-all duration-200 hover:border-none">
            <div className="font-bold text-xl">🏋️ Workout Name : {workout.name}</div>
            <div className="font-bold text-xl">📅 Workout Date : {workout.date}</div>
            <div className="font-bold text-xl">🕒 Workout Start time : {workout.set}</div>
            <div className="font-bold text-xl">🎯 Workout Goal : {workout.reps}</div>
            <div className="font-bold text-xl">⏱ Workout Duration : {workout.duration}</div>
          </div>
        </div>
      );
    })
  ) : (
    <h1 className="font-bold text-2xl mt-10 text-center">No pending workouts listed yet.</h1>
  )}
</div>

    </>
  )
}

export default WorkoutStatus;