console.log('d3', d3);

(async () => {
    try {
        const data = await d3.csv('data/caracteristiques-2017.csv');
        console.log('data', data);
        const data2 = data.map(d => d['dep'].replace(/^(.*)0$/, '$1'))
            .reduce((acc, dep) => {
                acc[dep] = (acc[dep] === undefined) ? 1 : acc[dep] + 1;
                return acc;
            }, {});
        console.log('data2', data2);
        const data3 = Object.keys(data2)
            .map(key => ({ dept: key, 'nbr-accident': data2[key] }))
            .sort((a, b) => {
                return a.dept > b.dept ? 1 : -1;
            });
        console.log('data3', data3);
        const dept = d3.select('.histo').selectAll('.dept').data(data3);
        dept.enter()
            .append('div')
            .classed('dept', true)
            .html(d => `
<span class="dept-num">${d.dept}</span>
<div class="bar" style="width: 0%; background-color: hsl(0, 100%, 80%)" title="${d['nbr-accident']}"></div>
`);

        const bars = d3.select('.histo').selectAll('.bar').data(data3);
        bars.transition().delay(1000).duration(2000)
            .style('width', d => `${(100 * d['nbr-accident'] / 7000)}%`)
            .transition(1000).delay(1000).duration(2000)
            .style('background-color', 'hsl(0, 100%, 40%)');


    } catch (error) {
        console.error('error', error);
    }
    console.log('coucou');
})();
