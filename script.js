const container = document.querySelector('.container'),
input = container.querySelector('.form input'),
button = container.querySelector('.form button'),
qr_img = container.querySelector('.QR_CODE img');

button.addEventListener('click',()=>{
    let inputValue = input.value;
 
    if(!inputValue){
        alert('Enter text or Url')

    }
    button.innerText ="Generating QR Code..."
 
    qr_img.src =` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue} `;
   qr_img.addEventListener('load',()=>{
    container.classList.add('active');
    button.innerText ='Generate QR Code'
   })
  
});
input.addEventListener('keyup',()=>{
   
    if(!input.value){
        container.classList.add('active');
    }
})