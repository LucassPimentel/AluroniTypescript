# Perfomance Aluroni
- Otimizando a performance - 

### Como o React é inteligente o suficiente para atualizar somente o que foi alterado?
Porque ele tem o Virtual DOM, que é uma representação da interface 'antiga' (anterior a alteração), em memória e ao ser renderizado novamente ele sincroniza o Virtual DOM com o DOM real, evidenciando possíveis alterações de estados e atualizando o DOM real.
Esse processo é conhecido como reconciliação.

OBS: O React não desmonta e remonta o componente inteiro, apenas o que realmente sofreu alteração. 

### Renderizações desnecessárias  
Para solucionar renderizações desnecessárias, podemos utilizar o memo, que basicamente memoriza o componente e evita que ele seja renderizado novamente quando não há mudanças de props. Interessante utiliza-lo quando o componente re-renderiza muitas vezes com as mesmas props, listas

OBS: Deve ser utilizado com cuidado, pois pode gerar um impacto na performance da aplicação.

#### Hook useMemo
É utilizado basicamente para memorizar variáveis. Funciona como o useEffect (questão de parâmetros), o 1o parâmetro é uma função anônimo ou arrow function e o 2o é um array de dependências para que caso algum estado mudar ele altera a variável do useMemo

#### memo X useMemo
Basicamente, memo retorna um componente e o useMemo retorna uma variável, ou seja, a maior diferença entre os dois está no retorno.
- O memo normalmente é utilizado em exports de componentes, mas nada impede que você o utilize dentro de um componente. (mesmo que isto não seja recomendado).
- O useMemo deve ser usado dentro de um componente, então, memoizando uma variável você a utiliza dentro do componente que você estiver, e terá no array de dependências os states/props necessários para que aquela variável atualize.

### Performance entre telas 
#### Code splitting
Cria múltiplos pacotes para serem carregados, diminuindo o tamanho dos pacotes e consequentemente o tempo levado para carrega-los.

#### Lazy Loading
Carrega os arquivos apenas quando forem necessários (o download será feito apenas uma vez).

#### Dynamic Import
Faz a importação somente quando é necessário.

OBS: O React.lazy tem a função de importar os componentes de forma "preguiçosa", apenas quando necessário.
