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



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyDJvG006U-qdNo8sFHLVEkylEt-kVIPuBk",
  authDomain: "project-917932744674499140.firebaseapp.com",
  databaseURL: "https://project-917932744674499140-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-917932744674499140",
  storageBucket: "project-917932744674499140.appspot.com",
  messagingSenderId: "822017054182",
  appId: "1:822017054182:web:b336067ba2c19b86c2f227",
  measurementId: "G-Q5JC04NKBY"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  //functions
  // make sure that the name in ' ' match with name of your database child
  var nhietDo = document.getElementById('temperature');
  var dbRef = firebase.database().ref("livingroom").child('Nhietdo');
  var doAm = document.getElementById('humidity');
  var dbRef2 = firebase.database().ref("livingroom").child('Doam');
  var nongdoco2 = document.getElementById('co2-index')
  var dbRef3 = firebase.database().ref("livingroom").child('Co2')
  var anhsang = document.getElementById('anhsang')
  var dbref4 = firebase.database().ref("livingroom").child('Anhsang')
  var device =
  dbRef.on('value', snap => nhietDo.innerText = snap.val());
  dbRef2.on('value', snap => doAm.innerText = snap.val());
  dbRef3.on('value',snap => nongdoco2.innerText = snap.val());
  dbref4.on('value',snap => anhsang.innerText = snap.val())




let btn_1 = document.querySelector('#dieuhoa_0'); // Nút bấm
let isMayLanhOn = false; // Biến để theo dõi trạng thái

// Hàm xử lý nút bấm
btn_1.addEventListener('click', () => {
    isMayLanhOn = !isMayLanhOn; // Đảo ngược trạng thái
    updateDevices();
});

let btn_2 = document.querySelector('#fan'); // Nút bấm
let isfanon = false; // Biến để theo dõi trạng thái

// Hàm xử lý nút bấm
btn_2.addEventListener('click', () => {
    isfanon = !isfanon; // Đảo ngược trạng thái
    updateDevices();
});

let btn_3 = document.querySelector('#light'); // Nút bấm
let isLighton = false; // Biến để theo dõi trạng thái

// Hàm xử lý nút bấm
btn_3.addEventListener('click', () => {
    isLighton = !isLighton; // Đảo ngược trạng thái
    updateDevices();
});

function updateDevices() {
    const livingRoomRef = firebase.database().ref("livingroom");

    // Sử dụng update() để không xoá dữ liệu khác
    livingRoomRef.update({

        Maylanh: isMayLanhOn ? 1 : 0, // Trạng thái máy lạnh
        Den: isLighton ? 1 : 0,
        Quat: isfanon ? 1 : 0
    }).then(() => {
        console.log("Cập nhật trạng thái thiết bị thành công.");
    }).catch((error) => {
        console.error("Có lỗi xảy ra khi cập nhật:", error);
    });
}

function listenToDeviceChanges() {
    const deviceRef = firebase.database().ref("livingroom");

    deviceRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Cập nhật trạng thái cho tất cả thiết bị
   
            isMayLanhOn = data.Maylanh === 1;
            isLighton = data.Den === 1;
            isfanon = data.Quat === 1;

            // Mảng chứa tên các thiết bị
            const devices = ['dieuhoa', 'light', 'fan'];

            devices.forEach(device => {
                const currentState = 
                                     (device === 'dieuhoa' && isMayLanhOn) ||
                                     (device === 'light' && isLighton) ||
                                     (device === 'fan' && isfanon);
                changeImage(device, currentState);
            });
        }
    });
}

// Gọi hàm để bắt đầu lắng nghe thay đổi từ Firebase
listenToDeviceChanges();

function changeImage(device, currentState) {
    let imageElement;
    let box;
    let offImage, onImage;
    let offColor, onColor;

    switch (device) {
        case 'light':
            imageElement = document.getElementById('light-image');
            offImage = 'image/light-off.png';
            onImage = 'image/light-on.png';
            box = document.getElementById('light');
            offColor = 'white';
            onColor = 'yellow';
            break;
        case 'fan':
            imageElement = document.getElementById('fan-image');
            box = document.getElementById('fan');
            offImage = 'image/fan-off.png';
            onImage = 'image/fan-on.gif';
            offColor = 'white';
            onColor = 'lightgreen';
            break;
        case 'dieuhoa':
            imageElement = document.getElementById('dieuhoa-image');
            box = document.getElementById('dieuhoa_0');
            offImage = 'image/dieuhoa-off.png';
            onImage = 'image/dieuhoa-on.gif';
            offColor = 'white';
            onColor = 'lightblue';
            break;
    }

    // Thay đổi hình ảnh và màu nền dựa trên trạng thái
    if (imageElement) {
        imageElement.src = currentState ? onImage : offImage;
        box.style.backgroundColor = currentState ? onColor : offColor;
    }

    // Xử lý hiển thị cho điều hòa
    const chartSection = document.getElementById("dieuhoa_1");
    const temperatureDisplay = document.getElementById('temperature-display');
    if (device === 'dieuhoa') {
        chartSection.style.display = currentState ? "block" : "none";
        temperatureDisplay.style.display = currentState ? "block" : "none";
    }


}


// Firebase lắng nghe thay đổi dữ liệu
function syncToThingSpeak() {
    const firebaseRef = firebase.database().ref("livingroom");

    // Lắng nghe thay đổi trong nhánh "Bedroom"
    firebaseRef.on('value', (snapshot) => {
        const data = snapshot.val();

        if (data) {
            const temperature = data.Nhietdo;
            const humidity = data.Doam;
            const co2 = data.Co2;
            const light = data.Anhsang;

            // Gửi dữ liệu lên ThingSpeak
            sendDataToThingSpeak(temperature, humidity, co2, light);
        }
    });
}

// Hàm gửi dữ liệu lên ThingSpeak
function sendDataToThingSpeak(temperature, humidity, co2, light) {
    const apiKey = "L4TS6Q40YHLYTYRT"; // Thay bằng Write API Key từ ThingSpeak
    const url = `https://api.thingspeak.com/update.json`;

    // Gửi yêu cầu POST
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            api_key: apiKey,
            field1: temperature,  // Gửi nhiệt độ vào Field 1
            field2: humidity,     // Gửi độ ẩm vào Field 2
            field3: co2,          // Gửi CO2 vào Field 3
            field4: light         // Gửi ánh sáng vào Field 4
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Dữ liệu đã gửi lên ThingSpeak:", data);
    })
    .catch(error => {
        console.error("Lỗi khi gửi dữ liệu lên ThingSpeak:", error);
    });
}

// Bắt đầu đồng bộ
syncToThingSpeak();
