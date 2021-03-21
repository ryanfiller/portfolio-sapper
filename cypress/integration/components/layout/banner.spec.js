describe('<Banner /> component', () => {  
  beforeEach(() => {
    cy.visit('/')
  })

  it('does not render a banner on the homepage', () => {
    cy.get('.banner').should('not.exist')
  })

  context('when there is no banner image', () => {  
    beforeEach(() => {
      cy.visit('/about')
    })

    it('does not render a figure element', () => {
      cy.get('h1').should('exist')
      cy.get('figure.banner').should('not.exist')
    })
  })

  context('when there is a banner image', () => {  
    beforeEach(() => {
      cy.visit('/changes')
      cy.injectAxe()
    })

    it('renders a figure element and content', () => {
      cy.get('h1').should('exist')
      cy.get('figure').should('exist')
      cy.get('figure').find('img').should('exist')
      cy.get('figure').find('figcaption').should('exist')
      cy.checkA11y('#page-banner')
    })
  })

  context('/blog subpages', () => {  
    beforeEach(() => {
      cy.visit('/blog')
      cy.get('.post-preview').find('a')
        .invoke('attr', 'href')
        .then(href => { cy.visit(href) })
      cy.injectAxe()
    })

    it('renders the correct elements', () => {
      cy.get('.banner[data-segment="blog"]').should('exist')
      cy.get('figure').should('exist')
      cy.get('.banner').within(() => {
        cy.get('h1').should('exist')
        cy.get('.date').should('exist')
        cy.get('.tags').should('exist')
      })
      cy.checkA11y('#page-banner')
    })
  })

  context('/lab subpages', () => {  
    beforeEach(() => {
      cy.visit('/lab')
      cy.get('.post-preview').find('a')
        .invoke('attr', 'href')
        .then(href => { cy.visit(href) })
      cy.injectAxe()
    })

    it('renders the correct elements', () => {
      cy.get('.banner[data-segment="lab"]').should('exist')
      // cy.get('figure').should('exist')
      cy.get('.banner').within(() => {
        cy.get('h1').should('exist')
        cy.get('.date').should('not.exist')
        cy.get('.tags').should('exist')
      })
      cy.checkA11y('#page-banner')
    })
  })
})