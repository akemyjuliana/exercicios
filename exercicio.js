function validar () {
    let A = document.querySelector('input#A')
    let B = document.querySelector('input#B')
    let a1 = Number(A.value)
    let b1 = Number(B.value)
    if (b1 > a1) {
        alert ('Formulário Válido')
    } else {
        alert ('Formulário Inválido')
    }
}