const resolvers = {
  Query: {
    // returns an array of tracks that will be used to populate
    // the homepage grid of web client
    tracksForHome: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getTracksForHome()
    },
    // get a single track by id, for the Tracks page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id)
    }
  },

  Mutation: {
    //increments a tracks numberOfViews property
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id)
  
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track
        }
        
      } catch(err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        }
      }
    }
  },

  Track: {
    //get author of track
    author: ({authorId}, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId)
    },
    //get module in track
    modules: ({ id }, _, {dataSources}) => {
      return dataSources.trackAPI.getTrackModules(id)
    }
  }
}

module.exports = resolvers