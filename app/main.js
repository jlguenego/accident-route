console.log('hello', d3);

(async () => {
    try {
        const data = await d3.csv('data.csv')
        console.log('data', data);

        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, i) => {
            bar.style.width = `${100 * data[i]['nbr-accident']/5000}%`;
        });
    } catch (error) {
        console.log('error', error);
    }
    console.log('coucou');
})();
