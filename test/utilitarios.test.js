const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
    

    beforeEach(() => {

        util = new Utilitarios(); 
        this.itens = [];
        this.numeros = [];


        this.itens.push('Oi');
        this.itens.push('palavra');
        this.itens.push('flamengo');

        this.numeros.push(10);
        this.numeros.push(10);
        this.numeros.push(20);



      });

    test("Inverter texto", async () => {
        expect(util.inverterString ('Amigo')).toBe('ogimA');  
      });
 
    test("Contar numero de caracteres", async () => {
        expect(util.contarCaracteres ('Kojima')).toStrictEqual(6);  
    });

    test("transformar caracteres em maiusculo", async () => {
      expect(util.paraMaiusculas ('Snake')).toBe('SNAKE');  
    });

    test("Transformar caracteres em minusculo", async () => {
      expect(util.paraMinusculas ('UaUAu')).toBe('uauau');  
    });

    test("Primeira letra para minuscula", async () => {
      expect(util.primeiraLetraMaiuscula ('risk')).toBe('Risk');  
    });   




    test("Somar valor", async () => {
      expect(util.somar(5,4)).toStrictEqual(9);  
    });    

    test("Diminuir valor", async () => {
      expect(util.subtrair (7,4)).toStrictEqual(3);  
    });    

    test("Multiplicar valor", async () => {
      expect(util.multiplicar (5,5)).toStrictEqual(25);  
    });

    test("Dividir valor", async () => {
        expect(util.dividir (50,2)).toStrictEqual(25);  
      });

    test("O Valor é Par", async () => {
      expect(util.ehPar (2)).toBe(true);  
    });



    test("Coleta o Primeiro elemento", async () => {
        expect(util.primeiroElemento('of')).toBe('o');  
      });

    test("Coleta o Ultimo elemento", async () => {
        expect(util.ultimoElemento('rain')).toBe('n');  
      });    
    
    test("coleta o tamanho da frase", async () => {
        expect(util.tamanhoArray('Minos')).toBe(5);  
      });    
      
    test("Ordena o Array", async () => {
      expect(util.ordenarArray(this.itens)).toEqual(["Oi", "flamengo", "palavra"]);  
    });
    
    test("Inverte o Array", async () => {
        expect(util.inverterArray(this.itens)).toEqual(["flamengo", "palavra", "Oi"]);  
      });    

    test("Gera um numero aleatorio", async () => {
        expect(util.gerarNumeroAleatorio()).toBe(1);  
      }); 
      
      test("Verifica se o valor é um numero", async () => {
        expect(util.ehNumero(2)).toBe(true);  
      });    
      
      test("Remove os espaços do inicio e final da frase", async () => {
        expect(util.removerEspacos('  Nossa eu gosto muito de fazer testes  ')).toBe('Nossa eu gosto muito de fazer testes');  
      });    
      
      test("Repete o texto", async () => {
        expect(util.repetirTexto('oi', 2)).toBe('oioi');  
      });    
      
      test("Junta os arrays", async () => {
        expect(util.juntarArray(this.itens, ', ')).toBe('Oi, palavra, flamengo');  
      });    
      
      test("Conta o numero de palavras", async () => {
        expect(util.contarPalavras('eu tenho quatro palavras')).toBe(4);  
      });    
      
      test("media dos valores em um array", async () => {
        expect(util.mediaArray(this.numeros)).toBe(13.333333333333334);  
      });    
      
      test("Remove os valores duplicados", async () => {
        expect(util.removerDuplicados(this.itens)).toEqual(['Oi','palavra','flamengo']);  
      });    
      
      test("é um valor palindromo", async () => {
        expect(util.ehPalindromo("ola meu teste")).toBe(false);  
      });    
      
      test("mescla os objetos", async () => {
        expect(util.ehPar (this.itens)).toBe(false);  
      });    
      
   
});
