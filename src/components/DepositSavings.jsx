import { useState , React } from 'react'

function DepositSavings({ goal, setGoals }) {
    const [amount, setAmount] = useState('');
    const [chosenId, setChosenId] = useState('')

    const handleDeposit = (e) => {
        e.preventDefault();
        const goals = goals.find((g) => g.id === chosenId)
        const newAmount = goal.savedAmount + parseFloat(amount)

        fetch(`http://localhost:3000/goals/${chosenId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ savedAmount: newAmount })
        })
        .then((res) => res.json())
        .then((updatedGoal) => { setGoals(goals.map(g => g.id ===  chosenId ? updated : g)) 
        setAmount('')
        setChosenId('')
        })
    }

    return (
        <>
        <form onSubmit={handleDeposit}>
            <select value={chosenId}>
            <option value="">Pick a goal</option>
            </select>
            <input type="number" placeholder='Deposit Amount' value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <button type="submit">Deposit</button>
        </form>
        </>
    )
}