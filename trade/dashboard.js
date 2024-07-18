let NSEprice = null;
document.addEventListener('DOMContentLoaded', function () {

    let prices = [];

    const ctx = document.getElementById('Chartnse').getContext('2d');

    const stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Stock Price NSE',
                data: [],
                borderColor: '#1E90FF',
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) {
                        return null;
                    }

                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, 'rgba(0, 56, 94, 0.4)');
                    gradient.addColorStop(1, 'rgba(54, 162, 235, 0)');
                    return gradient;
                },
                fill: true,
                tension: 0,
                pointRadius: 3,
                pointHoverRadius: 5,
                pointBackgroundColor: '#1E90FF'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                streaming: {
                    duration: 30000,
                    refresh: 1000,
                    delay: 1000,
                    ttl: 600000
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,

                },

            },
            scales: {
                x: {
                    type: 'realtime',
                    title: {
                        display: true,
                        text: 'Time'
                    },
                    realtime: {
                        duration: 40000, 
                        refresh: 1000,
                        ttl: undefined 
                    }
                    
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Price'
                    },
                    suggestedMin: 100,
                    suggestedMax: 1000
                }
            }
        }
    });


    function addDataPoint() {

        let randomPrice = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;

        const currentTime = Date.now();
        prices.push({
            x: currentTime,
            y: randomPrice
        });

        const cutoffTime = currentTime - (10 * 60 * 1000);
        prices = prices.filter(entry => entry.x > cutoffTime);

        stockChart.data.datasets[0].data = prices;

        stockChart.update('quiet');

        return randomPrice;
    }


    addDataPoint();

    setInterval(function () {
        NSEprice = addDataPoint();
        console.log("nse ", NSEprice);
    }, 1000);
});

let BSEprice = null;
document.addEventListener('DOMContentLoaded', function () {

    let prices = [];

    const ctx = document.getElementById('Chartbse').getContext('2d');
    const stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Stock Price BSE',
                data: [],
                borderColor: '#1E90FF',

                fill: false,
                tension: 0,
                pointRadius: 3,
                pointHoverRadius: 5,
                pointBackgroundColor: '#1E90FF'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                streaming: {
                    duration: 30000,
                    refresh: 1000,
                    delay: 1000,
                    ttl: 600000
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },

            },
            scales: {
                x: {
                    type: 'realtime',
                    title: {
                        display: true,
                        text: 'Time'
                    },
                    realtime: {
                        duration: 40000, 
                        refresh: 1000, 
                        ttl: undefined 
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Price'
                    },
                    suggestedMin: 100,
                    suggestedMax: 1000
                }
            }
        }
    });


    function addDataPoint() {

        let randomPrice = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;

        const currentTime = Date.now();
        prices.push({
            x: currentTime,
            y: randomPrice
        });

        const cutoffTime = currentTime - (10 * 60 * 1000);
        prices = prices.filter(entry => entry.x > cutoffTime);

        stockChart.data.datasets[0].data = prices;

        stockChart.update('quiet');

        return randomPrice;
    }

    addDataPoint();

    setInterval(function () {
        BSEprice = addDataPoint();
        console.log("bse :", BSEprice);
    }, 1000);
});

let profit = null;
document.addEventListener('DOMContentLoaded', function () {

    function updateValues() {
        if (NSEprice > BSEprice) {
            profit = NSEprice - BSEprice;
            console.log("Profit =", profit);
        } else if (BSEprice > NSEprice) {
            profit = BSEprice - NSEprice;
            console.log("Profit =", profit);
        } else {
            console.log("Values are equal");
        }
    }

    updateValues();

    setInterval(updateValues, 1000);
});






document.addEventListener('DOMContentLoaded', function () {
    var profitLossCells = document.querySelectorAll('#trade_table tbody td:nth-child(5)');

    profitLossCells.forEach(function (cell) {
        var profitLossValue = parseFloat(cell.textContent.replace(/[^\d.-]/g, ''));
        if (profitLossValue >= 0) {
            cell.classList.add('profit');
        } else {
            cell.classList.add('loss');
        }
    });
});

function selectItem(value) {
    let val = document.getElementById('symbolinp').value = value;
    document.getElementById('output').textContent = val;
}

function updateTotal() {

    const price = parseFloat(document.getElementById('Price').value) || 0;
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;

    const totalAmount = price * quantity;

    document.getElementById('totalAmount').value = totalAmount.toFixed(2);
}

const priceInput = document.getElementById('Price');
const quantityInput = document.getElementById('quantity');

priceInput.addEventListener('input', updateTotal);
quantityInput.addEventListener('input', updateTotal);

function LimitOrderBuy() {

}
function LimitOrderSell() {

}