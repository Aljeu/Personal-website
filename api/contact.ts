import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../shared/schema';
import { storage } from '../server/storage';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const contactData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(contactData);
    return res.status(200).json({ success: true, contact });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: 'Invalid form data', errors: error.errors });
    }
    return res.status(500).json({ success: false, message: 'Failed to submit contact form' });
  }
}
