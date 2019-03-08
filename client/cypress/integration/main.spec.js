describe('Dev Hamburg Health', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Patienten Profil', () => {
    it('has the correct title', () => {
      cy.title().should('include', 'Dev Hamburg Health')
    })

    it('shows the correct header text', () => {
      cy.get('div').should('contain', 'Patienten Profil')
    })

    it('Dev Hamburg Logo', () => {
      it('has the correct logo', () => {
        cy.visit('http://localhost:3000')
        cy.get('nav > a[href="/create-patient-profile"]')
          .contains('Kampagne')
          .click()
      })
    })
  })
})

describe('Patient anlegen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('nav > a')
      .contains(' Patienten anlegen')
      .click()
  })

  it('has the right path', () => {
    cy.location('pathname').should('include', 'create-patient-profile')
  })

  it('has a complete form', () => {
    cy.get('form').should('have.length', 1)
    cy.get('form > div > input').should('have.length', 11)
    cy.get('form > div > button').should('have.length', 1)
  })

  it('shows a card preview with age', () => {
    const testValue = 'This is the age'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('form > div > input[name="age"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('shows a card preview with gender', () => {
    const testValue = 'This is the gender'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('form > div > input[name="gender"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('shows a card preview with contact', () => {
    const testValue = 'This is the contact'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('form > div > input[name="contact"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('shows a card preview with findings', () => {
    const testValue = 'This is the finding'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('form > div > input[name="findings"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('shows a card preview with weight', () => {
    const testValue = 'This is the weight'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('form > div > input[name="weight"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('shows a card preview with height', () => {
    const testValue = 'This is the height'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('form > div > input[name="height"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('shows a card preview with blood type', () => {
    const testValue = 'This is the blood type'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('form > div > input[name="bloodType"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('shows a card preview with blood pressure', () => {
    const testValue = 'This is the blood pressure'
    cy.get('section')
      .contains(testValue)
      .should('have.length', 0)
    cy.get('form > div > input[name="bloodPressure"]').type(testValue)
    cy.get('section')
      .contains(testValue)
      .should('have.length', 1)
  })

  it('clears all inputs after submit', () => {
    cy.get('form > div > input[name="name"]').type('name')
    cy.get('form > div > input[name="surname"]').type('surname')
    cy.get('form > div > input[name="age"]').type('age')
    cy.get('form > div > input[name="gender"]').type('gender')
    cy.get('form > div > input[name="contact"]').type('contact')
    cy.get('form > div > input[name="findings"]').type('findings')
    cy.get('form > div > input[name="weight"]').type('weight')
    cy.get('form > div > input[name="height"]').type('height')
    cy.get('form > div > input[name="bloodType"]').type('bloodType')
    cy.get('form > div > input[name="bloodPressure"]').type('bloodPressure')

    cy.get('form > div > button').click()

    cy.get('form > div > input[name="name"]').should('have.value', '')
    cy.get('form > div > input[name="surname"]').should('have.value', '')
    cy.get('form > div > input[name="age"]').should('have.value', '')
    cy.get('form > div > input[name="gender"]').should('have.value', '')
    cy.get('form > div > input[name="contact"]').should('have.value', '')
    cy.get('form > div > input[name="findings"]').should('have.value', '')
    cy.get('form > div > input[name="weight"]').should('have.value', '')
    cy.get('form > div > input[name="height"]').should('have.value', '')
    cy.get('form > div > input[name="bloodType"]').should('have.value', '')
    cy.get('form > div > input[name="bloodPressure"]').should('have.value', '')
  })
})
