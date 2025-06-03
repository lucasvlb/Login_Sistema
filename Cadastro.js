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
    let indice = document.getElementById('Indice').value;
    if(indice !==""){
        //edicao
        listaUsuariosCadastrados[indice] = objUsuario;
        document.getElementById('indice').value = "";
    }else{
        //criacao
        listaUsuariosCadastrados.push(objUsuario);
    }
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
        <button onclick="editarUsuario(${index})">Editar</button>
        <button onclick="removerUsuario(${index})">Remover</button>
    </td>
`;
        tabela.appendChild(linha);
    });
}

function removerUsuario(index){
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if(confirm("Voce realmente quer remover?")){
        listaUsuarios.splice(index,1);
        let listaJson = JSON.stringify(listaUsuarios);
        localStorage.setItem("usuarios", listaJson);
        listar();
    }
}

function editarUsuario(index){
    const listaUsuarios =JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioEditar = listaUsuarios[index];
    document.getElementById('usuario').value = usuarioEditar.usuario;
    document.getElementById('senha').value = usuarioEditar.senha;


}



listar();

