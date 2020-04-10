import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { requestCategoryCreation } from "../store/mutations";

export const Categories = ({ name, id, categories, addNewCategory }) => (
    <div>
        <div>
            <h2>Categories</h2>
        </div>
        {/* Mapping to display user-added categories */}
        {categories.map(category => (
            <Link to={"/categories/" + category.id} key={category.id} class="link">
                <div id="categories">
                    {category.name}
                </div>
            </Link>
        ))}
        <button onClick={() => addNewCategory(id)} class="button">Add New Category</button>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.id;
    return {
        name: ownProps.name,
        id: id,
        categories: state.categories
    }
}

const mapDistpatchToProps = (dispatch, ownProps) => {
    return {
        addNewCategory(id) {
            console.log("Creating new category", id);
            dispatch(requestCategoryCreation(id));
        }
    }
}

export const ConnectedCategories = connect(mapStateToProps, mapDistpatchToProps)(Categories);
