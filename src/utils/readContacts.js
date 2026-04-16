import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { isUtf8 } from 'node:buffer';

export async function readContacts() {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(data);
}
