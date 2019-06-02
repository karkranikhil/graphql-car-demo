let users=[{
    id:1,
    name:'John',
    cars:[1, 2]
},
{
    id:2,
    name:'Smith',
    cars:[]
},
{
    id:3,
    name:'Tom',
    cars:[3]
}]

let cars =[
    {
        id:1,
        make:'Ford',
        model:'Mustang',
        color:'red',
        ownedBy:1
    },
    {
        id:2,
        make:'Audi',
        model:'Audi350',
        color:'black',
        ownedBy:2
    },
    {
        id:3,
        make:'Maruti',
        model:'Swift',
        color:'white',
        ownedBy:3
    }
]

module.exports={
    users,
    cars
}