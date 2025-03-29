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

console.log(`Sales Rep: ${newSalesRep.name}`)
console.log(`Sales Rep Clients: ${ClientName}`)
console.log(`Total Spent by Client: $${newSalesRep.getClientTotal('Noelle')}`);


// Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer { // creates VIPCustomer Class that extends Customer
    vipLevel = ''; // vipLevel (string: 'Gold', 'Platinum')

    getTotalSpent() { // create override method: getTotalSpent() 
        const totalSpent = this.purchaseHistory.reduce((total, amount) => total + amount, 0);
        return totalSpentotalSpent * 1.10; //  returns total spent with 10% loyalty bonus added
    }
}

// Log: VIP customer's total spent with bonus.
const newVIPCustomer = new VIPCustomer(); // create a VIP Customer
newVIPCustomer.name = 'Rose'; // assign name
newVIPCustomer.email = 'rose@roadrunner.com'; // assign email
newVIPCustomer.vipLevel = 'Platinum'; // Platinum VIP level
newVIPCustomer.addPurchase(300); // add $300 purchase
newVIPCustomer.addPurchase(350); // add $350 purchase

console.log(`VIP Customer Name: ${newVIPCustomer.name}`)
console.log(`VIP Customer Email: ${newVIPCustomer.email}`)
console.log(`VIP Customer Level: ${newVIPCustomer.vipLevel}`)
console.log(`Total Spent with Loyalty Bonus: $${newVIPCustomer.getTotalSpent()}`);











