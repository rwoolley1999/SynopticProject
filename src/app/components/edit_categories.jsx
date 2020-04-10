import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';
import { history } from '../store/history';
import * as mutations from '../store/mutations';

export const EditCategories = ({
    id,
    category,
    categories,

    assignCategoryName,
    deleteCategory
}) => {
    return (
        <div>
            <div>
                {/* Input box to assign catefory name */}
                <input onChange={assignCategoryName} value={category.name} class="input" />
            </div>
            <div>
                <Router history={history}>
                    <Link to="/">
                        <button class="button">Done</button>
                    </Link>
                    <br></br>
                    <Link to="/">
                        <button onClick={() => deleteCategory(id)} class="button">Delete Category</button>
                    </Link>
                </Router>
            </div>
        </div>
    )
};



const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let category = state.categories.find(category => category.id === id);
    return {
        id,
        category
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.match.params.id;
    // const id = ownProps.id;
    return {
        assignCategoryName(e) {
            dispatch(mutations.assignCategoryName(id, e.target.value));
        },
        deleteCategory(id) {
            console.log("deleting category", id);
            dispatch(mutations.deleteCategory(id));
        }
    }
}

export const ConnectedEditCategories = connect(mapStateToProps, mapDispatchToProps)(EditCategories);