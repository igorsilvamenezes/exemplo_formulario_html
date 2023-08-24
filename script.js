console.log('Página carregada!!');

document.addEventListener('submit', function(event){
    //Evita a página ser recarregada ao submeter o formulário
    event.preventDefault();

    console.log('Formulario submetido!!!');

    //Obtem o elemento html com ID fieldName
    const edtName = document.getElementById('fieldName');
    //Obtem o valor (texto digitado) do edit
    const nameValue = edtName.value;
    console.log('Nome:', nameValue);

    //Obtem o elemento html com ID fieldAddress
    const edtAddress = document.getElementById('fieldAddress');
    //Obtem o valor (texto digitado) do edit
    const addressValue = edtAddress.value;
    console.log('Endereço:', addressValue);
    
    //Obtem o elemento html com ID fieldAge
    const edtAge = document.getElementById('fieldAge');
    //Obtem o valor (texto digitado) do edit
    const ageValue = edtAge.value;
    console.log('Idade:', ageValue);    
});
