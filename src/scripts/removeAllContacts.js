import { writeContacts } from '../utils/writeContacts.js';
export async function removeAllContacts() {
  await writeContacts([]);
  console.log('tüm kişiler silindi');
}

removeAllContacts();
