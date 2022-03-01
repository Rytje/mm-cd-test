import React from 'react';
import NavigationBar from './NavigationBar';
import Content from './Content';
import { Container } from 'react-bootstrap';

export default function Homepage() {
  return (
    <Container fluid>
      <header>
        <nav>
          <NavigationBar />
        </nav>
      </header>
      <main>
        <Content />
      </main>
    </Container>
  )
}