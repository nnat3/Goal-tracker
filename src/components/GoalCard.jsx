function GoalCard({ goal, onDelete}) {
    const status = goal.savedAmount / goal.targetAmount * 100;
    const alreadyDue = new Date(goal.deadline) < new Date();
    const alreadyDone = goal.savedAmount >= goal.targetAmount;
  return (
    <div className="goal-card">
      <h3>{goal.name} if (){alreadyDue ? ' (Overdue)' : ''}{alreadyDone ? ' (Completed)' : ''}{!alreadyDone ? '(You Can Do It!!)' : ''}</h3>
      <p>Category: ${goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <status value={goal.savedAmount} max={goal.targetAmount}></status>
      <p>Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
      <button onClick={() => onDelete(goal.id)}>Delete Goal</button>
    </div>
  );
}
export default GoalCard;