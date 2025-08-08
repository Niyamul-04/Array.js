const numbers = [2, 4, 6, 78, 9];
const players = [{}, {}, {}];
const employees = [
    {name: 'rakib', designation: 'content writer', salary: 34000},
    {name: 'nakib', designation: 'singer', salary: 54000},
    {name: 'lakib', designation: ' book writer', salary: 454000}
]
employees[0].name = 'Ashraf'
// console.log(players);
// console.log(numbers);
// console.log(employees[1].salary);


for(const emp of employees){
    const person = emp;
    const personInfo = person.name + ' :' + person.salary;
    console.log(personInfo)
}