const theme = document.querySelector('#btn-theme');
const listTheme = document.querySelector('#theme');

theme.addEventListener('click', changeTheme);
function changeTheme(){
    // var document = document.body;
    document.documentElement.classList.toggle("dark");
    // listTheme.classList.toggle("hidden");
   
}

