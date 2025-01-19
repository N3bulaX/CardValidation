// src/manualInput/cardDataSeparator.js

function separateCards(cardData) {
    const debitCards = cardData.filter(card => card.type === 'DEBIT');
    const creditCards = cardData.filter(card => card.type === 'CREDIT');
    return {
        debitCards,
        creditCards
    };
}

module.exports = separateCards;
