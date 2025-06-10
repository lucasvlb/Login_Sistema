document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('btnCadastrar');

    botao.addEventListener('click', function () {
        const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const objUsuario = {
            usuario: document.getElementById('usuario').value,
            senha: document.getElementById('senha').value
        };

        let indice = document.getElementById('Indice').value;

        if (indice !== "") {
            // Edição
            listaUsuarios[indice] = objUsuario;
            document.getElementById('Indice').value = "";
        } else {
            // Criação
            listaUsuarios.push(objUsuario);
        }

        localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
        listar();

        // Limpa os campos após cadastrar ou editar
        document.getElementById('usuario').value = "";
        document.getElementById('senha').value = "";
    });

    function listar() {
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

    window.removerUsuario = function(index) {
        const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        if (confirm("Você realmente quer remover?")) {
            listaUsuarios.splice(index, 1);
            localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
            listar();
        }
    }

    window.editarUsuario = function(index) {
        const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuarioEditar = listaUsuarios[index];

        document.getElementById('usuario').value = usuarioEditar.usuario;
        document.getElementById('senha').value = usuarioEditar.senha;
        document.getElementById('Indice').value = index; // Armazena o índice para edição
    }

    listar();
});
