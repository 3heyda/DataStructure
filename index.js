const mySchool = {
    classA:
    {
        classAinfo: {
            teacherName: 'Mrs. Amiri',
            numberOfStudent: 26
        },

        classAstudents: {
            student1: [
                studentName = 'sheyda',
                age = 20,
                finalScore = 99
            ]
        }
    },

    classB:
    {
        classBinfo: {
            teacherName: 'Mrs. Amiri',
            numberOfStudent: 26,

        },

        classBstudentsList: [
            student1 = {
                studentName: 'Shiva',
                age: 10,
                finalScore: 100
            },
            student2 = {
                studentName: 'Fatemeh',
                age: 28,
                finalScore: 99
            },
            student3 = {
                studentName: 'mahla',
                age: 18,
                finalScore: 90
            }
        ]


    }
}

console.info(mySchool);
console.log(student1);
console.log(student2.finalScore);
console.log(student3.studentName);

console.table(mySchool.classA.classAstudents)
console.table(mySchool.classB.classBstudentsList)