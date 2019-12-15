import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <div className="jumbotron">
        <h1 className="display-3">React Crud</h1>
        <p className="lead"> This is a simple hero unit, a simple jumbotron style component for calling extra attention</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container..</p>
        <p className="lead">
            <Link to="/products" className="btn btn-primary btn-lg" href="#" role="button"> Learn More</Link>
        </p>
    </div>
);

export default LandingPage;