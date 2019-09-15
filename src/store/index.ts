


// 集群导入  xxx.ts 文件   直接使用文件名的方式去注入   @inject('xxx')
const context = require['context']('./modules', false, /\.ts$/);

let obj = {}
context.keys().forEach((key: any) => {
  obj[key.slice(2).slice(0, -3)] = new (context(key).default)
});


export default obj