import  { useState } from 'react'
import AddCategory from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
   
    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) return;

        // setCategories([...categories, "Valorant"]);
        setCategories(cat => [...cat, newCategory]);                                           

    }
    
  return (
    <>
        {/*TITULO */}
        <h1>GifExpertApp</h1> 

        {/* INPUT */}
        <AddCategory
            onNewCategory={ value => onAddCategory(value) }
            //  setCategories={setCategories}
        />
        
        {/* LISTADO DE GIF */}
        <ol>
            {categories.map( (category) => {
                return <li key={category}>{category}</li>
            })}
        </ol>
            {/* GIF ITEM */}
    </>
  )
}

export default GifExpertApp;
