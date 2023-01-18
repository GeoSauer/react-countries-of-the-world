import React from 'react';
import { useCountries } from '../../../hooks/useCountries';

export default function Main() {
  const countries = useCountries();
  console.log(countries);
  return <></>;
}
