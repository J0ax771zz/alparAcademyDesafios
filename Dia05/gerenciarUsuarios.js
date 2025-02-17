//Importamos a biblioteca prompt para ler as entradas do usuário.
const prompt = require('prompt-sync')();

//Criamos um array vazio para armazenar nossos objetos.
const usuarios = [];



/*
Nesta primeira função adicionamos o usuário ao nosso array(usuários)
primeiro temos uma validação que verifica se o usuário cadastrado tem o mesmo email que outro usuário
#Extra adicionei Id's para se parecer mais com um sistema real de gerenciamento
Após isso ele utiliza o método push para enviar os dados em forma de objeto para nosso array(usuarios)
E retorna que em caso de sucesso o usuário foi cadastrado.
*/
function adicionarUsuarios(nome, idade, email){

    const usuarioJaExiste = usuarios.some(usuario => usuario.email === email);
    if(usuarioJaExiste){
        console.log("Email indisponivel para cadastro, tente novamente!");
        return;
    }

    const idUsuario = (usuarios.length +1) * 1235;

    usuarios.push({id: idUsuario, nome, idade, email, idUsuario});
    return `Usuário ${email}, cadastrado com sucesso!`
}


/*
Nesta função removemos o usuario atráves do email dele
utilizei o métod find(), que procura em todo o array(usuarios) pelo primeiro idice que possuir esse email
Depois chamamos o método splice() que remove o objeto por inteiro em combinação com o find()
após isso retornamos ao usuário a mensagem de sucesso ou o usuário não encontrado.
*/
function removerUsuarioPeloEmail(emailUsuario){
    const usuarioRemover = usuarios.find(usuario => usuario.email === emailUsuario);
    if(usuarioRemover !== -1){
        console.log(`O usuário ${usuarioRemovido.email} foi removido com sucesso!`);
        let usuarioRemovido = usuarios.splice(usuarioRemover, 1);

    }else{
        console.log("Usuário não encontrado!");
    }
}


/* 
Está função tem a mesma especialidade da função acima que é remover pelo email, mas no caso desta função
em especifico, ela remove o usuário pelo Id.
*/
function removerUsuarioPeloId(idUser){
    const idRemover = usuarios.findIndex(usuario => usuario.idUsuario === idUser);
    if(idRemover !== -1){
        console.log(`O usuário ${idRemover.nome} foi removido com sucesso!`);
        let usuarioRemovido = usuarios.splice(idRemover, 1);
    }else{
        console.log("Usuário não encontrado");
    }
}


/*
Nesta função utilizamos o método forEach que percorre todo o array
E retorna ao usuário o Id, nome, idade e email dos usuários.
Outra validação que coloquei é se a lista estiver vazia o programa retorna ao usuário essa informação também.
*/
function listarTodoUsuarios(users){
    if(users.length > 0){
        users.forEach(usuario => {
            console.log(`Id: ${usuario.idUsuario} Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
        });
    }else{
        console.log("A lista está vázia, adicione usuários primeiro!");
    }
}

// Declaro a variável opção para armazenar as escolhas do usuário.
let opcao = 0;


//Criei um loop while que enquanto a opção não for 5 o código deve continuar rodando.
while(opcao != 5){

    //Criei um "Menu" para mostrar as opções ao usuário.
    console.log(`Digite uma opção: \n
                [1]- Adicionar usuário \n
                [2]- Remover usuário pelo email \n
                [3] Remover usuário pelo Id \n
                [4]- Listar todos usuários \n
                [5]- Sair \n
                Sua lista tem ${usuarios.length} usuários atualmente`);

    //Faço o casting da opção para int pois a biblioteca prompt sempre retorna uma string.
    opcao = parseInt(prompt("Digite uma opção: "));
    
    //Peço ao usuário digitar o nome,email e idade e chamo a função para adicionar os usuário
    //E passo nome, email e idade como parametros da função.
    switch(opcao){
        case 1: let nome = prompt("Digite o nome do usuário: ");
                let email = prompt("Digite o email do usuário: ");
                let idade = parseInt(prompt("Digite o idade do usuário: "));
                adicionarUsuarios(nome, idade, email);
                break;

        //Chamamos a função para remover pelo email.
        case 2: let emailUsuario = prompt("Digite o email do usuário que deseja remover: ");
                removerUsuarioPeloEmail(emailUsuario);
                break;

        //Chamamos a função para remover pelo Id.
        case 3: let idUsuario = parseInt(prompt("Digite o id do usuário: "));
                removerUsuarioPeloId(idUsuario);
                break;

        //Chamamos a função para exibir todos os usuários.
        case 4: listarTodoUsuarios(usuarios);
                break;

        //Caso o usuário desejar sair do programa, exibimos a mesagem de despedida e encerramos a execução.
        case 5: console.log("Obrigado por usar nosso sistema de gerenciamento de usuários");
                break;

        //Se o usuário não digitar nenhuma opção válida pedimos para ele tentar novamente.
        default:
            console.log("Opção inválida, tente novamente!");
    }
}