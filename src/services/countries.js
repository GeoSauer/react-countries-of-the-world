import { checkError, client } from './client';

export async function fetchCountries() {
  const resp = await client.from('countries').select('*');

  console.log(resp);
  return checkError(resp);
}
