import { useAuth, useUser } from "@clerk/clerk-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Opening from "./Opening";
function Intro() {
  let {user} = useUser();
  let {isSignedIn} = useAuth();
  return (
    <div className="w-[90%] sm:w-[630px] mt-20 sm:mt-40 mx-auto text-neutral-400 px-2 text-center sm:text-left">
      <SignedOut>
        <Opening/>
      </SignedOut>
      <SignedIn>
      <h1 className="font-bold text-2xl sm:text-4xl mt-6 sm:mt-10">
        🎉Welcome {isSignedIn ? user.fullName : ""} , to Workout Planner App ❤</h1>
      <h1 className="font-bold text-lg sm:text-3xl mt-4 sm:mt-6 text-justify">A web application that allows users to organize, track, and manage their daily workout routines creatively. It helps users plan exercises based on goals, intensity, or duration, record their progress, and stay motivated through a personalized fitness schedule stored locally on their device.</h1>
      </SignedIn>
      </div>

  )
}

export default Intro;