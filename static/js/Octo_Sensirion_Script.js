$(document).ready(function () {
    // Dummy data for testing
    let isSensorActive = false;
    let sensorData = {
        particulateMatter: [0, 5, 10, 15, 20],
        voc: [0, 10, 20, 30, 40],
        // Add data for other parameters
    };

    // Function to start measurement
    $("#start-button").click(function () {
        if (!isSensorActive) {
            isSensorActive = true;
            $("#sensor-indicator").text("Sensor: Active");
            updateGraphs();
        }
    });

    // Function to stop measurement
    $("#stop-button").click(function () {
        if (isSensorActive) {
            isSensorActive = false;
            $("#sensor-indicator").text("Sensor: Inactive");
        }
    });

    // Function to update graphs (dummy data for testing)
    function updateGraphs() {
        if (isSensorActive) {
            // Update graphs with sensorData (replace with actual data)
            updateGraph("particulate-matter-graph", "Particulate Matter", sensorData.particulateMatter);
            updateGraph("voc-graph", "VOC", sensorData.voc);
            // Add code to update other graphs here
        }
    }

    // Example function to update a graph (replace with actual charting library)
    function updateGraph(containerId, label, data) {
        new Chart(document.getElementById(containerId), {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5'],
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Update graphs every 5 seconds (adjust as needed)
    setInterval(updateGraphs, 5000);
});
