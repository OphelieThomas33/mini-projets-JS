// JSON.stringify => transformer du JS en JSON
const fields = [
    {
      id: 2,
      label: "Terrain de foot",
      area: 200
    },
    {
      id: 5,
      label: "Terrain de rugby",
      area: null
    }
  ]
  
  const data = {
    stadium: {
      id: 18,
      label: "Stade de France",
      fields: fields
    }
  }
  
  const json = JSON.stringify(data);
  console.log(json);


  const object = {
    today: new Date(),
  };
  
  const jsonObject = JSON.stringify(object);
  
  console.log(object.today);
  console.log(jsonObject);


// JSON.parse() => transformer du JSON en JS
const json1 = '{"stadium":{"id":18,"label":"Stade de France","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby","area":null}]}}';
const data1 = JSON.parse(json1);

console.log(data1.stadium.id);    // affiche la valeur de l'attribut id de l'objet contenu dans l'attribut stadium de l'objet obtenu, c'est-à-dire 18.



// Exercice :
const students = [
    {
      name: 'Paul',
      age: 15,
      scores: [
        {matiere: 'Maths', note: 10},
        {matiere: 'Français', note: 12},
        {matiere: 'Anglais', note: 14},
      ]
    }, 
    {
      name: 'Marie',
      age: 14,
      scores: [
        {matiere: 'Maths', note: 15},
        {matiere: 'Français', note: 9},
        {matiere: 'Anglais', note: 10},
      ]
    },
]

const studentsJson = JSON.stringify(students)
console.log(studentsJson)


const newStudents = JSON.parse(studentsJson)
console.log(newStudents[0].name)