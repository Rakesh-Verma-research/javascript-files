// let student1 = {
//     firstName:"Rakesh",
//     lastName: "Verma",
//     age: 32,
//     class:12,
// }
function Student (first,last,age,cls,nationality){
    this.firstName = first;
    this.last = last;
    this.age = age;
    this.class = cls;
    this.nationality = nationality;
}

Student.prototype.religion = "Hindu"

let student1 = new Student("Rakesh","Verma", 25,12,"Indian");
let student2 = new Student("Nilotpal","Tripathi",8,2,"Indian");
let student3 = new Student("Vidya","Singh",14,9,"Indian");
let student4 = new Student ("Hardik","Singh",12,6, "Indian");



student1.sex = "male";
student2.sex = "male";



console.log(student1,student2,student3,student4)
console.log(student1.religion);