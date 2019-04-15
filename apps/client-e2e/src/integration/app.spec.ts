import { getGreeting } from '../support/app.po';

// import { ProjectStatus } from '../../../../libs/models/src/index'; // WORKS
import { ProjectStatus } from '@project/models'; // DOESN'T WORK

describe('Hello Nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to client!');
  });

  it('should show status 0', () => {
    cy.get('h3').contains(ProjectStatus.new);
  });
});
