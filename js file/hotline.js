console.log(document);

function getElement(id) {
    const element = document.getElementById(id);
  return element;
}

const clickBtn = document.getElementsByClassName('click-btn');
for (const btn of clickBtn) {
    btn.addEventListener('click', function(){
        const serviseNumber = btn.parentNode.parentNode.children[1].children[1].innerText;
        const phoneNumber = btn.parentNode.parentNode.children[1].children[2].innerText;
        const serviseName = btn.parentNode.parentNode.children[1].children[0].innerText;
        console.log(serviseName);
        
        const createHistory = getElement('history-class');
        const history = document.createElement('history');
        history.innerHTML =
         `<div class="flex items-center justify-between bg-[#FAFAFA] rounded-xl p-3">
                <div>
                    <h2 class="text-[18px] font-normal text-[#111111]">${serviseName}</h2>
                    <p class="text-[#5C5C5C] text-[18px] font-normal">${serviseNumber}</p>
                </div>
                <p class="text-[18px] font-normal text-[#111111]">11:36:58 AM</p>
            </div>`
        createHistory.appendChild(history);


        alert('Calling to ' + serviseName + ' ' + phoneNumber);
        


    })
}