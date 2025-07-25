import GoalCard from "./GoalCard";

function GoalList({ goals, setGoals}) {
  const handleDelete = id => {
    fetch(`https://goal-tracker-api-lln2.onrender.com/goals/${id}`, { method: 'DELETE' })
      .then(() => setGoals(goals.filter(goal => goal.id !== id)));
  };

  return (
    <div className="goal-container">
      {goals.map(goal => (
        <GoalCard key={goal.id} goal={goal} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default GoalList;