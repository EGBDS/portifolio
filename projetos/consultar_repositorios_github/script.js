const ulista = document.querySelector('#ulista');
const div_list = document.querySelector('#div_list');
const form = document.querySelector('#form');
const campo = document.querySelector('.txtescrita');
const numbers = document.querySelector('.numbers');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    //quando o formulário der como submit a função restante é executada e o event.pre... faz com que o padrão do form não seja executado!

    const page = numbers.value
    const input = campo.value

    fetch('https://api.github.com/search/repositories?q='+input+'&per_page=30&page='+page)
    .then(resposta => {
        return resposta.json()
            //recebendo os dados via api 

    })

    .then(resposta => { 
        console.log(resposta)
    const qtd_repo = resposta.total_count
    const item = resposta.items.map( ({ owner, name, language, description, updated_at, stargazers_count, svn_url}) => //mapeando dentro do array os itens necessários
    `<div class="per_list">
            <a href="${svn_url}" id="login_name" target="_blank">
                <li id="login" >
                    <span class="material-icons">book</span>${owner.login}/${name}
                </li>
            </a>
        <li id="desc"><strong>Descrição:</strong> ${description}</li>
        <div id="org_itens">
            <li id="starga">
            <span class="material-icons" id="star">star_outline</span>${stargazers_count}
            </li>
            <li id="lang"><strong>Linguagem:</strong> ${language}</li>
            <li id="updat"><strong>Última Atualização: </strong>${updated_at.substring(0,10)}</li>
        </div>
    </div>`).join('') // o join incluí qual separador eu quero para separar os array

    div_list.innerHTML += 
        `<div id="qtd_repo">Quantidade de Repositórios: ${new Intl.NumberFormat('pt-BR').format(qtd_repo)}</div>
        <ul id="ulista"> ${item}</ul>` //imprimindo os resultados no html///// o new Intl.... formata a informação em número com '.'

    var remove = document.querySelector('#ulista')
        remove.parentNode.removeChild(remove)
        
    var remove = document.querySelector('#qtd_repo')
        remove.parentNode.removeChild(remove)
    //após a pesquisa, se for pesquisar novamente os items são escluídos no html
    
})

})


