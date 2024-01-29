# Arrays

## Referencias para metodos de array em JavaScript

| Metodo      | Descricao                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| concat      | Junta varios arrays e devolve uma copia dos arrays concatenados.                                                                     |
| every       | Itera por todos os elementos do array, verificando uma condicao desejada (funcao) ate que `false` seja devolvido.                    |
| filter      | Cria um array com todos os elementos avaliados com `true` de uma funcao especificada.                                                |
| forEach     | Executa uma funcao especifica em cada elemento do array.                                                                             |
| join        | Reune todos os elementos do array em uma string.                                                                                     |
| indexOf     | Pesquisa o array em busca de elementos especificos e devolve sua posicao.                                                            |
| lastIndexOf | Devolve a posicao do ultimo item do array que corresponda ao criterio de pesquisa.                                                   |
| map         | Cria outro array a partir de uma funcao que contem o criterio/condicao e devolve os elementos do array que correspondem ao criterio. |
| reverse     | Inverte o array, de modo que o ultimo item se torna o primiero, e vice-versa.                                                        |
| slice       | Devolve um novo array a partir de um indice especifico.                                                                              |
| some        | Itera por todos os elementos do array, verificando a condicao desejada (funcao) ate que `true` seja devolvido.                       |
| sort        | Organiza o attay em ordem alfabetica ou de acordo com a funcao especifica.                                                           |
| toString    | Devolve o array na forma de string.                                                                                                  |
| valueOf     | E semelhante ao metodo toString e devolve o array em forma de uma string.                                                            |

# ECMAScript 6 e as novas funcionalidades de array

| Metodo      | Descricao                                                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| @@interator | Devolve um objeto que contem os pares chave/valor do array; pode ser chamado sincornamente para obter a chave/valor dos elementos do array. |
| copyWithin  | Copia uma sequencia de valores do arrtay na posicao de um indice de inicio.                                                                 |
| entries     | Devolve @@interator, que contem pares chave/valor.                                                                                          |
| includes    | Devolve `true` caso um elemento seja encontrado no array, e false ao contrario. Foi adicionado na ES2016.                                   |
| find        | Busca um elemento no array, dada uma condicao desejada (funcao de callback), e devolve o elemento caso seja encontrado.                     |
| findIndex   | Busca um elemento no array. dada uma condicao desejada (funcao de callback), e devolve o indice do elemento caso seja encontrado.           |
| fill        | Preenche o array com um valor estatico.                                                                                                     |
| from        | Cria um novo array a partir de um array existente.                                                                                          |
| keys        | Devolve um @@interaror, contendo as chaves do arrays.                                                                                       |
| of          | Cria um novo array a partir dos argumentos passados para o metodo.                                                                          |
| values      | Devolve @@interaror, contendo os valores do array.                                                                                          |

# Classe TypedArray

| TypedArray        | Descricao                                                 |
| ----------------- | --------------------------------------------------------- |
| Int8Array         | Inteiro de 8 bits com sinal, usando complemento de dois.  |
| Uint8Array        | Inteiro de 8 bits sem sinal.                              |
| Uint8ClampedArray | Inteiro de 8 bits sem sinal.                              |
| Int16Array        | Inteiro de 16 bits com sinal, usando complemento de dois. |
| Uint16Array       | Inteiro de 16 bits sem sinal.                             |
| Int32Array        | Inteiro de 32 bits com sinal, usando complemento de dois. |
| Uint32Array       | Inteiro de 32 bits sem sinal.                             |
| Float32Array      | Numero de ponto flutuante padrao IEEE com 32 bits.        |
| Float64Array      | Numero de ponto flutuante padrao IEEE com 64 bits.        |
