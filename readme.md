GraphQL
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

Schemas and Types
Schema also referred as Type Definitions (type defs)and 
Specifies the available data for reading/writing

It has a mandatory Query type that defines what to query for.

a) Type specifies the type for a given field like String, Int, Boolean etc.
b) Custom types can be used
c) Exclamation mark: non-nullable field
d) ID - internal identifies (mainly used for caching)

Resolver - It's a function that defines where the data is coming from.Each top level Query type needs a resolver

It works with four parameters
1) object - contain the result on the parent
2) Args - argument mentioned in Query like empid
3) Context - An object share by all resolvers - helpful in authentication
4) Info - contains execution information


Query
return data based on the Schema and the resolver


Graphql JS based implementation
1. Relay
2. Apollo
3. FetchQL
4. Express-graphql
5. Graphql-sequelize
---

gql - It allow us to create a scheme using JS es6 template literal syntax