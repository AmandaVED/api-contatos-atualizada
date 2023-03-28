 import fs from 'fs';

const ARQUIVO = `${__dirname}/../storage/contatos.json`;

let contatos = Array();

function loadContatos(){
    console.log(ARQUIVO)

    if(!fs.existsSync(ARQUIVO))
    fs.writeFileSync(ARQUIVO, JSON.stringify([]));

    const data = fs.readFileSync(ARQUIVO);

    contatos = JSON.parse(data.toString());

    return contatos;
}

function saveContato(data: any){
    contatos.push({
        id: contatos.length +1,
        ...data
    })

    fs.writeFileSync(ARQUIVO,JSON.stringify(contatos));

}

export { loadContatos, saveContato};