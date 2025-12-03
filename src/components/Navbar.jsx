import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Navbar() {
  const list = useSelector((state)=>state.workout.list);
  const count = list.length;
  
  return (
    <div>
  <div className="flex flex-col sm:flex-row justify-between items-center py-5 px-4 sm:px-10 md:px-15 border-b-2 border-black gap-4 sm:gap-0">
    <Link to='/' className="font-black text-2xl text-green-900 text-center sm:text-left">
      🏋️ Workout Planner
    </Link>

    <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-5 md:gap-7 lg:gap-10">
       <SignedIn>
      <Link to='/workoutform' className="font-bold text-base sm:text-lg md:text-xl bg-slate-900 text-white hover:bg-slate-800
 px-3 py-2 rounded-xl hover:scale-105 transition">
        Workout Form
      </Link>
      <Link to='/workoutlist' className="font-bold text-base sm:text-lg md:text-xl bg-slate-900 text-white hover:bg-slate-800 px-3 py-2 rounded-xl hover:scale-105 transition">
        Workout List - {count}
      </Link>
      <Link to='/workoutstatus' className="font-bold text-base sm:text-lg md:text-xl bg-slate-900 text-white hover:bg-slate-800 px-3 py-2 rounded-xl hover:scale-105 transition">
        Workout Status
      </Link>
      <Link to='/progresstracker' className="font-bold text-base sm:text-lg md:text-xl bg-slate-900 text-white hover:bg-slate-800 px-3 py-2 rounded-xl hover:scale-105 transition">
        Progress Tracker
      </Link>
      <Link to='/todaysworkout' className="font-bold text-base sm:text-lg md:text-xl bg-slate-900 text-white hover:bg-slate-800 px-3 py-2 rounded-xl hover:scale-105 transition">
        Todays workout
      </Link>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </div>
</div>

  )
}

export default Navbar;  