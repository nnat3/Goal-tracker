import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('https://goal-tracker-4-virm.onrender.com/goals')
      .then(res => res.json())
      .then(data => setGoals(data));
  }, []);

  return (
    <div className="app-container">
      <h1> SMART Goal Planner</h1>
      <Dashboard goals={goals} setGoals={setGoals} />
    </div>
  );
}

export default App;
