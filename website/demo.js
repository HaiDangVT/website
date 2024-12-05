// Đặt khóa API của bạn
const apiKey = 'd9a8ef2440fd5e5d73c7f7d70ab8f17c'; // Thay bằng khóa API của bạn
const lat = 10.85065; // Vĩ độ của thành phố Hồ Chí Minh
const lon = 106.77191; // Kinh độ của thành phố Hồ Chí Minh

// Hàm lấy thông tin thời tiết
function fetchWeatherData() {
    // Gửi yêu cầu lấy thông tin thời tiết
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp; // Nhiệt độ
            const humidity = data.main.humidity; // Độ ẩm
            document.getElementById('temperature').innerText = `${temperature} °C`;
            document.getElementById('humidity').innerText = `${humidity}%`;
        })
        .catch(error => console.error('Lỗi khi lấy dữ liệu thời tiết:', error));
}

// Hàm lấy chỉ số UV
function fetchUVIndex() {
    fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const uvIndex = data.value;
            document.getElementById('uv-index').innerText = `${uvIndex}`;
        })
        .catch(error => console.error('Lỗi khi lấy chỉ số UV:', error));
}


// Hàm lấy chất lượng không khí
function fetchAirQuality() {
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const airQualityIndex = data.list[0].main.aqi; // Chỉ số chất lượng không khí
            const airQualityLevels = ['Tốt', 'Trung bình', 'Không tốt cho nhóm nhạy cảm', 'Có hại', 'Rất có hại', 'Nguy hiểm'];
            document.getElementById('air-quality').innerText = `${airQualityLevels[airQualityIndex - 1]}`;
        })
        .catch(error => console.error('Lỗi khi lấy dữ liệu chất lượng không khí:', error));
}

// Gọi các hàm để lấy dữ liệu
fetchWeatherData();
fetchUVIndex();
fetchAirQuality();


// cập nhật giờ
function updateDateTime() {
    const now = new Date();
    
    // Format the date
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const formattedDate = now.toLocaleDateString('vi-VN', dateOptions);
    const formattedTime = now.toLocaleTimeString('vi-VN', timeOptions);

    // Display date and time separately
    document.getElementById('datetime').innerHTML = `
        <span>${formattedDate}</span>
        ${formattedTime}
    `;
}

setInterval(updateDateTime, 1000); // Cập nhật mỗi giây


// demo.js
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

    



