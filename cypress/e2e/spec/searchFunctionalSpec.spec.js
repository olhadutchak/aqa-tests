class SearchFunctionalSpec{

    get searchField() { return cy.get('.MuiInputBase-input.MuiOutlinedInput-input.css-1pk1fka'); }
    get tracklist()   { return cy.get('#tracklist'); }
    
    constants = {
        searchText: 'summer',
    }

    clickSearchField(){
        this.searchField.click();
    }

    typeTextInSearchField(){
        this.searchField.type(this.constants.searchText);
    }

    checkAllItemsInTracklist() {
    this.tracklist.find('.MuiGrid-grid-xs-4').each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then((text) => {
          expect(text.toLowerCase()).to.include(this.constants.searchText.toLowerCase());
        });
    });
  }
}
export default new SearchFunctionalSpec()