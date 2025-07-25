import { useState , React } from 'react'

function DepositSavings({ goals, setGoals }) {
    console.log("DepositSavings component rendered");

    const [amount, setAmount] = useState('');
    const [chosenId, setChosenId] = useState('')

    const handleDeposit = (e) => {
        e.preventDefault();

        const goalToUpdate = goals.find((g) => g.id === Number (chosenId))
         if (!goalToUpdate) {
    console.error("Goal not found with ID:", chosenId);
    return;
  }
        const newAmount = goalToUpdate.savedAmount+ parseFloat(amount)
console.log("Chosen ID:", chosenId);
console.log("Goal to update:", goalToUpdate);
console.log("New saved amount:", newAmount);

        fetch(`https://goal-tracker-api-lln2.onrender.com/goals/${chosenId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ savedAmount: newAmount })
        })
        .then((res) => res.json())
        .then((updatedGoal) => { setGoals(goals.map(g => g.id ===  Number(chosenId) ? updatedGoal : g)) 
        setAmount('')
        setChosenId('')
        })
    }

    return (
        <>
        <form onSubmit={handleDeposit}>
            <select value={chosenId} onChange={(e) => setChosenId(e.target.value)} required>
            <option value="">Pick a goal</option>
             {goals.map((g) => (
          <option key={g.id} value={g.id.toString()}>
            {g.name}
          </option>
))}
            </select>
            <input type="number" placeholder='Deposit Amount' value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <button type="submit"  onClick={() => console.log("clicked")}>Deposit</button>
        </form>
        </>
    )
}
export default DepositSavings;