class addingTrackSpec {
    constructor()              { this._durationInSeconds = 0; 
                                 this._addedTrackName = ''; 
                                }
    get tracklist()            { return cy.get('#tracklist'); }
    get playlist()             { return cy.get('#playlist'); }
    get totalDurationElement() { return cy.contains('Total playlist tracks duration in seconds:').next(); }

    getFirstTrackElement() {
        return this.tracklist.find('.MuiGrid-root').first();
    }

    extractFirstTrackInfo() {
        return this.getFirstTrackElement().within(() => {
            cy.get('p')
                .not(':contains(":")')
                .invoke('text')
                .then((name) => {
                    this._addedTrackName = name.trim();
                })
        });
    }

    clickAddButtonOnFirstTrack() {
        return this.getFirstTrackElement().within(() => {
            cy.get('button').contains('+').click();
        });
    }

    verifyTrackAddedToPlaylist() {
        return this.playlist.find('p').should('have.length.at.least', 1).contains(this._addedTrackName).should('exist');
    }

    addNTracksToPlaylist(n) {
        this._addedTrackDurations = [];

        const addTrack = (index, total) => {
            if (index >= total) {
                return;
            }
            cy.get(`#tracklist > .MuiBox-root > :nth-child(${index + 1})`).within(() => {
                cy.get('p')
                    .contains(/^\d{2}:\d{2}$/)
                    .invoke('text')
                    .then((time) => {
                        const [min, sec] = time.split(':').map(Number);
                        this._addedTrackDurations.push(min * 60 + sec);
                    });

                cy.get('.MuiButton-root').click();
            });
            cy.wait(200).then(() => addTrack(index + 1, total));
        };

        addTrack(0, n);
    }

    calculateExpectedDurationFromPlaylist() {
        let totalSeconds = 0;

        return this.playlist.find('p').filter(':contains(":")').each(($el) => {
            const time = $el.text().trim(); 
            const [min, sec] = time.split(':').map(Number);
            totalSeconds += min * 60 + sec;
        }).then(() => totalSeconds);
    }

    verifyTotalPlaylistDuration() {
        this.calculateExpectedDurationFromPlaylist().then((expected) => {
            this.totalDurationElement.invoke('text').then((displayed) => {
                const displayedSeconds = parseInt(displayed);
                expect(displayedSeconds).to.eq(expected);
            });
        });
    }

}
export default new addingTrackSpec()