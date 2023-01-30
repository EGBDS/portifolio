# ApiGitHub_repositories
 
 Utilizando a api do <a href="https://docs.github.com/pt/search-github/searching-on-github/searching-for-repositories">GitHub</a> para consultar repositórios.

No HTML e CSS utilizando coisas simples tags, id's, class e etc, nada que haja necessidade de explicar ou comentar.

No JavaScript fiz query de id e class para utilizar no processo de consumir a api.

Nas linhas 7 e 8 utilizo o 'form' do html para servir de parâmetro para quando um dos input seja clicando assim acionando o 'submit' execute a função.

Nas linhas 11 e 12 recebo alguns 'value' dos query feitos.

Utilizando o método 'fetch()' inseri a api estática e que no final recebe parâmetros para ser modificada quando o usuário necessitar.

Para receber os dados da api do github em formato 'json()', foi utilizado o '.then()' que armazena os dados do 'json()' em alguma variável.

Utilizando novamente o método '.then()', porém, agora para outra utilidade, para pegar os dados armazenados e buscar os itens necessários para a aplicação, utilizando o '.map()' para localizar os itens específicos, que os armazenão em uma variável constante, além de serem posicionados de uma forma que quando enviados para o html já estejam com as tags necessárias.

Para mandar os dados requeridos da api para o html, utiliza-se o  'innerHTML'

Por algum motivo que não conheço, os dados ao invés de irem se substituindo a cada submit, acabavam acumulando com os novos dados da api indo para baixo dos superiores. Para solucionar, encontrei um modo utilizado nas linhas 45,46,48,49.

Por fim assim utilizando a api para receber dados dos repositórios do GitHub.

----------------------------------------------------------------------------------------------------
Observações:
-Por algum motivo a quantidade de páginas que podem ser acessadas fica estática de 0 á 34. Não sei se é erro no código ou é a api que disponibiliza essa quantidade máxima de páginas.

-Não tive conhecimento para fazer no final a páginação com a quantidade de repositórios assim como quando se pesquisa algo no <a href="https://github.com/search?q=node&ref=simplesearch">GitHub</a>. Mesmo pesquisando não consegui fazer.

-Tentei utilizar o '.Intl.datetimeformat()' para formatar a data, mas dava erro e não consegui resolver também. Algo no meu código com certeza.
