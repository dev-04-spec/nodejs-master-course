const fs = require('fs');

fs.writeFileSync('Hello.txt', 'Hi, This is manoj')

const res=fs.readFileSync('Hello.txt',{encoding:'utf8', flag:'r'})

console.log(res)