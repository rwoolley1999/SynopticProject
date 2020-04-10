import React from "react";
import { connect } from "react-redux";
import { ConnectedPlaylists } from "./playlists";
import { Link } from "react-router-dom";
import "../styles/components.css";

export const Dashboard = ({}) => (
    <div>
        <div class="column">
            {/* Link to categories list page */}
            <Link to={"/categories"} class="link">
                <div>
                    Categories
        </div>
            </Link>
            {/* Link to media files list page */}
            <Link to={"/mediafiles"} class="link">
                <div>
                    Media Files
            </div>
            </Link>
        </div>
        <h1>Playlists</h1>
        <ConnectedPlaylists />
    </div>
);

function mapStateToProps(state) {
    return {
        playlists: state.playlists
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
