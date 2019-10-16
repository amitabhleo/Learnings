//date is an object in javascript it is refernce type

const  now = new Date();

console.log(now);
console.log(typeof now);

//Year, month, day, date
console.log("getFullYear",now.getFullYear());
console.log("getMonth",now.getMonth());
console.log("getDay",now.getDay());
console.log("getDate",now.getDate());
console.log("getHours",now.getHours());
console.log("getMinutes",now.getMinutes());
console.log("getSeconds",now.getSeconds());

//timestamp
console.log("getTime: ",now.getTime());

//DateStrings

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());