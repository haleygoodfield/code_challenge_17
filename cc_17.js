// Task 1: Create a Customer Class
class Customer { // Create the customer class  
    name = ''; // name (string)
    email = ''; // email (string)
    purchaseHistory = []; // purchaseHistory (array)

    addPurchase(amount) { // create method addPurchase(amount)
        this.purchaseHistory.push(amount); // adds a purchase amount to purchaseHistory
    }

    getTotalSpent() { // create method getTotalSpent()
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0); // returns total amount spent
    }
}

// Log: New customer creation and total spent after purchases.
const newCustomer = new Customer(); // create a new customer
newCustomer.name = 'Noelle'; // assign name
newCustomer.email = 'noellef@gmail.com'; // assign email
newCustomer.addPurchase(50); // assign a purchase
newCustomer.addPurchase(100); // assign another purchase

console.log(`Customer Name: ${newCustomer.name}`); // logs the new customer's name
console.log(`Customer Email: ${newCustomer.email}`); // logs the new customer's email
console.log(`Total Spent: $${newCustomer.getTotalSpent()}`); // logs their total spent 

// Task 2: Create a SalesRep Class
class SalesRep{ // Create the SalesRep class  
    name = ''; // name (string)
    clients = []; // clients (array of Customer objects)

    addClient(customer) { // create method addClient(customer) 
        this.clients.push(customer); // adds a customer to the list
    }

    getClientTotal(name) { // create method getClientTotal(name)
        const client = this.clients.find(client => client.name === name); // finds client by name
        return client ? client.getTotalSpent() : 0; // returns the total spent 
    }
}

// Log: Sales rep’s clients and total spent for a specific client.
const newSalesRep = new SalesRep(); // create a new SalesRep
newSalesRep.name = 'Marie'; // assign name
newSalesRep.addClient(newCustomer);

const ClientName = newSalesRep.clients.map(client => client.name);

console.log(`Sales Rep: ${newSalesRep.name}`) // Log Sales Rep
console.log(`Sales Rep Clients: ${ClientName}`) // Log Sales Rep's clients
console.log(`Total Spent by Client: $${newSalesRep.getClientTotal('Noelle')}`); // Logs total spent for a specific client


// Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer { // creates VIPCustomer Class that extends Customer
    vipLevel = ''; // vipLevel (string: 'Gold', 'Platinum')

    getTotalSpent() { // create override method: getTotalSpent() 
        const totalSpent = this.purchaseHistory.reduce((total, amount) => total + amount, 0);
        return totalSpent * 1.10; //  returns total spent with 10% loyalty bonus added
    }
}

// Log: VIP customer's total spent with bonus.
const newVIPCustomer = new VIPCustomer(); // create a VIP Customer
newVIPCustomer.name = 'Rose'; // assign name
newVIPCustomer.email = 'rose@roadrunner.com'; // assign email
newVIPCustomer.vipLevel = 'Platinum'; // Platinum VIP level
newVIPCustomer.addPurchase(300); // add $300 purchase
newVIPCustomer.addPurchase(350); // add $350 purchase

console.log(`VIP Customer Name: ${newVIPCustomer.name}`) // Log customer's name
console.log(`VIP Customer Email: ${newVIPCustomer.email}`)  // Log customer's email
console.log(`VIP Customer Level: ${newVIPCustomer.vipLevel}`)  // Log customer's VIP Level
console.log(`${newVIPCustomer.name}'s Total Spent with Loyalty Bonus: $${newVIPCustomer.getTotalSpent().toFixed(2)}`); // Log VIP customer's total spent with bonus

// Task 4: Build a Client Report System

// Creating new Customers 
const newCustomer2 = new Customer ();
newCustomer2.name = 'Axel';
newCustomer2.email = 'axel@gmail.com';
newCustomer2.addPurchase(470);

const newCustomer3 = new Customer ();
newCustomer3.name = 'Kenny';
newCustomer3.email = 'kenny@icloud.com';
newCustomer3.addPurchase(520);

// Store multiple customers (regular + VIP) and a sales rep
const allCustomers = [newCustomer, newCustomer2, newCustomer3, newVIPCustomer];

// Use .reduce() to calculate total revenue from all customers
const totalRevenue = allCustomers.reduce(function (sum, customer) {
    return sum + customer.getTotalSpent();
}, 0);

// Use .filter() to find customers who spent over $500.
const highSpending = allCustomers.filter(function (customer) {
    return customer.getTotalSpent() > 500;
})

// Creates the list of names of customers who spend >$500
const highSpenders = highSpending.map(function (customer) {
    return customer.name;
})

// Use .map() to create an array of customer names and total spent
const customerSummary = allCustomers.map(function (customer) {
    return {
        name: customer.name,
        total: `$${customer.getTotalSpent().toFixed(2)}`
    };
});

console.log(`Total Revenue: $${totalRevenue.toFixed(2)}`); // Log Total revenue
console.log(`High Spending Customers: ${highSpenders}`); // Log High-spending customers
console.log('Customer Summary:', customerSummary); // Log Customer summary












