const studentData = [
    {
      rollNo: 1,
      name: "Alice",
      class: "10A",
      teacher: "Mr. Smith"
    },
    {
      rollNo: 2,
      name: "Bob",
      class: "10B",
      teacher: "Mrs. Johnson"
    },
    {
      rollNo: 3,
      name: "Charlie",
      class: "10C",
      teacher: "Ms. Davis"
    },
    {
      rollNo: 4,
      name: "David",
      class: "10A",
      teacher: "Mr. Smith"
    },
    {
      rollNo: 5,
      name: "Eve",
      class: "10B",
      teacher: "Mrs. Johnson"
    },
    {
      rollNo: 6,
      name: "Frank",
      class: "10C",
      teacher: "Ms. Davis"
    },
    {
      rollNo: 7,
      name: "Grace",
      class: "10A",
      teacher: "Mr. Smith"
    },
    {
      rollNo: 8,
      name: "Hank",
      class: "10B",
      teacher: "Mrs. Johnson"
    },
    {
      rollNo: 9,
      name: "Ivy",
      class: "10C",
      teacher: "Ms. Davis"
    },
    {
      rollNo: 10,
      name: "Jack",
      class: "10A",
      teacher: "Mr. Smith"
    }
  ];
  
let rolls=10;

let getData=studentData.filter((data)=>{
  return(data.rollNo==rolls)

})
console.log(getData)
  