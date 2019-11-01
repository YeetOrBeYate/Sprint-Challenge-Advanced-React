import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from "./Components/Card"
import Title from "./Components/Title";
import {GetData} from "./hooks/GetData";
import * as rtl from "@testing-library/react";



it('renders without crashing', () => {
  
  const wrapper = rtl.render(<App/>);
});

it('loads the loading page', ()=>{
  const wrapper = rtl.render(<App/>);

  expect(wrapper.getByText(/loading.../));
})

it("renders the title of page", ()=>{
  
  const wrapper = rtl.render(<Title/>);

  


})

// it("renders the title of the first card", ()=>{
  
//   const wrapper = rtl.render(<Card/>);

//   expect(wrapper.getByText(/Name:Alex Morgan/))


// })

