let imgBOx = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let showQr = document.getElementById("showQr");

function generateQR(){
    if(qrText.value.length > 0 ){
        qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBOx.classList.add("show-img");
    }
    else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.add('error');
        },1000)
    }
    
}

showQr.addEventListener("click", () =>{
    generateQR();
})