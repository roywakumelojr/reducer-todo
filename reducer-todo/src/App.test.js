import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it ('renders', () => {
  const {asFragment} = render (<App text = 'Hello from the world of todos!' />);
  expect(asFragment()).toMatchSnapshot();
});

