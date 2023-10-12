import fs from 'node:fs';
export default obj2file;

function obj2file(data: Object, path?: string) {

const keys = Object.keys(data);
const values = Object.values(data);

const resPath=path||'./data.obj'
const writeFile=(text: string) => fs.writeFileSync(resPath, text, flag)
const flag = {flag: 'a'}
writeFile('{\n');
for (var i = 0, l = keys.length; i < l; i++) {
  writeFile(`  ${keys[i]}: `)
  writeFile(`${values[i]},\n`)
}
writeFile('}')
}