import { checkError, client } from './client';

export async function fetchCountries(order) {
  let query = client.from('countries').select('*');

  if (order === 'asc') query = query.order('name', { ascending: true });
  if (order === 'desc') query = query.order('name', { ascending: false });

  const resp = await query;

  return checkError(resp);
}
