let students = [
  { codigo:   '20133',
    name:     'Susan',
    apellido: 'Asade',
    ciclo:    '7'
  },
  { codigo:'20131',
    name: 'Fernando',
    apellido: 'Canales',
    ciclo:    '4'
  },
  { codigo:'20131',
    name: 'Alexys',
    apellido: 'Quiroz',
    ciclo:    '4'
  },
  { codigo:'20134',
    name: 'Eduardo',
    apellido: 'Segura',
    ciclo:    '3'
  },
  { codigo:'20133',
    name: 'Alejandro',
    apellido: 'Fernandez',
    ciclo:    '4'
  },
  { codigo:'20135',
    name: 'Sofia',
    apellido: 'Rodriguez',
    ciclo:    '10'
  }
];

let ciclos = [
  {
    ciclo:  '1',
    estudiantes:  '0'
  },
  {
    ciclo:  '2',
    estudiantes:  '0'
  },
  {
    ciclo:  '3',
    estudiantes:  '0'
  },
  {
    ciclo:  '4',
    estudiantes:  '0'
  },
  {
    ciclo:  '5',
    estudiantes:  '0'
  },
  {
    ciclo:  '6',
    estudiantes:  '0'
  },
  {
    ciclo:  '7',
    estudiantes:  '0'
  },
  {
    ciclo:  '8',
    estudiantes:  '0'
  },
  {
    ciclo:  '9',
    estudiantes:  '0'
  },
  {
    ciclo:  '10',
    estudiantes:  '0'
  },
];

students.forEach(function(item, index){
  /*for(i=0; i < ciclos.length; i++){
    if(item.ciclo == ciclos[i].ciclo){
      ciclos[i].estudiantes++;
    }
  }*/
  ciclos[item.ciclo-1].estudiantes++;
});

console.log("\nEstudiantes por ciclo:\n");
console.log("| Ciclo | Cant. de Estudiantes\t|");
console.log("---------------------------------");

ciclos.forEach(
  function(item, index){
    console.log("|  " + item.ciclo + "\t| \t" + item.estudiantes + "\t\t|");
  });
