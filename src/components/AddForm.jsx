import React, { useState } from 'react';

function AddForm({ setGoals }) {
    const [formData, setFormData] = useState({
        name: '',
        targetAmount: '',
        savedAmount: 0,
        category: '',
        deadline: '',
        createdAt: new Date().toISOString().split('T')[0]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://goal-tracker-api-lln2.onrender.com/goals', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })      
        .then(res=> res.json())
        .then(() => {

      fetch('https://goal-tracker-api-lln2.onrender.com/goals')
        .then(res => res.json())
        .then(data => setGoals(data));
        })
        setFormData({
            name: '',
            targetAmount: '',
            savedAmount: 0,
            category: '',
            deadline: '',
            createdAt: new Date().toISOString().split('T')[0]
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder='Goal Name' value={formData.name} onChange={handleChange} required />
                <input name="targetAmount" type="number" placeholder='Target Amount' value={formData.targetAmount} onChange={handleChange} required />
                <input name="category" placeholder='Category' value={formData.category} onChange={handleChange}required />
                <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
                <button type="submit">Submit Goal</button>
            </form>
        </>
    );
}

export default AddForm;