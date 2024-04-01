import '../styles.css'

export const DeleteCategory = ({onDeleteCategory,category})=>{
    return(
        <button className="DeleteCategoryButton" onClick={()=>{onDeleteCategory(category)}}>x</button>
    )
}