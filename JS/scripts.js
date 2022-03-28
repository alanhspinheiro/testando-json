const objs = [
    {
    nome: 'Alan',
    idade: 30,
    esta_trabalhando: true,
    hobbies: ['música', 'games', 'pedaladas'],
    detalhes_profissão: {
        profissão: 'rogramador',
        empresa: 'empresa x'

    }


},
{
    nome: 'João',
    idade: 35,
    esta_trabalhando: false,
    hobbies: ['música', 'corrida', 'futebol'],
    detalhes_profissão: {
        profissão: null,
        empresa: null

    }


}
]
console.log(objs)


//JSON teste
//CONVERTER OBJETO PARA JSON 
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

//Converter JSON para objeto
const objData = JSON.parse(jsonData); 

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) =>
console.log(pessoa.nome)

)


