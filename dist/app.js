import fs from 'node:fs';
export default function (data, path) {
    var keys = Object.keys(data);
    var values = Object.values(data);
    var resPath = path || './data.obj';
    var writeFile = function (text) { return fs.writeFileSync(resPath, text, flag); };
    var flag = { flag: 'a' };
    writeFile('{\n');
    for (var i = 0, l = keys.length; i < l; i++) {
        writeFile("  ".concat(keys[i], ": "));
        writeFile("".concat(values[i], ",\n"));
    }
    writeFile('}');
}
