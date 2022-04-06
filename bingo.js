function gerarNumerosAleatorios(quantidade, min, max){
    
    if(max - min < quantidade){
        console.log("Não existem números suficientes");
        return;
    }
    
    let numerosAleatorios = [];

    for(let i = 0; i < quantidade; i++){
        let numero = Math.ceil(Math.random()*(max - min)) + min;
        if(numerosAleatorios.indexOf(numero) !== -1){
            i--;
        }else{
            numerosAleatorios.push(numero);
        }
    }

    return numerosAleatorios;
    
}

function gerarCartelaBingo(){
    let area_cartela = document.getElementById("cartela");
    let cartela = document.createElement("table");
    let cabecalho_cartela = document.createElement("thead");
    let corpo_cartela = document.createElement("tbody");
    let linha = document.createElement("tr");
    let coluna1 = document.createElement("td");
    coluna1.innerText = "B";
    let coluna2 = document.createElement("td");
    coluna2.innerText = "I";
    let coluna3 = document.createElement("td");
    coluna3.innerText = "N"
    let coluna4 = document.createElement("td");
    coluna4.innerText = "G";
    let coluna5 = document.createElement("td");
    coluna5.innerText = "O";
    
    linha.appendChild(coluna1);
    linha.appendChild(coluna2);
    linha.appendChild(coluna3);
    linha.appendChild(coluna4);
    linha.appendChild(coluna5);
    
    cabecalho_cartela.appendChild(linha);
    
    cartela.appendChild(cabecalho_cartela);

    let cartelaBingo = [];
    cartelaBingo.push(gerarNumerosAleatorios(5,1,15));
    cartelaBingo.push(gerarNumerosAleatorios(5,16,30));
    cartelaBingo.push(gerarNumerosAleatorios(5,31,45));
    cartelaBingo.push(gerarNumerosAleatorios(5,46,60));
    cartelaBingo.push(gerarNumerosAleatorios(5,61,75));

    console.log(cartelaBingo);
    
    for (let i = 0; i < 5; i++) {
        let linha_dados = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            let td = document.createElement("td");
            td.innerText = cartelaBingo[j][i];
            linha_dados.appendChild(td);
        }
        corpo_cartela.appendChild(linha_dados);
    }
    
    cartela.appendChild(corpo_cartela);
    area_cartela.appendChild(cartela);
}

function deletarCartelas(){

    let cartelas = document.getElementsByTagName("table");

    console.log(cartelas.length)

    for(let i = 0; i < cartelas.length; i++){
        cartelas[i].remove();
    }

}

function sorteio(){

    let divsorteados = document.getElementById("sorteados");

    let numerosSorteados = []

    let intervalo = setInterval(function(){
        console.log(numerosSorteados)
        let aleatorio = Math.ceil(Math.random()*75);
        if(numerosSorteados.indexOf(aleatorio) === -1){
            numerosSorteados.push(aleatorio);
            let numero = document.createElement("span");
            numero.innerText = aleatorio;
            divsorteados.appendChild(numero);
        }

        if(numerosSorteados.length === 75) clearInterval(intervalo);
    }, 2000)

}
