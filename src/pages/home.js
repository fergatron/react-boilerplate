import React from 'react';

import { Button, Jumbotron, PageHeader } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <PageHeader>Home Page</PageHeader>

      <Jumbotron>
        <h1>What can you do, World?</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus nunc nec diam ultricies, ac dictum lectus rutrum. Donec ac lorem vitae est elementum rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent facilisis lacus ac sagittis laoreet. Mauris posuere fringilla odio, id convallis felis viverra non. Nunc at arcu cursus, feugiat sapien sit amet, bibendum tortor. In sagittis nisl scelerisque dolor sodales elementum. Integer lacus ipsum, feugiat ut tellus quis, accumsan placerat magna.</p>
    </div>
  );
}

export default Home;
