



const cont = require['context']('./model', false, /\.ts$/);

let arr: any = cont.keys().map((key: any) =>
  Object.entries(cont(key)))



let brr: any = []
arr.forEach((item: any) => {
  brr = brr.concat(item)
})



const obj = Object['fromEntries'](brr)
export default obj