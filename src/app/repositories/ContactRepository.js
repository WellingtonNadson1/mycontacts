import contacts from '../../mocks/contacts.js';

let contactsOf = contacts;

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contactsOf);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contactsOf.find((contact) => contact.id === id));
    });
  }

  deleteContact(id) {
    return new Promise((resolve) => {
      contactsOf = contactsOf.filter((contact) => contact.id !== id);
      resolve(contactsOf);
    });
  }
}

export default new ContactRepository();
