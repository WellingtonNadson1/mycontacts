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

  strore() {
    // Criar um novo Registro

  }

  update() {
    // Editar um registro

  }

  delete() {
    // Deletar um registro

  }
}
// Design Pattern SINGLETON
export default new ContactController();
