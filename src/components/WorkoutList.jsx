import { useSelector, useDispatch } from "react-redux"
import { removeFromWorkout, toggleCompleted } from "../redux/workoutSlice";
function WorkoutList() {
  const dispatch = useDispatch();
  const list = useSelector((state)=>state.workout.list);
  return (
    <div className="mt-5 mb-10 px-3 sm:px-6">
  <h1 className="font-bold text-2xl sm:text-3xl mt-5 text-center animate-pulse text-blue-600 drop-shadow-lg">
    🏋️ Here is the List of all workout.
  </h1>

  {list.length > 0 ? (
    list.map((workout, index) => (
      <div key={index} className="mt-5">
        <div className="border border-neutral-700 bg-neutral-900 text-white w-[90%] sm:w-[450px] mx-auto p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-blue-600/20 transition-all duration-300 hover:border-none">
          <div className="font-bold text-lg sm:text-xl">
            🏋️ Workout Name : {workout.name}
          </div>
          <div className="font-bold text-lg sm:text-xl">
            📅 Workout Date : {workout.date}
          </div>
          <div className="font-bold text-lg sm:text-xl">
            🕒 Workout Start time : {workout.set}
          </div>
          <div className="font-bold text-lg sm:text-xl">
            🎯 Workout Goal : {workout.reps}
          </div>
          <div className="font-bold text-lg sm:text-xl">
            ⏱ Workout Duration : {workout.duration}
          </div>

          <button
            onClick={() => {
              dispatch(toggleCompleted(workout.id));
            }}
            disabled={workout.completed}
            className={`w-full font-bold py-2 rounded-lg mt-2 transition-all duration-300 ${
              workout.completed
                ? "bg-green-600 hover:cursor-not-allowed"
                : "bg-yellow-600 hover:bg-amber-500"
            }`}
          >
            {workout.completed ? "✅ Completed" : "Mark as Complete"}
          </button>

          <div className="flex mt-3 gap-3 items-center justify-between">
            <h1 className="font-semibold text-neutral-400 text-base sm:text-lg">
              Delete from list
            </h1>
            <button
              className="hover:text-red-600 transition-colors duration-300"
              onClick={() => {
                dispatch(removeFromWorkout(workout.id));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <h1 className="font-bold text-2xl sm:text-4xl mt-40 sm:mt-60 text-center">
      No workouts listed yet.
    </h1>
  )}
</div>

  )
}

export default WorkoutList;