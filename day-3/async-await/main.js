const fetchData = function (surname) {
    Person.find({ lastName: surname }, function (err, people) {
        console.log(people)
    })
}
// below we can write the same, but with async/await

const fetchDatum = async function (surname) {
    let data = await Person.find({ lastName: surname })
    console.log(data)

}
