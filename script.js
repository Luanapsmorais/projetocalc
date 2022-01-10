const resultado = document.querySelector(".result");
const confirmar = document.querySelector(".igual");

function insert ( valor ){
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = ' ';
}

function backspace() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}

// aqui estou dizendo na função backspace que: se tenho cinco números no visor da caclculadora, e clico na ação backspace, vai apagar cinco - 1, ou seja, vou ficar com quatro números.

function confirma(){
    if(resultado.textContent != 'Erro'){
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}

// na função confirma, se eu coloco qualquer número no meu <p>, através do resultado.textContent, e se esse valor for diferente (!=), eu consigo colocar o que tem dentro desse valor, e tranformo, através do = eval(), que irá fazer a operação matemática, e vai mostrar isso no visor através do resultado.innerHTML