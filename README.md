# License
>![](https://img.shields.io/badge/license-%20Escola%20Marista%20Ir.%20Ac%C3%A1cio-black) ![](https://img.shields.io/badge/version-0.3-white)



## 𝑪𝒐𝒏𝒗𝒆𝒓𝒔𝒐𝒓 𝒅𝒆 𝒎𝒐𝒆𝒅𝒂𝒔
 
## Descrição do Projeto
Este projeto foi desenvolvido na aula de PWI (Programação Web 1), ministrada pelo professor [Leonardo Rocha](https://github.com/leonardossrocha). O objetivo do projeto é aprender a converter valores de moedas, ainda de forma simples, porém logo esse projeto terá uma continuação mais aprimorada juntamente com o consumo de API.
 
 ## TELA DO PROJETO
 ![Tela do projeto](Captura%20de%20tela%202024-11-14%20074341.png)

 ## Projeto funcionando
![Tela funcionando](Captura%20de%20tela%202024-11-14%20074736.png)


## O projeto se enquadra em conversão de moeda
> * ``Valor``
> * ``Moeda de destino`` 
> * ``Selecionar moeda``
> * ``Convertor``
> * ``Resultado``
## Funcionalidades do website
 
✔️ Verificação de Campos Obrigatórios;
 
✔️ Resetar o formulário;
 
✔️ Preencher Formulário;
 
✔️ Converter moeda;
 
✔️ Inserir valor;
 
✔️ Resultado do valor inserido;
 
✔️ Definir Taxas de câmbio;

✔️ Definir taxas de câmbio manualmente
 
 
# Funcionalidades JS utilizadas🔧
1- Recuperação de valores de entrada: Recupera os valores inseridos pelo usuário nos campos do formulário
 
2- Definição de taxas de câmbio: Define um objeto de taxas de câmbio fixas exchangeRates que contém as taxas de conversão entre diferentes moedas (USD, BRL e EUR).
 
3- Conversão de moeda: converte a moeda, deMoeda, paraMoeda.
 
4- Exibição do resultado: Atualiza o conteúdo de texto do elemento com o id "result" para exibir o valor convertido, arredondado para duas casas decimais usando toFixed(2), juntamente com o símbolo da moeda convertida.
 
# Função para obter Taxa de cambio entre moedas Usando Api
~~~ Javascript
const apikey = '0bc06fba9f3d118aa0a4ffe8';
const apiURL = `https://v6.exchangerate-api.com/v6/${apikey}/latest/`;

async function getExchangeRate(daMoeda, paraMoeda){
    try{
        const response = await fetch(`${apiURL}${daMoeda}`);
        const data = await response.json();
        if(data.result === "success"){
            return data.conversion_rates[paraMoeda];
        }else {
            throw new Error('Erro ao buscar taxa de câmbio');
        }
    }catch (error){
        console.error("Erro;", error);
        return null;
    }
~~~

## Explicação do codigo(Função para obter taxa de cambio)
Esta função (getExchangeRate) é responsável por buscar a taxa de câmbio entre duas moedas, utilizando uma API de câmbio. Aqui está um resumo de como essa função funciona:

1. Definição da URL da API:
• A constante apiURL armazena a URL da API de câmbio, onde o ${apikey} é substituído pela chave de API necessária para autenticar a solicitação.

2. Função getExchangeRate:
• A função getExchangeRate é assíncrona e recebe dois parâmetros: daMoeda (moeda de origem) e paraMoeda (moeda de destino).

• Ela faz uma solicitação HTTP para a API, buscando a taxa de câmbio mais recente da moeda de origem (daMoeda) para todas as outras moedas.

3. Tratamento de Dados:
• Após receber a resposta, a função verifica se a solicitação foi bem-sucedida (data.result === "success").
• Se bem-sucedida, a taxa de conversão para a moeda de destino (paraMoeda) é retornada.
• Caso contrário, a função lança um erro indicando que houve um problema ao buscar a taxa.

4. Tratamento de Erros:
• Se ocorrer qualquer erro durante o processo, a função registra o erro no console e retorna null para indicar a falha.

##
 
# Manipulação de Formulario para Conversão de Moedas vom validação e exibição de resultado
~~~ Javascript
document.getElementById('currency-converter').addEventListener('submit', async function(event){
    event.preventDefault();


//Obter valor de entada
const valor = parseFloat(document.getElementById('amount').value);
const daMoeda = document.getElementById('daMoeda').value;
const paraMoeda = document.getElementById('paraMoeda').value;

const exchangerRate =  await getExchangeRate(daMoeda, paraMoeda);
 
if(exchangerRate){
    const convertedValue = valor * exchangerRate;

    //console.log(convertedValue)

    const conversao = document.getElementById('conversao');
    conversao.textContent = `resultado: ${convertedValue.toFixed(2)} ${paraMoeda}`
}
});
~~~
# Explicação do codigo (Manipulação de formulario)
ste trecho do código configura um evento para processar a conversão de moedas quando o formulário de conversão é enviado. Aqui está uma explicação detalhada de como ele funciona:

1. Captura do Evento de Envio:
O código adiciona um listener ao formulário (currency-converter) para capturar o evento de envio (submit). A função event.preventDefault() é usada para evitar o recarregamento da página após o envio.

2. Obtenção dos Valores de Entrada:
• Captura o valor do montante a ser convertido, extraindo-o do campo amount.
• Captura as moedas de origem e destino dos campos daMoeda e paraMoeda.

3. Chamada da Função de Conversão:
Utiliza a função getExchangeRate para obter a taxa de câmbio entre as moedas selecionadas.

4. Cálculo e Exibição do Resultado:
• Se a taxa de câmbio estiver disponível, calcula o valor convertido multiplicando o montante pela taxa de câmbio.
• Exibe o resultado arredondado para duas casas decimais na área designada (conversao), indicando também a moeda de destino.
Este código permite que o usuário insira um valor e selecione as moedas de origem e destino, processando a conversão de forma assíncrona e exibindo o resultado na interface.
 



## COMO USAR
1. Selecione a moeda de origem e destino BRL, EUR, USD E EUR.
2. Insira o valor que deseja converter e tera o valor convertido.

 
 
 
## Tecnlogias utilizadas 🔧
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=black)

### Colaboradores
- [Etore Bryan Digeras](https://github.com/BrayanCorreians): Desenvolvedor;
- [Eduardo Costa](https://github.com/eduardoocosta): Desenvolvedor;
