import fs from 'fs';

export default (data: Object, path?: string) => {

const keys = Object.keys(data);
const values = Object.values(data);

const resPath=path||'./'

const flag = {flag: 'a'}
fs.writeFileSync(resPath, '{\n', flag)
for (var i = 0, l = keys.length; i < l; i++) {
  fs.writeFileSync(resPath, `  ${keys[i]}: `, flag)
  fs.writeFileSync(resPath, `${values[i]},\n`, flag)
}
fs.writeFileSync(resPath, '}', flag);
}