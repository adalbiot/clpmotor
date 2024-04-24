const ligarMotor = document.getElementById('ligarMotor');
const desligarMotor = document.getElementById('desligarMotor');
const confirmaMotor = document.getElementById('confirmaMotor');
const msgPot = document.getElementById('msgPot');
const msg = document.getElementById('msg');

var urlPost = 'https://leanwebsensor1.onrender.com/chaves'
var urlGet = 'https://leanwebsensor1.onrender.com/producao'

confirm = 0;

function receiverRequest(){
    fetch(urlGet, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => {
        msgPot.textContent = json.msgPot;
        confirmaMotor.textContent = json.confirmaMotor;
        if (json.confirmaMotor == "Ligado"){
            confirm = 1;
        }
        else {
            confirm = 0;
        }
    });
 }

setInterval(receiverRequest, 2000)

ligarMotor.addEventListener('click', () => {
    if (confirm == 1) {
        let requestData = {"liga": 1, "desliga": 0}
        sendRequest(requestData)
    }
});

desligarMotor.addEventListener('click', () => {
    let requestData = {"liga": 0, "desliga": 0}
    sendRequest(requestData)
});

function sendRequest(data){
    fetch(urlPost, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}