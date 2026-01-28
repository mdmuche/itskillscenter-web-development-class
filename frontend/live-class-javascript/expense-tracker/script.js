// step 1: 
const expenseNameInput = document.getElementById('expenseName');
const expenseAmountInput = document.getElementById('expenseAmount');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');
const expenseListHeading = document.getElementById('expenseListHeading');
const totalHeading = document.getElementById('totalHeading');
let expenses = [];

    if(expenses.length === 0) {
        expenseListHeading.textContent = `No Items, Add Expenses`;
        totalHeading.style.display = 'none';
    }

// function to add expense
const addExpense = () => {
    // step 2: get input values
    let expenseName = expenseNameInput.value.trim();
    let expenseAmount = parseFloat(expenseAmountInput.value);
    
    // step 3: validate input values
    if(expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter valid expense name and amount.');
        return;
    }
    
    // step 4: create a expense object(expense item)
    let expense = {
        name: expenseName,
        amount: expenseAmount
    }
    
    //step 5: add expense to expenses array
    expenses.push(expense);
    
    
    // step 6: update expense list to the dom
    updateExpenseList();
    
    updateTotalAmount()
}

addExpenseBtn.addEventListener('click', () => {
//   console.log('clicking');
  addExpense();    
})


const updateExpenseList = () => {
    expenseNameInput.value = ''
    expenseAmountInput.value = ''
    const li = document.createElement('li');

    totalHeading.style.display = 'block';
    expenseListHeading.textContent = `Expenses`;

    expenseList.appendChild(li);
    // li.textContent = `${expense.name}: ${expense.amount.toFixed(2)}`
    // console.log(expenses)
    expenses.map((expense) => {
        li.textContent = `${expense.name}: ${expense.amount.toFixed(2)}`
    })
}

// function to update the total expenses amount
   const updateTotalAmount = () => {
    // step 7 calculate and update total amount in dom
    let total = 0;
    expenses
    .map((expense) => {
       total += expense.amount;
    })
    totalAmount.textContent = total.toFixed(2);
   }