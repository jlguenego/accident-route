console.log('hello', d3);

(async () => {
    try {
        const data = await d3.csv('data/caracteristiques-2017.csv')
        console.log('data', data);
        const data2 = data.map(d => d['dep'].replace(/^(.*)0$/, '$1'))
            .reduce((acc, dep) => {
                acc[dep] = (acc[dep] === undefined) ? 1 : acc[dep] + 1;
                return acc;
            }, {});
        console.log('data2', data2);
        const data3 = Object.keys(data2)
        .map(key => ({dept: key, 'nbr-accident': data2[key]}))
        .sort((a, b) => {
            return a.dept > b.dept ? 1 : -1;
        });
        console.log('data3', data3);
        // const bars = document.querySelectorAll('.bar');
        // bars.forEach((bar, i) => {
        //     bar.style.width = `${100 * data[i]['nbr-accident']/5000}%`;
        // });
    } catch (error) {
        console.log('error', error);
    }
    console.log('coucou');
})();
