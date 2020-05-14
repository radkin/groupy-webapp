import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
// Apollo requirements
import { ApolloProvider } from '@apollo/react-hooks';
import { createMockClient } from 'mock-apollo-client';
import { gql } from 'apollo-boost';
import * as queries from './graphql/queries';
import me from './data';

const meQuery = gql(queries.users.getMe.graphql);

const mockClient = createMockClient();
mockClient.setRequestHandler(
  meQuery,
  () => Promise.resolve({ me })
);

jest.mock("react-dom", () => ({ render: jest.fn() }));

// fake greeting that just shows the App
function Greeting() {
  return <App />;
}

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <ApolloProvider client={mockClient}>
        <Greeting />
      </ApolloProvider>,
      div
    );
  });
});
