
// $.get('/randomWord')
//     .then(function (word) {
//         console.log(word)
//     })
// $.get('/sentiment/Ploy')
//     .then(function (sentiment) {
//         console.log(sentiment)
//     })

// const printResults = function (word, synonyms, sentiment) {
//     console.log(`
//         The word ${word} has a 
//         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//         its synonyms are: ${synonyms}`
//     )
// }

// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 printResults(word, results[0], results[1])
//             })
//     })

// $.get('/randomWord')
//     .then(function (word) {
//         console.log(word)
//         return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
//     })
//     .then(function (randomBook) {
//         console.log(randomBook);
//     })

const printRandom = function (word, book, gif) {
    $("body").append(word)
    $("body").append(book)
    $("body").append(gif)
}

$.get('/randomword')
    .then(function (word) {
        let book = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        let gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`)
        Promise.all([book, gif])
            .then(function (result) {
                console.log(result[0], result[1]);
                printRandom(word, result[0], result[1])
            })
    })
// $.get('/randomWord')
//     .then(function (word) {
//         console.log(word)
//         return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
//     })
//     .then(function (book) {
//         console.log(book);
//     })
