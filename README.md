## Configurando o ambiente ##

Pré-requisitos:

1. Node.js - Ambiente de execução JavaScript.
2. Cypress - Framework de testes end-to-end.
3. Visual Studio Code - Editor de código.

Passos para configuração:

4. Instale o Node.js: Baixe e instale a versão mais recente do Node.js no seu computador.

5. Instale o Visual Studio Code (VS Code): Use o VS Code para gerenciar os arquivos do projeto.

Abra o terminal no VS Code:

6. No menu superior, clique em Terminal > New Terminal.

    Navegue até a pasta do projeto:

7. No terminal, use o comando cd para ir até a pasta onde está o projeto.
    Instale o Cypress:

    


Execute os seguintes comandos no terminal para instalar o Cypress e inicializar o projeto:
    
    npm install cypress --save-dev
    npm init -y

   # Arquivo: OrcamentoPage.js #

1. visit(): Navega até a página do formulário de orçamento.

2. preencherValorPassagem(valor): Preenche o campo de valor da passagem com o valor fornecido.

3. preencherNumeroPessoas(numero): Preenche o campo de número de pessoas.

4. preencherDiasHospedagem(dias): Preenche o campo de dias de hospedagem.

5. preencherDataNascimento(data): Preenche o campo de data de nascimento.

6. submeterFormulario(): Clica no botão para submeter o formulário de orçamento.

7. validarResultadoVisivel(): Verifica se o resultado do orçamento está visível.


# Arquivo: ContatoPage.js #
 
1. visit(): Navega até a página do formulário de contato.

2. preencherNome(nome): Preenche o campo de nome.

3. preencherEmail(email): Preenche o campo de email.

4. preencherMensagem(mensagem): Preenche o campo de mensagem.

5. submeterFormulario(): Clica no botão para submeter o formulário de contato.

