// para lpgin
const entrar = document.getElementById('entrar');

entrar.addEventListener('click', function (){
    const listaUsuariosCadastrados = JSON.parse(localStorage.getItem('usuario'));

    let login;
    let senha;

    let valido = usuariosCadastrados.find(user => user.usuario == login && user.senha === senha);
    
})