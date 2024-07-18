const { buildSchema } = require('graphql')
const _ = require('lodash')
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLFloat
} = require("graphql/type");

// Dummy data
let usersData = [
    { id: "1", name: 'Catherine', age: 1, job: "life", height: 1.5 },
    { id: "2", name: 'Jemimah', age: 2, job: "life", height: 1.5 },
    { id: "3", name: 'Charbel', age: 4, job: "life", height: 1.5 },
    { id: "4", name: 'Benito', age: 6, job: "life", height: 1.5 },
    { id: "5", name: 'Jules', age: 22, job: "life", height: 1.5 },
    { id: "6", name: 'Michele', age: 13, job: "life", height: 1.5 },
]

let hobbiesData = [
    { id: "7", title: 'Programming', description: 'Using computers to make the world a better place', userId: 1 },
    { id: "8", title: 'Rowing', description: 'Sweat and feel better before eating donuts', userId: 2 },
    { id: "9", title: 'Swimming', description: 'Get in the water and learn to become the water', userId: 3 },
    { id: "10", title: 'Fencing', description: 'A hobby for fencers', userId: 4 },
    { id: "11", title: 'Hiking', description: 'Get out of your couch and walk!', userId: 5 },
    { id: "12", title: 'Running', description: 'Get up and run!', userId: 6 },
]

// Create types
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user...',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        job: { type: GraphQLString },
        height: { type: GraphQLFloat },
    })
})

const HobbyType = new GraphQLObjectType({
    name: "Hobby",
    description: "Hobby description",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
    })
})

// Create RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Description',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(usersData, { id: args.id })
                // resolve with data
                // get and return data from a datasource
            }
        },
        hobby: {
            type: HobbyType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(hobbiesData, { id: args.id })
            }
        }
    }
})

// Create Schemas

module.exports = new GraphQLSchema({
    query: RootQuery
})
