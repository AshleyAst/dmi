// Placeholder for expenses data
let expenses = [];

// Function to add a new expense manually
function addExpense(description, amount) {
    expenses.push({ description, amount });
        updateExpenses();
        }

        // Function to update total expenses displayed
        function updateExpenses() {
            const totalAmount = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
                document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
                    renderExpenseList();
                    }

                    // Function to render the list of expenses
                    function renderExpenseList() {
                        const expensesList = document.getElementById('expenses');
                            expensesList.innerHTML = '';
                                expenses.forEach(expense => {
                                        const li = document.createElement('li');
                                                li.textContent = `${expense.description}: $${expense.amount.toFixed(2)}`;
                                                        expensesList.appendChild(li);
                                                            });
                                                            }

                                                            // Event listener for submitting expense form
                                                            document.getElementById('expenseForm').addEventListener('submit', function(event) {
                                                                event.preventDefault();
                                                                    const description = document.getElementById('description').value;
                                                                        const amount = document.getElementById('amount').value;
                                                                            addExpense(description, amount);
                                                                                document.getElementById('description').value = '';
                                                                                    document.getElementById('amount').value = '';
                                                                                    });

                                                                                    // Placeholder for QR code scanning function
                                                                                    document.getElementById('scanQR').addEventListener('click', function() {
                                                                                        alert('QR code scanning functionality will be implemented here.');
                                                                                        });

                                                                                        // Placeholder for settings functionality
                                                                                        document.getElementById('settings').addEventListener('click', function() {
                                                                                            alert('Settings functionality will be implemented here.');
                                                                                            });
                                                                                            