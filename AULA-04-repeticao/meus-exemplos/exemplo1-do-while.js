var posicao = 0
var nome = 'Mikael '
var sobreNome = 'Holandes'
var nomeCompleto = nome + sobreNome
console.log(nomeCompleto)

do{
    console.log(`o seu nome completo é ${nomeCompleto} numero de vezes repetida atualmente: ${posicao}`)
    posicao++
}while(posicao < nomeCompleto.length)