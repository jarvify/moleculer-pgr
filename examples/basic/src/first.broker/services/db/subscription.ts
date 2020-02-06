import { makeExtendSchemaPlugin, gql } from 'graphile-utils';

export const nodeChangeTopicName = `postgraphile:node:change`;

export const NodeChangeSubscriptionPlugin = makeExtendSchemaPlugin(
  ({ pgSql: sql }) => ({
    typeDefs: gql`
      enum NodeChangeMutation {
          CREATE
          UPDATE
          DELETE
      }

      type NodeChangePayload {
        mutation: NodeChangeMutation!
        name: String!
        id: String!
      }
  
      extend type Subscription {
        nodeChange: NodeChangePayload @pgSubscription(topic: "${nodeChangeTopicName}" )
      }
    `,
    resolvers: {
      NodeChangePayload: {},
    },
  }),
);
