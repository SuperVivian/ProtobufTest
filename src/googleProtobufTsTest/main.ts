import { MyMessage } from './message';
const bytes = MyMessage.encode({ name: "jack", age: 1}).finish();
const out = MyMessage.decode(bytes);
console.log(out);

