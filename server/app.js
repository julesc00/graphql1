const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = require('./schema/schema')

const app = express()

const port = 4000

app.use("/graphql", graphqlHTTP({
 schema,
 graphiql: true
}))

 app.listen(`${port}`, () => {
  console.log(`Server is running on port ${port}`)
})
