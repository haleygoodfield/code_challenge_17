// Task 1: Create a Customer Class

class Customer { // Create the customer class  
    name = ''; // name (string)
    email = ''; // email (string)
    purchaseHistory = []; // purchaseHistory (array)

    addPurchase(amount) {
        this.purchaseHistory.push(amount); // adds a purchase amount to purchaseHistory
    }

    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0); // returns total amount spent
    }
}

// Creating new customer creation and total spent after purchases
const newCustomer = new Customer(); // create a new customer
newCustomer.name = 'Noelle'; // assign name
newCustomer.email = 'noellef@gmail.com'; // assign email
newCustomer.addPurchase(50); // assign a purchase
newCustomer.addPurchase(100); // assign another purchase

console.log(`Customer Name: ${newCustomer.name}`); // logs the new customer's name
console.log(`Customer Email: ${newCustomer.email}`); // logs the new customer's email
console.log(`Total Spent: $${newCustomer.getTotalSpent()}`); // logs their total spent 




