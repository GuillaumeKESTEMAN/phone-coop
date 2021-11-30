import React from 'react';
import Title from "./title";
import renderer from 'react-test-renderer';

describe("Title", () => {
  test("should work", () => {
    const rendered = renderer
      .create(<Title level={1}>Title test</Title>)
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
