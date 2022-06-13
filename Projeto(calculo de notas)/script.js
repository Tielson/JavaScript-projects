const students = [
  {
    name: "Julia",
    noteOne: 9.5,
    noteTwo: 8.3
  },
  {
    name: "Mateus",
    noteOne: 6.2,
    noteTwo: 7.1,
  },
  {
    name: "Carlos",
    noteOne: 5.7,
    noteTwo: 9.8,
  },
  {
    name: "Larissa",
    noteOne: 8.7,
    noteTwo: 7.9,
  }
]

function printStudents(student) {
  let average = (student.noteOne+student.noteTwo)/2

    if (average >= 7) {
      alert(`A media do(a) aluno(a) ${student.name} é: ${average}
      Parabéns! ${student.name} você foi aprovado(a) no curso.`)
    }
    else {
      alert(`A media do(a) aluno(a) ${student.name} é: ${average}
      Não foi dessa vez, ${student.name}! Tente novamente.`)
    }
}

for(let student of students){
  printStudents(student)
}




