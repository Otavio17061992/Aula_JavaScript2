var idade = 16
    console.log(`Você tem ${idade} anos por tanto;`)
if (idade <16) {
    console.log(' nao vota ')
}else if (idade < 18 || idade > 65 ) {
    console.log('voto opcional')
}
else {
    console.log('voto obrigatorio')
}