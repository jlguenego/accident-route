console.log('hello', d3);

(async () => {
    try {
        const data = await d3.csv('data.csv')
        console.log('data', data);
    } catch (error) {
        console.log('error', error);
    }
    console.log('coucou');
})();
