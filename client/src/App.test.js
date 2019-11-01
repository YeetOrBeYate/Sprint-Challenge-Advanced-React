import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from "./Components/Card"
import {GetData} from "./hooks/GetData";
import * as rtl from "@testing-library/react";



it('renders without crashing', () => {
  
  const wrapper = rtl.render(<App/>);
});

it('loads the loading page', ()=>{
  const wrapper = rtl.render(<App/>);

  expect(wrapper.getByText(/loading.../));
})

it("renders the title of each card", ()=>{
  
  const wrapper = rtl.render(<Card/>);

  expect(wrapper.getAllByText(/^Name:$/))


})


