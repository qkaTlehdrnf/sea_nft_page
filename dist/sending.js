"use strict";
console.log('sending..... .....');
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    console.log(logged);
    logged = 'Maximilian';
}
sendAnalytics('The data');
//# sourceMappingURL=sending.js.map