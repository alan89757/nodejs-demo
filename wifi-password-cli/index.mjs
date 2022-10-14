import getPassword from 'wifi-password';

const password = await getPassword('Cosla');
console.log(password)