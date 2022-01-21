let searchbtn = document.getElementById('id-search');
let removebtn = document.getElementById('removebox2');
let modalbox = document.getElementById('id-modalbox');

searchbtn.addEventListener('click', function() {
  modalbox.classList.add('show');
});

removebtn.addEventListener('click', function() {
  modalbox.classList.remove('show');
});

let userbox = document.getElementById('user');
let removbox = document.getElementById('remove');
let modaluser = document.getElementById('userbox');

userbox.addEventListener('click', function() {
  modaluser.classList.add('user');
});

removbox.addEventListener('click', function() {
  modaluser.classList.remove('user');
});


let elopenShopnmodal = document.querySelector('.shop__img-icon');
let elColseEemodal = document.getElementById('closeEe-btn');
let elbagShopModal = document.getElementById('mod-show-bag-shop');


elopenShopnmodal.addEventListener('click', function () {
  elbagShopModal.classList.add('mod-show-bag-shop');
});


elColseEemodal.addEventListener('click', function () {
  elbagShopModal.classList.remove('mod-show-bag-shop');
});



let elopenHeartnmodal = document.getElementById('open-heart_show');
let elheartColseEemodal = document.getElementById('heart-close-btn');
let elbagHeartModal = document.getElementById('heart_show');


elopenHeartnmodal.addEventListener('click', function () {
  elbagHeartModal.classList.add('heart_show');
});


elheartColseEemodal.addEventListener('click', function () {
  elbagHeartModal.classList.remove('heart_show');
});