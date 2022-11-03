import ContactRepository from '../repositories/ContactRepository.js';

class ContactController {
  async index(request, response) {
    // Obter todos os registros
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }
    return response.json(contact);
  }

  async strore(request, response) {
    // Criar um novo Registro
    const {
      name, email, fone,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExist = await ContactRepository.findByEmail(email);

    if (contactExist) {
      return response.status(400).json({ error: 'This e-amil is already been taken' });
    }

    const contact = await ContactRepository.createContact(name, email, fone);

    return response.json(contact);
  }

  update() {
    // Editar um registro

  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'contact not found' });
    }
    await ContactRepository.deleteContact(id);
    return response.sendStatus(204);
  }
}
// Design Pattern SINGLETON
export default new ContactController();
