
document.addEventListener('DOMContentLoaded', function () {
    // Initialize empty array for price data
    let prices = [];

    // Initialize the Chart.js chart with streaming plugin
    const ctx = document.getElementById('Chartnse').getContext('2d');

    const stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Stock Price NSE',
                data: [], // Initially empty data array
                borderColor: '#1E90FF', // Line color
                //backgroundColor: 'rgba(30, 144, 255, 0.1)', // Fill color with opacity (light blue)
                 // Fill area under the line
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
                    if (!chartArea) {
                        return null;
                    }
                    // Create a blue-to-transparent linear gradient
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, 'rgba(0, 56, 94, 0.4)');  // Start color: Blue with opacity
                    gradient.addColorStop(1, 'rgba(54, 162, 235, 0)');    // End color: Transparent
                    return gradient;
                },
                fill: true,
                tension: 0, // No bezier curve between points
                pointRadius: 3, // Radius of the points
                pointHoverRadius: 5, // Radius of the points on hover
                pointBackgroundColor: '#1E90FF' // Color of the points (same as borderColor)
            }]
        },
        options: {
            responsive: true,
            plugins: {
                streaming: { // Enable streaming plugin
                    duration: 30000, // Display data for the last 30 seconds
                    refresh: 1000, // Refresh chart every 1000 ms (1 second)
                    delay: 1000, // Delay in ms before updating the chart
                    ttl: 600000 // Time-to-live for data in ms (10 minutes)
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
             
                },
   
            },
            scales: {
                x: {
                    type: 'realtime', // Use realtime scale type for dynamic updates
                    title: {
                        display: true,
                        text: 'Time'
                    },
                    ticks: {
                        maxTicksLimit: 8, // Limit visible ticks to 8
                        stepSize: 1000, // Step size in milliseconds (1 second)
                        callback: function(value, index, values) {
                            // Format the timestamp to display as 'h:mm:ss a'
                            return new Date(value).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
                        }
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Price'
                    },
                    suggestedMin: 100,
                    suggestedMax: 1000 // Adjust max based on expected data range
                }
            }
        }
    });

    // Function to add a new random price every second
    function addDataPoint() {
        // Generate a random price between 50 and 150 (for demonstration)
        let randomPrice = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;

        // Add the new price to the existing data array with current time
        const currentTime = Date.now();
        prices.push({
            x: currentTime,
            y: randomPrice
        });

        // Remove data points that fall outside a reasonable time window (e.g., 10 minutes)
        const cutoffTime = currentTime - (10 * 60 * 1000); // 10 minutes in milliseconds
        prices = prices.filter(entry => entry.x > cutoffTime);

        // Update chart data
        stockChart.data.datasets[0].data = prices;

        // Update chart using streaming plugin method
        stockChart.update('quiet'); // Use 'quiet' to prevent animation for streaming update
    }

    // Add initial data point
    addDataPoint();

    // Schedule adding a new data point every second
    setInterval(addDataPoint, 1000); // Update every second
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize empty array for price data
    let prices = [];

    // Initialize the Chart.js chart with streaming plugin
    const ctx = document.getElementById('Chartbse').getContext('2d');
    const stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Stock Price BSE',
                data: [], // Initially empty data array
                borderColor: '#1E90FF', // Line color
                //backgroundColor: 'rgba(30, 144, 255, 0.1)', // Fill color with opacity (light blue)
                fill: false, // Fill area under the line
                tension: 0, // No bezier curve between points
                pointRadius: 3, // Radius of the points
                pointHoverRadius: 5, // Radius of the points on hover
                pointBackgroundColor: '#1E90FF' // Color of the points (same as borderColor)
            }]
        },
        options: {
            responsive: true,
            plugins: {
                streaming: { // Enable streaming plugin
                    duration: 30000, // Display data for the last 30 seconds
                    refresh: 1000, // Refresh chart every 1000 ms (1 second)
                    delay: 1000, // Delay in ms before updating the chart
                    ttl: 600000 // Time-to-live for data in ms (10 minutes)
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
   
            },
            scales: {
                x: {
                    type: 'realtime', // Use realtime scale type for dynamic updates
                    title: {
                        display: true,
                        text: 'Time'
                    },
                    ticks: {
                        maxTicksLimit: 8, // Limit visible ticks to 8
                        stepSize: 1000, // Step size in milliseconds (1 second)
                        callback: function(value, index, values) {
                            // Format the timestamp to display as 'h:mm:ss a'
                            return new Date(value).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
                        }
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Price'
                    },
                    suggestedMin: 100,
                    suggestedMax: 1000 // Adjust max based on expected data range
                }
            }
        }
    });

    // Function to add a new random price every second
    function addDataPoint() {
        // Generate a random price between 50 and 150 (for demonstration)
        let randomPrice = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;

        // Add the new price to the existing data array with current time
        const currentTime = Date.now();
        prices.push({
            x: currentTime,
            y: randomPrice
        });

        // Remove data points that fall outside a reasonable time window (e.g., 10 minutes)
        const cutoffTime = currentTime - (10 * 60 * 1000); // 10 minutes in milliseconds
        prices = prices.filter(entry => entry.x > cutoffTime);

        // Update chart data
        stockChart.data.datasets[0].data = prices;

        // Update chart using streaming plugin method
        stockChart.update('quiet'); // Use 'quiet' to prevent animation for streaming update
    }

    // Add initial data point
    addDataPoint();

    // Schedule adding a new data point every second
    setInterval(addDataPoint, 1000); // Update every second
});

document.addEventListener('DOMContentLoaded', function () {
    var profitLossCells = document.querySelectorAll('#trade_table tbody td:nth-child(5)');

    profitLossCells.forEach(function (cell) {
        var profitLossValue = parseFloat(cell.textContent.replace(/[^\d.-]/g, '')); // Extract numeric value
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
    // Get the values of price and quantity
    const price = parseFloat(document.getElementById('Price').value) || 0;
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;

    // Calculate the total amount
    const totalAmount = price * quantity;

    // Set the total amount in the readonly input
    document.getElementById('totalAmount').value = totalAmount.toFixed(2);  // Display totalAmount with 2 decimal places
}

// Get the Price and Quantity inputs
const priceInput = document.getElementById('Price');
const quantityInput = document.getElementById('quantity');

// Add event listeners to update total amount on input change
priceInput.addEventListener('input', updateTotal);
quantityInput.addEventListener('input', updateTotal);

function LimitOrderBuy(){
    
}
function LimitOrderSell(){
    
}