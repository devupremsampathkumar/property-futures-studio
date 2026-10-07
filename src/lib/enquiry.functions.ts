import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import { enquirySchema } from './enquiry-schema';

export const submitEnquiry = createServerFn({ method: 'POST' })
  .inputValidator(data => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env['SUPABASE_URL'];
    const key = process.env['SUPABASE_ANON_KEY'] ?? import.meta.env['VITE_SUPABASE_PUBLISHABLE_KEY'];
    if (!url || !key) throw new Error('Enquiries are temporarily unavailable. Please try again later.');
    const client = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false }, global: { fetch: (input, init) => {
      const headers = new Headers(init?.headers);
      if (key.startsWith('sb_')) headers.delete('Authorization');
      headers.set('apikey', key);
      return fetch(input, { ...init, headers });
    } } });
    const { website: _website, ...fields } = data;
    const id = crypto.randomUUID();
    const { error } = await client.from('property_enquiries').insert({ ...fields, id });
    if (error) throw new Error('Your enquiry could not be saved. Please try again.');
    return { reference: id.slice(0, 8).toUpperCase() };
  });