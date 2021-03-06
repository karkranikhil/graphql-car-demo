const resolvers = {
    Query:{
        cars:(parent, args, {models})=>models.cars,
        car:(parent, {id},{models})=>{
           const car = models.cars.filter(car=>car.id === id)
           return car[0]
        }
    },
    Car:{
        owner:(parent, args, {models}) =>models.users[parent.ownedBy - 1]
    },
    Mutation:{
        createCar:(parent,{id,make, model, color}, {models})=>{
            const car={
                id,
                make,
                model,
                color
            }
            models.cars.push(car)
            return car
        },
        removeCar:(parent,{id}, {models})=>{
           let found = false
           models.cars = models.cars.filter(car=>{
                if(car.id === id){
                    found=true
                } else {
                    return car
                }
            })
            if(found){
                return true
            } else {
                return false
            }
        }
    }
    
}
module.exports = resolvers