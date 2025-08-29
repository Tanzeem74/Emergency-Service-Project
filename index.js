function heartCount(id) {
    document.getElementById(id).addEventListener('click', function () {
        let count = parseInt(document.getElementById('heart-count').innerText);
        count++;
        document.getElementById('heart-count').innerText = count;
    })
}
for(let i=1;i<=9;i++){
    heartCount('heart-icon'+i);
}

const callHistoryData = [];



document.getElementById('call-btn1').addEventListener('click', function () {
    let coin = parseInt(document.getElementById('coin-count').innerText);
    if (coin < 20) {
        alert('You need to 20 coins for calling');
        return;
    }
    alert('📞 Calling National Emergency Number\nCalling at 999');
    coin -= 20;
    document.getElementById('coin-count').innerText = coin;

    const data = {
        name: "National Emergency Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };
    callHistoryData.push(data);
    update();
})

document.getElementById('call-btn2').addEventListener('click', function () {
    let coin = parseInt(document.getElementById('coin-count').innerText);
    if (coin < 20) {
        alert('You need to 20 coins for calling');
        return;
    }
    alert('📞 Calling Police Helpline Number\nCalling at 999');
    coin -= 20;
    document.getElementById('coin-count').innerText = coin;

    const data = {
        name: "Police Helpline Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };
    callHistoryData.push(data);
    update();
})

document.getElementById('call-btn3').addEventListener('click', function () {
    let coin = parseInt(document.getElementById('coin-count').innerText);
    if (coin < 20) {
        alert('You need to 20 coins for calling');
        return;
    }
    alert('📞 Calling Fire Service Number\nCalling at 999');
    coin -= 20;
    document.getElementById('coin-count').innerText = coin;

    const data = {
        name: "Fire Service Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };
    callHistoryData.push(data);
    update();
})

document.getElementById('call-btn4').addEventListener('click', function () {
    let coin = parseInt(document.getElementById('coin-count').innerText);
    if (coin < 20) {
        alert('You need to 20 coins for calling');
        return;
    }
    alert('📞 Calling Ambulance Service Number\nCalling at 1999-99999');
    coin -= 20;
    document.getElementById('coin-count').innerText = coin;

    const data = {
        name: "Ambulance Service Number",
        number: "1999-99999",
        date: new Date().toLocaleTimeString()
    };
    callHistoryData.push(data);
    update();
})

document.getElementById('call-btn5').addEventListener('click', function () {
    let coin = parseInt(document.getElementById('coin-count').innerText);
    if (coin < 20) {
        alert('You need to 20 coins for calling');
        return;
    }
    alert('📞 Calling Women & Child Helpline \nCalling at 109');
    coin -= 20;
    document.getElementById('coin-count').innerText = coin;

    const data = {
        name: "Women & Child Helpline ",
        number: "109",
        date: new Date().toLocaleTimeString()
    };
    callHistoryData.push(data);
    update();
})

document.getElementById('call-btn6').addEventListener('click', function () {
    let coin = parseInt(document.getElementById('coin-count').innerText);
    if (coin < 20) {
        alert('You need to 20 coins for calling');
        return;
    }
    alert('📞 Calling Anti Corruption Helpline\nCalling at 106');
    coin -= 20;
    document.getElementById('coin-count').innerText = coin;

    const data = {
        name: "Anti Corruption Helpline",
        number: "106",
        date: new Date().toLocaleTimeString()
    };
    callHistoryData.push(data);
    update();
})

document.getElementById('call-btn7').addEventListener('click', function () {
    let coin = parseInt(document.getElementById('coin-count').innerText);
    if (coin < 20) {
        alert('You need to 20 coins for calling');
        return;
    }
    alert('📞 Calling Electricity Helpline\nCalling at 16216');
    coin -= 20;
    document.getElementById('coin-count').innerText = coin;

    const data = {
        name: "Electricity Helpline",
        number: "16216",
        date: new Date().toLocaleTimeString()
    };
    callHistoryData.push(data);
    update();
})

document.getElementById('call-btn8').addEventListener('click', function () {
    let coin = parseInt(document.getElementById('coin-count').innerText);
    if (coin < 20) {
        alert('You need to 20 coins for calling');
        return;
    }
    alert('📞 Calling Brac Helpline\nCalling at 16445');
    coin -= 20;
    document.getElementById('coin-count').innerText = coin;

    const data = {
        name: "Brac Helpline",
        number: "16445",
        date: new Date().toLocaleTimeString()
    };
    callHistoryData.push(data);
    update();
})

document.getElementById('call-btn9').addEventListener('click', function () {
    let coin = parseInt(document.getElementById('coin-count').innerText);
    if (coin < 20) {
        alert('You need to 20 coins for calling');
        return;
    }
    alert('📞 Calling Bangladesh Railway Helpline\nCalling at 163');
    coin -= 20;
    document.getElementById('coin-count').innerText = coin;

    const data = {
        name: "Bangladesh Railway Helpline",
        number: "163",
        date: new Date().toLocaleTimeString()
    };
    callHistoryData.push(data);
    update();
})

function update() {
    const callContainer = document.getElementById("call-container")
    callContainer.innerHTML = "";
    for (const data of callHistoryData) {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="flex justify-between items-center bg-white shadow mt-2 p-3">
                <div>
                    <p class="font-bold">${data.name}</p>
                    <p class="text-gray-500">${data.number}</p>
                </div>
                <div>
                    <p>${data.date}</p>
                </div>
            </div>
        `;
        callContainer.appendChild(div);
    }
}

document.getElementById('clear-btn').addEventListener('click', function () {
    callHistoryData.length = 0;
    const callContainer = document.getElementById("call-container")
    callContainer.innerHTML = "";
})

function copyCount(id){
    document.getElementById(id).addEventListener('click', function () {
    let count = parseInt(document.getElementById('copy-count').innerText);
    count++;
    document.getElementById('copy-count').innerText = count;
})
}
for(let i=1;i<=9;i++){
    copyCount('copy-btn'+i);
}
// from chatgpt
function copyText(id) {
    // Step 1: Get the text element
    const textElement = document.getElementById(id);

    // Step 2: Get the text content
    const text = textElement.innerText;

    // Step 3: Copy the text to clipboard
    navigator.clipboard.writeText(text)
        .then(() => {
            // Notify the user if copy is successful
            alert("Text has been copied!");
        })
        .catch(err => {
            // Log error if something goes wrong
            console.error("Failed to copy: ", err);
        });
}