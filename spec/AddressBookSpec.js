describe("Address Book", function() {
    var addressBook,
        thisContact;
    
    beforeEach(function() {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it("Should be able to add a contact", function() {
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });
   
    it ("Should be able to delete a Contact", function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(thisContact);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});
describe("Async Address Book", function(){
    var addressBook,
        thisContact;
    
    beforeEach(function(done) {
        addressBook = new AddressBook();
        thisContact = new Contact();

        addressBook.getInitialContacts(function() {
            done();
        });
        /*addressBook.addContactAsync(function() {
            done();
        });*/
    });

   it("Should grab initial contacts", function(done) {
        /*addressBook.getInitialContacts(function() {
            done();
        });*/

        expect(addressBook.initialComplete).toBe(true);
        done();
   });
});


describe("Return async function", function() {
    var addressBook,
        thisContact;

    beforeEach(function(done) {
        setTimeout(function() {
            addressBook = new AddressBook();
            thisContact = new Contact();
            done();
        }, 2000);
    });

    it("Should be able to add a contact", function(done) {
        setTimeout(function() {
            addressBook.addContact(thisContact);
            expect(addressBook.getContact(0)).toBe(thisContact);
            done();
        }, 7000);
    }, 10000);
   
   it ("Should be able to delete a Contact", function(done) {
        addressBook.addContact(thisContact);
        var a;
        setTimeout(function() {
            a = addressBook.deleteContact(thisContact);
            expect(addressBook.getContact(0)).not.toBeDefined();
            done();
        }, 1000);
   });
});