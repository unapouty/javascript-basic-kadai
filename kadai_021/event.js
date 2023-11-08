const text =document.getElementById('text');
const btn = document.getElementById('btn');
 
setTimeout(() => {
  text.textContent = 'ボタンをクリックされました';
}, 2000);

btn.addEventListener('click',() => {    
})