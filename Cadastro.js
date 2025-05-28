// fazer o cadastro
const botao = document.getElementById('btnCadastrar');
//const listaUsuariosCadastrados = [];

// cadastrar
botao.addEventListener('click', function (){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const objUsuario = {
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value
    };
    listaUsuarios.push(objUsuario);
    const listaJson = JSON.stringify(listaUsuarios);
    localStorage.setItem('usuarios', listaJson);
    listar();
}

);

//listar
function listar(){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let tabela = document.getElementById('listaUsuariosCadastrados');
    tabela.innerHTML = "";
    listaUsuarios.forEach((objeto, index) => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${objeto.usuario}</td>
            <td>${objeto.senha}</td>
            <td>
                <button>Editar</button>
                <button>Remover</button>
            </td>
        `;
        tabela.appendChild(linha);
    });
}

function removerUsuario(index){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if(confirm("Você realmente quer remover?")){
    listaUsuarios.splice(index,1);
    let listaJson = JSON.stringify(listaUsuarios);
    localStorage.setItem("usuarios", listaJson);
    listar();
}}
listar();

