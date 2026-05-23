const userIcon = document.getElementById('user');
const noUserIcon = document.getElementById('no-user');

const user = sessionStorage.getItem('user_email');

if (user) {
    // console.log('hello from use')
    noUserIcon.classList.add('hidden');
    userIcon.classList.remove('hidden');
} else {
    userIcon.classList.add('hidden');
    noUserIcon.classList.remove('hidden');
}