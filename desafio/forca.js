class Forca {
  constructor(palavraJogo) {
    this.palavraJogo = palavraJogo;
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavra = Array(palavraJogo.length).fill("_");
  }

  /**
   * Verifica se a letra fornecida pelo usuário é válida de acordo com as condições das regras.
   * @param {String} letra
   * @returns 
   */
  chuteEhValido(letra) {
    if (!(String(letra).charCodeAt(0) >= 65 && String(letra).charCodeAt(0) <= 172) ||  letra.length > 1
        || this.letrasChutadas.includes(letra)) 
      return false;
    
    return true;
  }


  /**
   * Função a qual recebe o chute e verifica se o usuário chutou corretamente ou não
   * @param {string} letra 
   * @returns
   */
  chutar(letra) {
    letra = letra.toLowerCase();
    
    if (!this.chuteEhValido(letra))
      return;
    
    // Se o chute for correto, adiciona a letra na palavra
    if (this.palavraJogo.includes(letra)) {
      for (let i = 0; i < this.palavraJogo.length; i++) {
        if (letra === this.palavraJogo[i])
          this.palavra[i] = letra;
      }

    } else {
      if (!this.letrasChutadas.includes(letra))
        this.vidas -= 1;
    }

    this.letrasChutadas.push(letra);
  }

  buscarEstado() { // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
    if (this.vidas === 0)
      return "perdeu";
    else if (!this.palavra.includes("_"))
      return "ganhou";

    return "aguardando chute"; 
  } 

  buscarDadosDoJogo() {
      return {
        letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
        vidas: this.vidas, // Quantidade de vidas restantes
        palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
