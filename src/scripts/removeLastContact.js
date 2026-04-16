import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
export async function removeLastContact() {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log('Silinecek kişi yok');
    return;
  }
  contacts.pop();
  await writeContacts(contacts);
  console.log('Son kişi silindi');
}

removeLastContact();
