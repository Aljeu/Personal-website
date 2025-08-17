import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const contacts = await storage.getContacts();
    return res.status(200).json(contacts);
  } catch {
    return res.status(500).json({ success: false, message: 'Failed to fetch contacts' });
  }
}
