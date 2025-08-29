console.log(document);

function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (hours >= 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + " " + ampm;
}


const clickBtn = document.getElementsByClassName('click-btn');
for (const btn of clickBtn) {
    btn.addEventListener('click', function () {
        const serviseNumber = btn.parentNode.parentNode.children[1].children[1].innerText;
        const phoneNumber = btn.parentNode.parentNode.children[1].children[2].innerText;
        const serviseName = btn.parentNode.parentNode.children[1].children[0].innerText;

        const coinCount = document.getElementById('coin-count');
        const coinCountString = coinCount.innerText;
        const previousCoinCount = parseInt(coinCountString);
        const newCoinCount = previousCoinCount - 20;
        coinCount.innerText = newCoinCount;
        if (newCoinCount < 0) {
            alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে হলে কমপক্ষে ২০ কয়েন লাগবে।");
            coinCount.innerText = previousCoinCount;
            return;
        }

        const heartCount = document.getElementById('heart-count');
        const heartCountString = heartCount.innerText;
        const previousCoinCount1 = parseInt(heartCountString);
        const newCoinCount1 = previousCoinCount1 + 1;
        heartCount.innerText = newCoinCount1;

        const clearSection = getElement('clear-section');
        clearSection.addEventListener('click', function () {
            const createHistory = getElement('history-class');
            history.innerHTML = '';
        })



        const createHistory = getElement('history-class');
        const history = document.createElement('history');
        history.innerHTML =
            `<div class="flex items-center justify-between bg-[#FAFAFA] rounded-xl p-3">
                <div>
                    <h2 class="text-[18px] font-normal text-[#111111]">${serviseName}</h2>
                    <p class="text-[#5C5C5C] text-[18px] font-normal">${serviseNumber}</p>
                </div>
                <p class="text-[18px] font-normal text-[#111111]">${getCurrentTime()}</p>
            </div>`
        createHistory.appendChild(history);


        alert('Calling to ' + serviseName + ' ' + phoneNumber);


    })
}

const copyBtn = document.getElementsByClassName('copy-btn');
for (const btn of copyBtn) {
    btn.addEventListener('click', function () {
        const copyCount = document.getElementById('copy-count-click');
        const copyCountString = copyCount.innerText;
        const previousCopyCount = parseInt(copyCountString);
        const newCopyCount = previousCopyCount + 1;
        copyCount.innerText = newCopyCount;


        const copyNumber = btn.parentNode.parentNode.children[1].children[2].innerText;
        alert('Number Copied: ' + copyNumber)})

        
    }