describe('EVEX7 test', () => {
    beforeEach(() => {
        // funcao pra ser inicializada sempre antes de todos os testes, 
        cy.clearLocalStorage()
        cy.viewport(1440, 900);
        cy.visit('/')
        cy.get('#loginForm h4').should('have.text', 'Seja bem-vindo ao EVEX7!')
        cy.login(Cypress.env('loginInpt'), Cypress.env('pwd'))
        cy.url().should('eq', 'http://localhost:8080/sav-web-1.0/inicio.faces')
        cy.get('.menu-button > .pi').should('be.visible').then(() => { cy.wait(500) });
        cy.get('.menu-button > .pi').click()
        cy.wait(500)
    })

    describe('Ações Basicas - Carteiras', () => {
        it('Relatorio - Carteiras - Pesquisar', () => {
            cy.acaoPesquisarCarteira()
            cy.wait(900)            
        })
        it('Relatorio - Carteiras - Limpar', () => {
            cy.acaoPesquisarCarteira()
            cy.wait(900)    
            cy.get('button[id="limparPesquisa"]').click()     
        })
    })
})