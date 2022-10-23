import ContactRepository from '../repositories/ContactRepository.js';

class ContactController {
  async index(request, response) {
    // Obter todos os registros
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  show() {
    // Obter UM registro

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
