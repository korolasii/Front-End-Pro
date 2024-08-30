
const contactBook = {

    contacts: [
        { name: "Alice Johnson", phone: "123-456-7890", email: "alice@example.com" },
        { name: "Bob Smith", phone: "987-654-3210", email: "bob@example.com" },
        { name: "Charlie Brown", phone: "555-555-5555", email: "charlie@example.com" }
    ],


    findContactByName: function(name) {
        return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    },

    addContact: function(name, phone, email) {
        this.contacts.push({ name: name, phone: phone, email: email });
    }
};


contactBook.addContact("David Williams", "222-333-4444", "david@example.com");


const foundContact = contactBook.findContactByName("Alice Johnson");


if (foundContact) {
    console.log("Contact found:", foundContact);
} else {
    console.log("Contact not found");
}


console.log("All contacts:", contactBook.contacts);
