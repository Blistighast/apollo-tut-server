const { gql } = require('apollo-server')

const typeDefs = gql`

type Query {
  "Get Tracks array for homepage grid"
  tracksForHome: [Track!]!
  "get individual track"
  track(id: ID!): Track
}

type Mutation {
  "increments the views for a track by 1 when clicked on"
  incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
}

type IncrementTrackViewsResponse {
  "Similar to HTTP status code, represents status of mutation"
  code: Int!
  "indicates whether mutation was successful"
  success: Boolean!
  "human readable message for UI"
  message: String!
  "newly updated track after successful mutation"
  track: Track
}

"A Track is a group of modules that teach about specific topic"
type Track {
  id: ID!
  "Tracks title"
  title: String!
  "tracks author"
  author: Author!
  "tracks main illustration display in card"
  thumbnail: String
  "approximate length to complete in minutes"
  length: Int
  "number of modules in track"
  modulesCount: Int
  "complete description of track"
  description: String
  "views the track has had"
  numberOfViews: Int
  "tracks complete array of modules"
  modules: [Module!]!
}

"An individual module within a Track"
type Module {
  id: ID!
  "title given to the module"
  title: String!
  "approx length of module in minutes"
  length: Int
}

"An Author of a complete Track or Module"
type Author {
  id: ID!
  "authors first & last name"
  name: String!
  "authors profile picture url"
  photo: String
}
`;

module.exports = typeDefs;