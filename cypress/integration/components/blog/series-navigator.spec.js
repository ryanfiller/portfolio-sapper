describe('<SeriesNavigator /> component', () => {
  context('when it should not exist', () => {
    beforeEach(() => {
      cy.visit('/blog/fighting-with-git-lfs')
    })

    it('does not render', () => {
      cy.get('.title').should('not.exist')
      cy.get('.buttons').should('not.exist')
    })
  })

  context('when it should exist', () => {
    beforeEach(() => {
      cy.visit('/blog/series')
      // navigate to the first post
      cy.get('.post-preview-list').find('a')
        .invoke('attr', 'href')
        .then(href => { cy.visit(href) })
      cy.injectAxe()
    })

    it('renders correctly', () => {
      cy.get('#content aside.title').contains('This is post 1 of')
      cy.get('#content aside.buttons').within(() => {
        cy.get('.previous').should('not.exist')
        cy.get('.next').should('exist')
      })
      // cy.checkA11y('#content aside.title')
      // cy.checkA11y('#content aside.buttons')
    })
  
    it('navigates forward and backwards', () => {
      cy.get('.buttons').within(() => {
        cy.get('.next').click()
      })
      cy.reload() // why???
      cy.get('.title').contains('This is post 2 of')
      cy.get('.buttons').within(() => {
        cy.get('.previous').should('exist')
        cy.get('.previous').click()
      })
      cy.reload() // why???
      cy.get('.title').contains('This is post 1 of')
    })
  })
})