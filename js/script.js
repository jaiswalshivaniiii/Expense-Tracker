import BudgetTracker from "./BudgetTracker.js";

new BudgetTracker("#app");


























// // DOM elements
// const expenseForm = document.getElementById('expense-form');
// const expenseName = document.getElementById('expense-name');
// const expenseAmount = document.getElementById('expense-amount');
// const expenseList = document.getElementById('expense-list');

// // Event listener for adding expenses
// expenseForm.addEventListener('submit', addExpense);

// // Expense data array (in-memory storage, replace with database)
// let expenses = [];

// // Function to add an expense
// function addExpense(event) {
//     event.preventDefault();

//     const name = expenseName.value;
//     const amount = parseFloat(expenseAmount.value);

//     if (!name || isNaN(amount) || amount <= 0) {
//         alert('Please enter valid expense details.');
//         return;
//     }

//     const expense = {
//         id: new Date().getTime(),
//         name,
//         amount,
//     };

//     expenses.push(expense);
//     updateExpenseList();
//     clearForm();
// }

// // Function to update the expense list in the UI
// function updateExpenseList() {
//     expenseList.innerHTML = '';
//     expenses.forEach((expense) => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             ${expense.name}: $${expense.amount}
//             <button onclick="deleteExpense(${expense.id})">Delete</button>
//         `;
//         expenseList.appendChild(listItem);
//     });
// }

// // Function to delete an expense
// function deleteExpense(id) {
//     expenses = expenses.filter((expense) => expense.id !== id);
//     updateExpenseList();
// }

// // Function to clear the input form
// function clearForm() {
//     expenseName.value = '';
//     expenseAmount.value = '';
// }

// // Initial update of the expense list
// updateExpenseList();
