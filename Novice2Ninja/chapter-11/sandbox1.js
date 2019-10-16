//diffence between two dates

const before = new Date('August 4,1966 17:55:56');
console.log('myDOB :',before.getTime());
const now1 = new Date();

//console.log(before.getTime(),now1.getTime());
//we are getting the differnce in milliseconds
const diff = now1.getTime()-before.getTime();
console.log(diff);

const minutes = Math.round(diff / 1000 / 60);
const hours = Math.round(minutes / 60);
const days = Math.round(hours / 24);
const years = Math.round(days/365);
console.log(years);

//converting timestamp into a date object

const timestamp =  -107609644000;
console.log(new Date(timestamp));


