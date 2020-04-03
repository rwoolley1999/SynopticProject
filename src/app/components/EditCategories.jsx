//CONVERT THIS INTO A MODAL IF HAVE TIME
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutations from '../store/mutations';

const EditCategories = ({
    id,
    category,
    categories,

    assignCategoryName,
    deleteCategory
})=>{
    return(
    <div>
        <div>
            <input onChange={assignCategoryName} value={category.name}/>
        </div>
        <div>
        <Link to="/">
            <button onClick={()=>deleteCategory(id)} value={category.id}>Delete Category</button>
        </Link>
        </div>
        <div>
            <Link to="/">
                <button>Done</button>
            </Link>
        </div>
    </div>
    )};
    


const mapStateToProps=(state, ownProps)=>{
    let id = ownProps.match.params.id;
    let category = state.categories.find(category=>category.id === id);

    return{
        id,
        category
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    const id = ownProps.match.params.id;
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