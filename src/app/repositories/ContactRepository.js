import contacts from '../../mocks/contacts.js';

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

export default new ContactRepository();
