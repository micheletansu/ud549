var AddressBook = function() {
    this.contacts = [];
    this.initialComplete = false;
}
AddressBook.prototype.addContact = function(contact) {
    if (contact instanceof Contact)
        this.contacts.push(contact);
    else throw new Error("Il parametro non è un oggetto Contact");
}

AddressBook.prototype.getContact = function(i) {
    return this.contacts[i];
}

AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;
    setTimeout(function(){
        self.initialComplete = true;
        if (cb)
            return cb();
    }, 3);
}

AddressBook.prototype.deleteContact = function(i) {
    return this.contacts.splice(i, 1);
}