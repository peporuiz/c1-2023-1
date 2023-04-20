import dataset from '../dataset/users_info.json'

exports.getUsersFromDataset = () => {
    return dataset //Funcion que devuleve el dataset
}


exports.getUsersName = (name) => { //Método para imprimir los usuarios según nombre y edad
    let usersArray = []
    name=name.toLowerCase() //Pasamos el nombre a minúsculas para no tener conflictos
    dataset.forEach(dataset => {  //Uilizamos el forEach para ir incluyendo los usuarios en un nuevo array
       if((dataset['name'].toLowerCase()).includes(name)){ //Dicho nombre lo pasamos a minúsculas y lo incluimos
            usersArray.push(dataset)  //Actualizamos el nuevo array
        }
    })
    const ageOrder = usersArray.sort((name1, name2) => //Utilizamos la función sort para ordenar la edad según cada usuario
    (name1.age >= name2.age) ? 1 : (name1.age < name2.age) ? -1:0);
   if (ageOrder.length<1){ 
        return -1  //Si la longitud es menor que 1 devolvemos error
    }
    else{   
        return ageOrder //Devolvemos el array
    }
 }

 exports.searchUser = (age, name, gender, company, isActive) => {
    let usersArray = []
    name=name.toLowerCase()
    dataset.forEach(dataset => {  
       if(((dataset['name'].toLowerCase()).includes(name) && dataset['name'] != undefined)
       || ((dataset['age']==age) && dataset != undefined)
       || ((dataset['gender'].includes(gender)) && dataset['gender'] != undefined)
       || ((dataset['isActive']==isActive) && dataset['isActive'] != undefined)
       || ((dataset['company'].includes(company)) && dataset['company'] != undefined)
       ){
            usersArray.push(dataset)  
        }
    })  
    return usersArray

}