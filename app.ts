import fs from 'fs';

const data = require ('./data.json');

const keys = Object.keys(data);
const values = Object.values(data);
const flag = {flag: 'a'}
fs.writeFileSync('./data.obj', '{\n', flag)
for (var i = 0, l = keys.length; i < l; i++) {
  
  fs.writeFileSync('./data.obj', `  ${keys[i]}: `, flag)
  // keys[i] - это ключ
  // obj[keys[i]] - а это свойство, доступное по этому ключу
  fs.writeFileSync('./data.obj', `${values[i]},\n`, flag)
}
fs.writeFileSync('./data.obj', '}', flag)