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
}
//###########

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
//este trecho do código configura um evento para processar a conversão de moedas quando o formulário de conversão é enviado.

});


