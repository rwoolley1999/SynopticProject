import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

export const Navigation = () =>(
    <div>
        {/* Creating header link that will be displayed on each page of application, linking back to the dashboard */}
    <Link to="/">
        <h1 class="link">
        Media Organiser
        </h1>
    </Link>
</div>
);

export const ConnectedNavigation = connect(state=>state)(Navigation);

