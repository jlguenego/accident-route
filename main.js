console.log('hello', d3);

d3.csv('data.csv')
    .then(function (data) {
        console.log('data', data);
    })
    .catch(function (error) {
        console.log('error', error);
    })