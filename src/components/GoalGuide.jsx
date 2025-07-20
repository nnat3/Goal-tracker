function Overview({ goals }) {
  // Count how many goals are completed
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length;

  // Add up all the saved amounts
  const totalSaved = goals.reduce((total, goal) => total + goal.savedAmount, 0);

  // Find goals that are due within 30 days and not yet complete
  const dueSoon = goals.filter(goal => {
    const today = new Date();
    const deadline = new Date(goal.deadline);
  });

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Completed Goals: {completedGoals}</p>
      {dueSoon.length > 0 && (
        <p style={{ color: 'orange' }}>{dueSoon.length} goal(s) due soon</p>
      )}
    </div>
  );
}

export default Overview;
