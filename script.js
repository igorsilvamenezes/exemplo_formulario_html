console.log('Página carregada!!');

//Lista de clientes (array de objetos)
let customersList = [];

//Obter os elemento html form
const mainForm = document.querySelector('#mainForm');

//Obtem o elemento html com ID fieldName
const edtName = document.querySelector('#fieldName');

//Obtem o elemento html com ID fieldAddress
const edtAddress = document.querySelector('#fieldAddress');

//Obtem o elemento html com ID fieldAge
const edtAge = document.querySelector('#fieldAge');

//Obtem o elemento button (cancelar)
const cancelButton = document.querySelector('#cancelButton');

//Limpa o formulario e dá foco no campo Nome
clearForm();

//Função disparada quando ocorrer o evento submit
document.addEventListener('submit', async function(event){
    //Evita a página ser recarregada ao submeter o formulário
    event.preventDefault();

    console.log('Formulario submetido!!!');

    clearValidateMessages();
    //Salva o cadastro do cliente
    saveCustomer();
});

//Função disparada quando ocorrer o click no botão cancelar
cancelButton.addEventListener('click', async function(){

    const confirmation = confirm('Tem certeza que deseja cancelar?');

    if(confirmation) {
        //Limpa o formulario e dá foco no campo Nome
        clearForm();
        clearValidateMessages();
        console.log('Cancelando edição!');
    }
} );

function saveCustomer() {
    console.log('Função saveCustomer executado!');

    //Obtem os valores (texto digitado) dos edits
    const edtNameValue = edtName.value;
    const edtAddressValue = edtAddress.value;
    const edtAgeValue = edtAge.value;

    //console.log(edtNameValue, edtAddressValue, edtAgeValue);

    //Cria um objeto com os dados do cliente
    const customer = {
        name: edtNameValue,
        address: edtAddressValue,
        age: edtAgeValue
    }

    if( validateCustomer(customer) ) {

        //Adiciona um objeto (cliente) na lista de clientes (array)
        customersList.push(customer);
        
        //Limpa o formulario e dá foco no campo Nome    
        clearForm();

        console.log(customersList);
    }
}

function clearForm() {
    mainForm.reset();
    edtName.focus();
}

function validateCustomer(customer) {
    let result = true;

    //verificar se o campo nome foi preenchido
    //se não result = false;
    if( customer.name == '' ){
        result = false;

        //Adicionar a classe css error na div form-control        
        //  pegar o pai do componente input que é a div pai
        const formControl = edtName.parentElement;
        //  adicionar a classe error na div pai
        formControl.className = 'form-control error';

        console.log('O campo nome é obrigatório.')
    }

    //verificar se o campo endereço foi preenchido
    //se não result = false;
    if( customer.address == '' ){
        result = false;

        //Adicionar a classe css error na div form-control        
        //  pegar o pai do componente input que é a div pai
        const formControl = edtAddress.parentElement;
        //  adicionar a classe error na div pai
        formControl.className = 'form-control error';

        console.log('O campo endereço é obrigatório.')
    }

    //verificar se o campo idade foi preenchido
    //se não result = false;
    if( customer.age == '' ){
        result = false;

        //Adicionar a classe css error na div form-control        
        //  pegar o pai do componente input que é a div pai
        const formControl = edtAge.parentElement;
        //  adicionar a classe error na div pai
        formControl.className = 'form-control error';

        console.log('O campo idade é obrigatório.')
    }

    return result;
}

function clearValidateMessages() {
    //Obter todas as div form-control que estiverem com a classe error
    const listFormControls = document.querySelectorAll('.error');
    //Percorrer cada div form-control com a classe error e remover a classe error
    listFormControls.forEach( formControlDiv => {
        formControlDiv.className = 'form-control';
    });
}