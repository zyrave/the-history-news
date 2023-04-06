import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import { resolvers } from './resolvers';
import { typeDefs } from './schemas';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

const startServer = apolloServer.start();

export default async function handler(req: any, res: any) {
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

export const config = {
  api: {
    bodyParser: false
  }
};
