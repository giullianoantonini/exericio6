interface Pessoa {
  nome: string;
  idade: number;
  getDescricao(): string;
}

class Estudante implements Pessoa {
  public nome: string;
  public idade: number;
  private email?: string;

  constructor(nome: string, idade: number, email?: string) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  getDescricao(): string {
    if (this.email) {
      return `Nome: ${this.nome}, Idade: ${this.idade}, Email ${
        this.email ? this.email : "Nenhum e-mail cadastrado"
      }`;
    } else {
      return `Nome: ${this.nome}, Idade: ${this.idade}. Esta pessoa não possui e-mail.`;
    }
  }
}

const estudante1 = new Estudante("Fulano", 30, "fulanobeltrano@gmail.com");
const estudante2 = new Estudante("Beltrano", 44);

console.log(estudante1.getDescricao());
console.log(estudante2.getDescricao());
