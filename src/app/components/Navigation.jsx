import { Link } from 'react-router-dom';
import React, { Component } from 'react';
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

//add in redux so state constant while application is in use!!!!
//add in redux stuff to save state whilst application in use
//do the text file thing to load data when application starts
