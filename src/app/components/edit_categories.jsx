//CONVERT THIS INTO A MODAL IF HAVE TIME
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
})=>{
    return(
    <div>
        <div>
            <input onChange={assignCategoryName} value={category.name} class="input"/>
        </div>
        <div>
        <Router history={history}>
        <Link to="/">
            <button onClick={()=>deleteCategory(id)} class="button">Delete Category</button>
        </Link>
            <Link to="/">
                <button class="button">Done</button>
            </Link>
        </Router>
        </div>
    </div>
    )};
    


const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.match.params.id;
    // let id = ownProps.id;
    let category = state.categories.find(category=>category.id === id); 
    // let category = state.categories;
    //CHANGE BACK TO COMMENTED STUFF ONCE FINSIH TESTING 

    return{
        id,
        category
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    const id = ownProps.match.params.id;
    // const id = ownProps.id;
    return{
        assignCategoryName(e){
            dispatch(mutations.assignCategoryName(id, e.target.value));
        },
        deleteCategory(id){
            console.log("deleting category", id);
            dispatch(mutations.deleteCategory(id));
        }
    }
}

export const ConnectedEditCategories = connect(mapStateToProps, mapDispatchToProps)(EditCategories);