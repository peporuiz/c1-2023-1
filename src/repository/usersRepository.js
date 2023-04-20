import dataset from '../dataset/users_info.json'

exports.getUsersFromDataset = () => {
    return dataset
}


exports.getUsersName = (name) => {
    let usersArray = []
    name=name.toLowerCase()
    dataset.forEach(dataset => {   
       if((dataset['name'].toLowerCase()).includes(name)){
            usersArray.push(dataset)  
        }
    })
    const ageOrder = usersArray.sort((name1, name2) => 
    (name1.age >= name2.age) ? 1 : (name1.age < name2.age) ? -1:0);
   if (ageOrder.length<1){ 
        return -1 
    }
    else{   
        return ageOrder 
    }
 }

 exports.searchUser = (age, name, gender, company, isActive) => {
    let usersArray = []
    name=name.toLowerCase()
    dataset.forEach(dataset => {   
       if((dataset['name'].toLowerCase()).includes(name)){
            usersArray.push(dataset)  
        }
        else if((dataset['age']).includes(age)){
            usersArray.push(dataset)  
        }
    })  
    return usersArray
}