function showTemperatureCharts() {
        const chartContainer = document.getElementById('chart-container');
        chartContainer.innerHTML = ''; // Xóa nội dung cũ
        chartContainer.style.display = 'grid'; // Hiện container

        // Tạo iframe cho mỗi biểu đồ
        const bedroomChart = document.createElement('iframe');
        bedroomChart.src = 'https://thingspeak.mathworks.com/channels/2775282/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng ngủ
        bedroomChart.width = "600";
        bedroomChart.height = "400";
        chartContainer.appendChild(bedroomChart);

        const livingRoomChart = document.createElement('iframe');
        livingRoomChart.src = 'https://thingspeak.mathworks.com/channels/2775304/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng khách
        livingRoomChart.width = "600";
        livingRoomChart.height = "400";
        chartContainer.appendChild(livingRoomChart);

        const kitchenChart = document.createElement('iframe');
        kitchenChart.src = 'https://thingspeak.mathworks.com/channels/2775292/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng bếp
        kitchenChart.width = "600";
        kitchenChart.height = "400";
        chartContainer.appendChild(kitchenChart);
    }

function showHumidityCharts() {
        const chartContainer = document.getElementById('chart-container');
        chartContainer.innerHTML = ''; // Xóa nội dung cũ
        chartContainer.style.display = 'grid'; // Hiện container

        // Tạo iframe cho mỗi biểu đồ
        const bedroomChart = document.createElement('iframe');
        bedroomChart.src = 'https://thingspeak.mathworks.com/channels/2775282/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng ngủ
        bedroomChart.width = "600";
        bedroomChart.height = "400";
        chartContainer.appendChild(bedroomChart);

        const livingRoomChart = document.createElement('iframe');
        livingRoomChart.src = 'https://thingspeak.mathworks.com/channels/2775304/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng khách
        livingRoomChart.width = "600";
        livingRoomChart.height = "400";
        chartContainer.appendChild(livingRoomChart);

        const kitchenChart = document.createElement('iframe');
        kitchenChart.src = 'https://thingspeak.mathworks.com/channels/2775292/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng bếp
        kitchenChart.width = "600";
        kitchenChart.height = "400";
        chartContainer.appendChild(kitchenChart);
    }

function showCo2Charts() {
        const chartContainer = document.getElementById('chart-container');
        chartContainer.innerHTML = ''; // Xóa nội dung cũ
        chartContainer.style.display = 'grid'; // Hiện container

        // Tạo iframe cho mỗi biểu đồ
        const bedroomChart = document.createElement('iframe');
        bedroomChart.src = 'https://thingspeak.mathworks.com/channels/2775282/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng ngủ
        bedroomChart.width = "600";
        bedroomChart.height = "400";
        chartContainer.appendChild(bedroomChart);

        const livingRoomChart = document.createElement('iframe');
        livingRoomChart.src = 'https://thingspeak.mathworks.com/channels/2775304/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng khách
        livingRoomChart.width = "600";
        livingRoomChart.height = "400";
        chartContainer.appendChild(livingRoomChart);

        const kitchenChart = document.createElement('iframe');
        kitchenChart.src = 'https://thingspeak.mathworks.com/channels/2775292/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng bếp
        kitchenChart.width = "600";
        kitchenChart.height = "400";
        chartContainer.appendChild(kitchenChart);
    }

function showSunCharts() {
        const chartContainer = document.getElementById('chart-container');
        chartContainer.innerHTML = ''; // Xóa nội dung cũ
        chartContainer.style.display = 'grid'; // Hiện container

        // Tạo iframe cho mỗi biểu đồ
        const bedroomChart = document.createElement('iframe');
        bedroomChart.src = 'https://thingspeak.mathworks.com/channels/2775282/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng ngủ
        bedroomChart.width = "600";
        bedroomChart.height = "400";
        chartContainer.appendChild(bedroomChart);

        const livingRoomChart = document.createElement('iframe');
        livingRoomChart.src = 'https://thingspeak.mathworks.com/channels/2775304/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng khách
        livingRoomChart.width = "600";
        livingRoomChart.height = "400";
        chartContainer.appendChild(livingRoomChart);

        const kitchenChart = document.createElement('iframe');
        kitchenChart.src = 'https://thingspeak.mathworks.com/channels/2775292/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15'; // Biểu đồ nhiệt độ phòng bếp
        kitchenChart.width = "600";
        kitchenChart.height = "400";
        chartContainer.appendChild(kitchenChart);
    }
function showSection(home) {
    if (home == 'home') {
        window.location.href = 'demo.html'
    }
}

function openRoom(room) {
        if (room === 'bedroom') {
            window.location.href = 'bedroom.html'; // Điều hướng đến giao diện phòng ngủ
        } else if (room === 'living-room') {
            window.location.href = 'living-room.html'; // Điều hướng đến giao diện phòng khách (nếu có)
        } else if (room === 'kitchen') {
            window.location.href = 'kitchen.html'; // Điều hướng đến giao diện phòng bếp (nếu có)
        } else if (room === 'statistics'){
            window.location.href = 'statistics.html';
        }
}

    
