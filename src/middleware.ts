export { default } from 'next-auth/middleware'

export const Config = { matcher: ['/']}
//? Здесь, в массиве, нужно указать url, которые станут приватными, недоступными при вводе через адресную строку (мб и не только)