import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

async function generateContacts(count = 5) {
  const contacts = await readContacts();
  for (let i = 0; i < count; i += 1) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
  console.log(`${count} yeni kişi eklendi`);
}

generateContacts();
