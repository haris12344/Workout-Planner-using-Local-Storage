import { useSelector } from "react-redux"
function TodaysWorkout() {
  const today = new Date().toISOString().split('T')[0];
  const todayWorkouts = useSelector((state)=>state.workout.list.filter((w)=>w.date === today));
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDate = tomorrow.toISOString().split('T')[0];
  const tomorrowWorkouts = useSelector((state)=>state.workout.list.filter((w)=>w.date === tomorrowDate));

  return (
    <>
    <div className="mt-10 px-3 sm:px-6">
  <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-green-600 animate-pulse text-center mt-6">
    Today's Workouts
  </h2>

  {todayWorkouts.length > 0 ? (
    todayWorkouts.map((w) => (
      <div
        key={w.name}
        className="border w-[90%] sm:w-[400px] bg-neutral-900 shadow-lg hover:shadow-purple-700/30 transition-all duration-300 mx-auto text-center mt-6 p-3 sm:p-4 rounded-xl border-neutral-600"
      >
        <h1 className="text-lg sm:text-xl font-bold text-white ">{w.name} is planned for today</h1>
      </div>
    ))
  ) : (
    <p className="font-black text-xl sm:text-2xl text-center mt-16 sm:mt-20">
      No workouts planned for today.
    </p>
  )}

  <hr className="border-neutral-700 my-10 sm:my-15 w-100%" />

  <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-yellow-600 animate-pulse text-center mt-6">
    Tomorrow's Workouts
  </h2>

  {tomorrowWorkouts.length > 0 ? (
    tomorrowWorkouts.map((w) => (
      <div
        key={w.name}
        className="border w-[90%] sm:w-[400px] bg-neutral-900 shadow-lg hover:shadow-purple-700/30 transition-all duration-300 mx-auto text-center mt-6 p-3 sm:p-4 rounded-xl border-neutral-600"
      >
        <h1 className="text-lg sm:text-xl font-bold text-white">{w.name} is planned for tomorrow</h1>
      </div>
    ))
  ) : (
    <p className="font-black text-xl sm:text-2xl text-center mt-16 sm:mt-20">
      No workouts planned for tomorrow.
    </p>
  )}
</div>

    </>
  )
}

export default TodaysWorkout
