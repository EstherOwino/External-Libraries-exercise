import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import isSatSun from './days.js';

const today = dayjs();
const newDay = today.add(5, 'days');
let formatedDate = newDay.format('MMMM D');
console.log(formatedDate);

const afterOneMonth = today.add(1, 'month');
formatedDate = afterOneMonth.format('MMMM D');
console.log(formatedDate);

const beforeOneMonth = today.subtract(1, 'month');
formatedDate = beforeOneMonth.format('MMMM D');
console.log(formatedDate);

const randomDate = today.format('dddd');
console.log(randomDate);

console.log(isSatSun(today.add(4, 'day')));
console.log(isSatSun(today.add(5, 'day')));

