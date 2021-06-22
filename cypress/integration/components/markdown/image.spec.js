describe('remark images', () => {
  beforeEach(() => {
    cy.visit('/styles', { timeout: 15000 })
    cy.injectAxe()
  })

  it('renders the correct attributes', () => {
    cy.get('#images').scrollIntoView()
    cy.get('#images').within(() => {
      cy.get('img').eq(0)
      .should('have.attr', 'alt', 'alt')
      .should('have.attr', 'title', 'title')
    })

    cy.get('#figures').scrollIntoView()
    cy.get('#figures').within(() => {
      cy.get('figure').eq(0).find('img')
      .should('have.attr', 'alt', 'alt')
      .should('have.attr', 'title', 'title')
    })

    cy.checkA11y('#images')
  })

  describe('image transformations', () => {
    it('adds query params to images', () => {
      cy.get('#images').scrollIntoView()
      cy.get('#images').within(() => {
        cy.get('img').eq(0)
        .should('have.attr', 'src', '/images/site-assets/placeholders/jpeg.jpg?nf_resize=fit&w=500')
        .should('have.attr', 'srcset', '/images/site-assets/placeholders/jpeg.jpg?nf_resize=fit&w=500 500w, /images/site-assets/placeholders/jpeg.jpg?nf_resize=fit&w=800 800w')
      })

      cy.get('#figures').scrollIntoView()
      cy.get('#figures').within(() => {
        cy.get('figure').eq(0).find('img')
        .should('have.attr', 'src', '/images/site-assets/placeholders/jpeg.jpg?nf_resize=fit&w=500')
        .should('have.attr', 'srcset', '/images/site-assets/placeholders/jpeg.jpg?nf_resize=fit&w=500 500w, /images/site-assets/placeholders/jpeg.jpg?nf_resize=fit&w=800 800w')
      })
    })

    it('does not add query params to gifs', () => {
      cy.get('#gifs').scrollIntoView()
      cy.get('#gifs').within(() => {
        cy.get('img').eq(0).should('have.attr', 'src', '/images/site-assets/placeholders/gif.gif')
      })
    })
  })

  describe('render sizes and alignments', () => {
    context('at smaller screen sizes', () => {
      beforeEach(() => {
        cy.viewport(550, 600)
      })
  
      it('renders imgs', () => {
        cy.get('#images').scrollIntoView()
        cy.get('#images').within(() => {
          // full
          cy.get('img[data-align="full"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          // left
          cy.get('img[data-align="left"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          // right
          cy.get('img[data-align="right"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          // center
          cy.get('img[data-align="center"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          // left small
          cy.get('img[data-align="left"][data-small="true"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          // right small
          cy.get('img[data-align="right"][data-small="true"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          // center small
          cy.get('img[data-align="center"][data-small="true"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
        })
      })

      it('renders figures', () => {
        cy.get('#figures').scrollIntoView()
        cy.get('#figures').within(() => {
          // full
          cy.get('figure[data-align="full"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          .find('figcaption').contains('this is a full width image')
          // left
          cy.get('figure[data-align="left"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          .find('figcaption').contains('this is a left aligned image')
          // right
          cy.get('figure[data-align="right"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          .find('figcaption').contains('this is a right aligned image')
          // center
          cy.get('figure[data-align="center"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          .find('figcaption').contains('this is a center aligned image')
          // left small
          cy.get('figure[data-align="left"][data-small="true"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          .find('figcaption').contains('this is a left aligned, small image')
          // right small
          cy.get('figure[data-align="right"][data-small="true"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          .find('figcaption').contains('this is a right aligned, small image')
          // center small
          cy.get('figure[data-align="center"][data-small="true"]').should(() => {
            'have.css', 'width', '526px' || 'have.css', 'width', '511px'
          })
          .find('figcaption').contains('this is a center aligned, small image')
        })
      })
    })
  
    context('at larger screen sizes', () => {
      beforeEach(() => {
        cy.viewport(1000, 600)
      })
  
      it('renders imgs', () => {
        cy.get('#images').scrollIntoView()
        cy.get('#images').within(() => {
          // full
          cy.get('img[data-align="full"]').should('have.css', 'width', '732px')
          // left
          cy.get('img[data-align="left"]').should('have.css', 'width', '366px', 'float', 'left')
          // right
          cy.get('img[data-align="right"]').should('have.css', 'width', '366px', 'float', 'right')
          // center
          cy.get('img[data-align="center"]').should('have.css', 'width', '366px', 'margin-left', '222px', 'margin-right', '222px')
          // left small
          cy.get('img[data-align="left"][data-small="true"]').should('have.css', 'width', '180px')
          // right small
          cy.get('img[data-align="right"][data-small="true"]').should('have.css', 'width', '180px')
          // center small
          cy.get('img[data-align="center"][data-small="true"]').should('have.css', 'width', '180px', 'margin-left', '222px', 'margin-right', '222px')
        })
        cy.checkA11y('#images')
      })

      it('renders figures', () => {
        cy.get('#figures').scrollIntoView()
        cy.get('#figures').within(() => {
          // full
          cy.get('figure[data-align="full"]').should('have.css', 'width', '732px')
          .find('figcaption').contains('this is a full width image')
          // left
          cy.get('figure[data-align="left"]').should('have.css', 'width', '366px', 'float', 'left')
          .find('figcaption').contains('this is a left aligned image')
          // right
          cy.get('figure[data-align="right"]').should('have.css', 'width', '366px', 'float', 'right')
          .find('figcaption').contains('this is a right aligned image')
          // center
          cy.get('figure[data-align="center"]').should('have.css', 'width', '366px', 'margin-left', '222px', 'margin-right', '222px')
          .find('figcaption').contains('this is a center aligned image')
          // left small
          cy.get('figure[data-align="left"][data-small="true"]').should('have.css', 'width', '180px')
          .find('figcaption').contains('this is a left aligned, small image')
          // right small
          cy.get('figure[data-align="right"][data-small="true"]').should('have.css', 'width', '180px')
          .find('figcaption').contains('this is a right aligned, small image')
          // center small
          cy.get('figure[data-align="center"][data-small="true"]').should('have.css', 'width', '180px', 'margin-left', '222px', 'margin-right', '222px')
          .find('figcaption').contains('this is a center aligned, small image')
        })
      })
    })
  })  
})
