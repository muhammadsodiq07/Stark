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

