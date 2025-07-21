import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/goals')
      .then(res => res.json())
      .then(data => setGoals(data));
  }, []);

  return (
    <div className="app">
      <h1> SMART Goal Planner</h1>
      <Dashboard goals={goals} setGoals={setGoals} />
    </div>
  );
}

export default App;
