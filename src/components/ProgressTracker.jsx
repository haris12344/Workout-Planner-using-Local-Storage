import { useSelector } from "react-redux";

function ProgressTracker() {
  const list = useSelector((state)=>state.workout.list);
  const total = list.length;
  const list2 = useSelector((state)=>state.workout.list.filter((w)=>w.completed));
  const total2 = list2.length;
  const percentage = total > 0 ? Math.round((total2 / total) * 100) : 0;
  const progressColor = percentage < 40 ? "bg-red-700" : percentage < 80 ? "bg-yellow-700" : "bg-green-600";
  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div>
  <div className="w-[90%] sm:w-[530px] mx-auto flex justify-center p-4 sm:p-6 text-center border border-neutral-200 mt-10 sm:mt-30 rounded-xl bg-neutral-300 text-black shadow-lg transition-all duration-300">
    <div>
      <h1 className="font-bold text-2xl sm:text-3xl text-green-700">
        Progress Tracker 🏋️
      </h1>

      <div className="flex justify-center items-center mt-2 text-center">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={
              progressColor.includes("red")
                ? "#dc2626"
                : progressColor.includes("yellow")
                ? "#f59e0b"
                : "#16a34a"
            }
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference + " " + circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-1000 ease-in-out"
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className={`font-bold text-xl sm:text-2xl ${progressColor}`}
          >
            {percentage}%
          </text>
        </svg>
      </div>

      <h1 className="font-bold text-lg sm:text-2xl mt-3">
        <span className="text-green-600">Progress</span> : You have completed{" "}
        <span className="text-yellow-400">{total2}</span> tasks out of{" "}
        <span className="text-red-600">{total}</span> tasks.
      </h1>

      <h1 className="font-bold text-lg sm:text-2xl mt-2">
        <span className="text-green-600">Progress</span> (in %) :{" "}
        <span className="text-orange-400">{percentage}</span>%.
      </h1>

      <div className="w-full h-3 sm:h-4 bg-neutral-700 rounded-full mt-4 overflow-hidden">
        <div
          className={`${progressColor} h-full transition-all duration-700 ease-in-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {total === total2 && total !== 0 && total2 !== 0 ? (
        <h1 className="font-bold text-green-800 text-lg sm:text-xl mt-3">
          🎉 All tasks completed! Time to flex those gains 💪
        </h1>
      ) : (
        <h1 className="font-bold text-yellow-900 text-lg sm:text-xl mt-3">
          ⏳ {total - total2} Workouts are pending, keep pushing.
        </h1>
      )}
    </div>
  </div>
</div>

  )
}

export default ProgressTracker;
