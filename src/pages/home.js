import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <h1 className="display-1">Home Page</h1>

      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus nunc nec diam ultricies, ac dictum lectus rutrum. Donec ac lorem vitae est elementum rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent facilisis lacus ac sagittis laoreet. Mauris posuere fringilla odio, id convallis felis viverra non. Nunc at arcu cursus, feugiat sapien sit amet, bibendum tortor. In sagittis nisl scelerisque dolor sodales elementum. Integer lacus ipsum, feugiat ut tellus quis, accumsan placerat magna.</p>
    </Fragment>
  );
}

export default Home;
