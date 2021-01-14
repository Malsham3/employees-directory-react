import React from 'react';
import Navigation from "./components/Navigation";
import Container from './components/Container'
import EmployeeList from './components/EmployeeList'


function App() {
  return (
    <Container>
    <Navigation />
    <EmployeeList />
    </Container>
  );
}

export default App;
