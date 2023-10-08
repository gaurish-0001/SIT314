document.addEventListener("DOMContentLoaded", function () {
    // Create initial empty traces
    var numDataPoints = 20;
    var brightnessData = Array.from({ length: numDataPoints }, () => Math.floor(Math.random() * 100));

    // Create a trace for brightness
    var brightnessTrace = {
        x: [],
        y: [],
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Brightness',
        line: { shape: 'linear' },
        marker: { size: 10 }
    };

    // Layout configuration
    var layout = {
        title: 'Light Data Visualization',
        xaxis: {
            title: 'Brightness levels'
        },
        yaxis: {
            title: 'Date and time'
        }
    };

    // Plot the initial empty data
    var data = [brightnessTrace];
    var plot = Plotly.newPlot('plot', data, layout);

    // Function to update the graph with a new random value
    function updateGraph() {
        var newValue = Math.floor(Math.random() * 100);

        // Update the x and y values of the trace
        brightnessTrace.x.push(new Date()); // Add a timestamp
        brightnessTrace.y.push(newValue);

        // Keep only the last numDataPoints data points
        if (brightnessTrace.x.length > numDataPoints) {
            brightnessTrace.x.shift();
            brightnessTrace.y.shift();
        }

        // Update the graph
        Plotly.update('plot', [brightnessTrace], layout);
    }

    // Update the graph every second
    setInterval(updateGraph, 3000);
});