class Mesa {
    tamanhoMesa: number;
    materialMesa: string;
    formatoMesa: string;

    constructor(tamanhoMesa: number, materialMesa: string, formatoMesa: string){ 
        this.tamanhoMesa = tamanhoMesa
        this.materialMesa = materialMesa
        this.formatoMesa = formatoMesa
    }

    alternarFormato(novoFormato: string): void {
        this.formatoMesa = novoFormato;
    }

    obterTamanho(): string {
        return this.materialMesa;
    }
}
let objeto = new Mesa(1, 'madeira', 'redondo')
objeto.alternarFormato('quadrado')

class Celular {
    modelo: string;
    cor: string;
    quantidadeCamera: string;

    constructor(modelo: string, cor: string, quantidadeCamera: string){
        this.modelo = modelo
        this.cor = cor
        this.quantidadeCamera = quantidadeCamera
    }

    trocarModelo(novoModelo: string): void {
        this.modelo = novoModelo;
    }

    atualizarCor(): string {
        return this.cor;
    }
}

let aparelho = new Celular('iphone 13', 'preto', 'duas')
aparelho.trocarModelo('iphone 14')

class Computador {
    processador: string;
    placaMae: string;
    placaDedicada: boolean;

    constructor(processador: string, placaMae: string, placaDedicada: boolean){
        this.processador = processador
        this.placaMae = placaMae
        this.placaDedicada = placaDedicada
    }

    trocarProcessador(novoProcessador: string): void{
        this.processador = novoProcessador
    }

    trocarPlacaMae(): string {
        return this.placaMae;
    }
}

let processador = new Computador('I7 8700k', 'AMD AM4', true)
processador.trocarProcessador('Ryzen 7')

class Camisa {
    tamanho: string;
    cor: string;
    marca: string;

    constructor(tamanho: string, cor: string, marca: string) {
        this.tamanho = tamanho
        this.cor = cor
        this.marca = marca
    }

    mudarCor(novaCor: string): void{
        this.cor = novaCor
    }

    trocarTamanho(): string {
        return this.tamanho
    }
}

let cor = new Camisa('PP', 'Preta', 'oxer')
cor.mudarCor('Branca')

class Cabelo {
    tipo: string;
    cor: string;
    tamanho: string;

    constructor(tipo: string, cor: string, tamanho: string){
        this.tipo = tipo
        this.cor = cor
        this.tamanho = tamanho
    }

    pintarCabelo(novaCorCabelo: string): void {
        this.cor = novaCorCabelo;
    }

    tamanhoCabelo(): string {
        return this.tamanho
    }
}

let corCabelo = new Cabelo('Cacheado', 'Preto', 'Pequeno')
corCabelo.pintarCabelo('Loiro')