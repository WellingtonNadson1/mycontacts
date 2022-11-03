import { v4 as uuidv4 } from 'uuid';
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

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contactsOf.find((contact) => contact.email === email));
    });
  }

  createContact(name, email, fone) {
    return new Promise((resolve) => {
      const newContact = {
        id: uuidv4(),
        name,
        email,
        fone,
        category_id: uuidv4(),
      };
      contactsOf.push(newContact);
      resolve(newContact);
    });
  }
}

export default new ContactRepository();
