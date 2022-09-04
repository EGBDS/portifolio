function typeWriter(elemento){
    const textArray = elemento.innerHTML.split(''); //split('') separa cada palavra separada
    elemento.innerHTML = ''; //reseta o h1 
    textArray.forEach((letra, i) => {setTimeout(() => elemento.innerHTML += letra, 75 * i);
    }); //forEach = para cada letra em i 'numero dado por split' ele pega e mostra na tela com o setTimeout, com delay de 75ms * i, 
}

const mensagemprincipal = document.querySelector('.efeito-escrever');
typeWriter(mensagemprincipal);
