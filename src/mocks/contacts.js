import { v4 as uuidv4 } from 'uuid';

const contacts = [{
  id: uuidv4(),
  name: 'Wellington',
  email: 'wellingtonnadson@mail.com',
  fone: '98988560000',
  category_id: uuidv4(),
}];
export default contacts;
