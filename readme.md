## GraphQL
It is a Query language for an API. It means you can specify in your application what part of your data structure you want to import and use within the application.
* Get the data you need exactly.
* Uses a type system


      type Query{
         employees:[Employee]
         employee(empid:ID!)Employee
      }

      type Employee{
         empid:ID
         fname:String!
         lname:String!
         email:String!
      }

## Schemas and Types
* Schema also referred as Type Definitions (type defs)
* Specifies the available data for reading/writing

### It has a mandatory Query type that defines what to query for.

* a) Type specifies the type for a given field like String, Int, Boolean etc.
* b) Custom types can be used
* c) Exclamation mark: non-nullable field
* d) ID - internal identifies (mainly used for caching)

## Resolver 
It's a function that defines where the data is coming from.Each top level Query type needs a resolver

### It works with four parameters
* 1) object - contain the result on the parent
* 2) Args - argument mentioned in Query like empid
* 3) Context - An object share by all resolvers - helpful in authentication
* 4) Info - contains execution information


## Query
It return data based on the Schema and the resolver


## Graphql JS based implementation
1. Relay
2. Apollo
3. FetchQL
4. Express-graphql
5. Graphql-sequelize


## gql 
It allow us to create a scheme using JS es6 template literal syntax

## Relationship between types using graphql
Suppose we have Car query and User query then we have to make a relationship between these two queries like Each user belong to car and car belong to user

## Mutation 
If you want to update the data using Graphql we called it as mutation. It is a buil in data type

## Queries used


      {

         /* get all users name*/
         users{
            name
         }
         /* get users name and car make using id*/
         user(id:1){
            name
            car{
               make
            }
         }
         /* get car make and owner name using id*/
         car(id:1){
            make
            owner{
               name
            }
         }
         /* get cars make, model and owner name */
         cars{
            make
            model
            owner{
               name
            }
         }
         /* Mutation to make user*/
         mutation{
         makeUser(id:4,name:"nikhil"){
            name
         }
         }
         /* Mutation to create car*/
         mutation{
         createCar(id:4, make:"Toyota",model:"Etios", color:"Black"){
            make
         }
         }
         /* Mutation to remove user based on ID*/
         mutation{
         removeUser(id:4)
         }

         /* Mutation to remove car based on ID*/
         mutation{
         removeCar(id:3)
         }

      }