const ratingNum = document.querySelectorAll('.btn');
const selected = document.querySelector("#selected");


for (let i = 0; i < ratingNum.length; i++) {
    
ratingNum[i].addEventListener('click', function(){
    ratingNum[i].classList.add('active');
    selected.innerHTML = i+1

})
}



const submit = document.querySelector(".submit");
const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
const submit2 = document.querySelector(".submit2");

submit.addEventListener('click', function(){
    sec2.classList.remove('visibility');
    sec1.classList.add('visibility');
})

submit2.addEventListener('click', function(){
    sec1.classList.remove('visibility');
    sec2.classList.add('visibility');
    ratingNum.forEach(function(item){
        item.classList.remove('active')
    })
})


