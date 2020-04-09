import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Navigation = () =>(
    <div>
    <Link to="/">
        <h1>
        Media Organiser
        </h1>
    </Link>
</div>
);

export const ConnectedNavigation = connect(state=>state)(Navigation);

