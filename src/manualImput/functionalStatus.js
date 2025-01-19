// src/manualInput/functionalStatus.js

function separateFunctionalAndNonFunctional(cards) {
    const functionalCards = cards.filter(card => card.status === 'functional');
    const nonFunctionalCards = cards.filter(card => card.status !== 'functional');
    return {
        functionalCards,
        nonFunctionalCards
    };
}

module.exports = separateFunctionalAndNonFunctional;
