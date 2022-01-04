const minute = document.getElementById("minute");
const second = document.getElementById("second");

//kutucuklar 
const selectedMinute = document.getElementById("selectedMinute");
const selectedSecond = document.getElementById("selectedSecond");

//Butonlar 
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

let stop = false;

selectedMinute.addEventListener("change", () => {
    minute.textContent = selectedMinute.value ;
});

selectedSecond.addEventListener("change", () => {
    second.textContent =
           selectedSecond.value < 10 ? "0" + selectedSecond.value : selectedSecond.value ;
});    

startButton.addEventListener("click",startTimer);
resetButton.addEventListener("click", () => {
    stop = true;
    minute.textContent = "00";
    second.textContent = "00";
    selectedMinute.value = "00";
    selectedSecond.value = "00";
});

function startTimer(){
    let dk = minute.textContent;
    let sn = second.textContent;

    const interval = setInterval(() => {
        sn--;
        sn = sn < 10 ? "0" + sn : sn;
        if(sn == "0-1"){
            dk--;
            sn = 59;
        }

        if((dk == 0 && sn == 00) || (dk == 0 && sn == 0 )) {
            clearInterval(interval);
            window.alert("Süre doldu");
            selectedMinute.value = "00";
            selectedSecond.value = "00";
        }
        if (stop){
            clearInterval(interval);
            return;
        }
        minute.textContent = dk;
        second.textContent = sn;
        
    },1000)
}