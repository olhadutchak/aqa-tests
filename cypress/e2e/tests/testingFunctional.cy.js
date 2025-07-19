import searchFunctionalSpec from "../spec/searchFunctionalSpec.spec";
import addingTrackSpec from "../spec/addingTrackSpec.spec";

describe('TESTING FUNCTIONAL', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    context('TESTING SEARCH FUNCTIONAITY', () => {

        it('Test the search input field for filtering the available track', () => {
            searchFunctionalSpec.clickSearchField();
            searchFunctionalSpec.typeTextInSearchField();
            searchFunctionalSpec.checkAllItemsInTracklist();
        });

    });

    context('TESTING ADD TRACK USING "+" BUTTON', () => {

        it('Test the ability to add a single track using the "+" button for a given track', () => {
            addingTrackSpec.extractFirstTrackInfo().then(() => {
                addingTrackSpec.clickAddButtonOnFirstTrack();
                addingTrackSpec.verifyTrackAddedToPlaylist();
            });
        });

    });

    context('TESTING VERIFY TOTAL DURATION OF THE PLAYLIST IN SECONDS', () => {

        it('Test that the total duration of all tracks in "Your Playlist" is accurately calculated and displayed in seconds', () => {
            addingTrackSpec.addNTracksToPlaylist(3); 
            addingTrackSpec.verifyTotalPlaylistDuration();
        });

    })
})
