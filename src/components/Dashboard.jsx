import GoalList from "./GoalList";
import DepositSavings from "./DepositSavings";
import GoalGuide from "./GoalGuide";
import AddForm from "./AddForm";

function Dashboard({ goals, setGoals }) {
    return (
        <div>
            <h1>Goal Dashboard</h1>
            <AddForm setGoals={setGoals} />
            <GoalGuide goals={goals} />
            <GoalList goals={goals} setGoals={setGoals} />
            <DepositSavings goals={goals} setGoals={setGoals} />

        </div>
    )
}
export default Dashboard;