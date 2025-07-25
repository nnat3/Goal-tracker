import { useState , React } from 'react'

function DepositSavings({ goals, setGoals }) {
    const [amount, setAmount] = useState('');
    const [chosenId, setChosenId] = useState('')

    const handleDeposit = (e) => {
        e.preventDefault();

        const goalToUpdate = goals.find((g) => g.id === chosenId)
        const newAmount = goalToUpdate.savedAmount+ parseFloat(amount)

        fetch(`https://goal-tracker-api-lln2.onrender.com/goals/${chosenId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ savedAmount: newAmount })
        })
        .then((res) => res.json())
        .then((updatedGoal) => { setGoals(goals.map(g => g.id ===  parseInt(chosenId) ? updatedGoal : g)) 
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
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
))}
            </select>
            <input type="number" placeholder='Deposit Amount' value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <button type="submit">Deposit</button>
        </form>
        </>
    )
}
export default DepositSavings;