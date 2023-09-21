import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getClient = () => {
  const client = new ApolloClient({
    uri: process.env.API_URL,
    // uri: "https://dashboard.stepzen.com/explorer?endpoint=api%2Fhopping-buffalo",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
      //   Authorization:
      //     "apikey uluberiya::stepzen.net+1000::279e067644453c977d800037d428d5ae9dc98bee1931b0191ac905c67cf1ffb1",
    },
  });

  return client;
};
