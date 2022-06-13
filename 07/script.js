const patients = [
  {
    name: "Gabriel",
    age: 26,
    weigth: 90,
    heigth: 185
  },

  {
    name: "André",
    age: 24,
    weigth: 75,
    heigth: 172
  },
  {
    name: "Brunna",
    age: 19,
    weigth: 58,
    heigth: 165
  },

]

let patientName = []
let patientAge = []
let patientWeigth = []
let patientHeigth = []

for (let patient of patients) {
  patientName.push(patient.name)
}
alert(patientName)

for (let patient of patients) {
  patientAge.push(patient.age)
}
alert(patientAge)

for (let patient of patients) {
  patientWeigth.push(patient.weigth)
}
alert(patientWeigth)

for (let patient of patients) {
  patientHeigth.push(patient.heigth)
  }
  alert(patientHeigth)