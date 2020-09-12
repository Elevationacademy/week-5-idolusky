const mongoose = require('mongoose')
const { strict } = require('assert')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/mongoose-population', { useNewUrlParser: true, useUnifiedTopology: true })

const solarSystemSchema = new Schema({
    starName: String,
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})

const PlanetSchema = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: 'System' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
})

const visitorSchema = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})


const Planet = mongoose.model("Planet", PlanetSchema)
const System = mongoose.model("System", solarSystemSchema)
const Visitor = mongoose.model("Visitor", visitorSchema)



let s1 = new System({
    starName: "milkyWay",
    planets: []
})

let s2 = new System({
    starName: "chocolateWay",
    planets: []
})
let p1 = new Planet({
    name: "earth",
    system: s1,
    visitors: []
})

let p2 = new Planet({
    name: "mars",
    system: s2,
    visitors: []
})
let v1 = new Visitor({
    name: "ido",
    homePlanet: p1,
    visitedPlanets: []
})

let v2 = new Visitor({
    name: "shoobert",
    homePlanet: p2,
    visitedPlanets: []
})

let v3 = new Visitor({
    name: "e.t",
    homePlanet: p2,
    visitedPlanets: []
})
let v4 = new Visitor({
    name: "messi",
    homePlanet: p1,
    visitedPlanets: []
})

// v1.visitedPlanets.push(p1, p2)
// v2.visitedPlanets.push(p2)
// v3.visitedPlanets.push(p2)
// v4.visitedPlanets.push(p1)

// s1.planets.push(p1)
// s2.planets.push(p2)

// p1.visitors.push(v1, v4)
// p2.visitors.push(v1, v2, v3)

// const saveAll = [s1, s2, p1, p2, v1, v2, v3, v4]
// saveAll.forEach(x => x.save())

// Visitor.findOne({})
//     .populate("visitedPlanets")
//     .exec(function (err, planets) {
//         console.log(planets);
//     })

// Visitor.findOne({})
//     .populate("visitedPlanets")
//     .exec(function (err, visitor) {
//         visitor.visitedPlanets.forEach(vp => console.log(vp.name))
//     })    


// Planet.findOne({ name: "mars" })
//     .populate("visitors")
//     .exec(function (err, planet) {
//         planet.visitors.forEach(v => console.log(v.name))
//     })

// System.findOne({ starName: "chocolateWay" })
//     .populate({
//         path: "planets",
//         populate: { path: "visitors" }
//     })
//     .exec(function (err, system) {
//         for (planet of system.planets) {
//             planet.visitors.forEach(v => console.log(v.name))
//         }
//     })