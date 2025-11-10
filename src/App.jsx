import {Route, Routes} from 'react-router-dom'
import WorkoutForm from './components/WorkoutForm';
import WorkoutStatus from './components/WorkoutStatus';
import WorkoutList from './components/WorkoutList';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import ProgressTracker from './components/ProgressTracker';
import TodaysWorkout from './components/TodaysWorkout';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/workoutform' element={<WorkoutForm/>}/>
        <Route path='/workoutlist' element={<WorkoutList/>}/>
        <Route path='/workoutstatus' element={<WorkoutStatus/>}/>
        <Route path='/progresstracker' element={<ProgressTracker/>}/>
        <Route path='/todaysworkout' element={<TodaysWorkout/>}/>
      </Routes>
    </div>
  )
}

export default App;