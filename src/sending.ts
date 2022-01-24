console.log('sending..... .....')
let logged
function sendAnalytics(data:any) {
    console.log(data);
    logged = true;
    console.log(logged);
    logged='Maximilian';
}

sendAnalytics('The data');