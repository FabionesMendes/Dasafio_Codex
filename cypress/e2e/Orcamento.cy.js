describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8080/index.html')
    cy.get('#valorPassagem').type('200');
    cy.get('#numeroPessoas').type ('2');
    cy.get('#diasHospedagem').type ('4');
    cy.get('#dataNascimento').type('1990-11-10');
    cy.get('#orcamentoForm > button').click()
    
    // Validar o resultado
    cy.get('#resultadoOrcamento')
      .should('be.visible')  // Verifica se o campo de resultado está visível
  })

  it('passes', () => {
    cy.visit('http://127.0.0.1:8080/index.html')
    cy.get('#valorPassagem').type('400');
    cy.get('#numeroPessoas').type ('2');
    cy.get('#diasHospedagem').type ('4');
    cy.get('#dataNascimento').type('1990-111-10');
    cy.get('#orcamentoForm > button').click()
    
    // Validar o resultado
    cy.get('#resultadoOrcamento')
      .should('be.visible')  // Verifica se o campo de resultado está visível
  })


  it('passes', () => {
    cy.visit('http://127.0.0.1:8080/index.html')
    cy.get('#nome').type('Fabio Henrique da Silva Mendes');
    cy.get('#email').type ('fabiohmendes01@gmail.com');
    cy.get('#mensagem').type ('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    cy.get('#contatoForm > button').click()
    
    
  })
      
})