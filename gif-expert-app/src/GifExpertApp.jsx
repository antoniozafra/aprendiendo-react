import  { useState } from 'react'
import AddCategory from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
   
    const onAddCategory = () => {

    // setCategories([...categories, "Valorant"]);
    setCategories(cat => [...cat, 'Valorant']);                                           

    }
    
  return (
    <>
        {/*TITULO */}
        <h1>GifExpertApp</h1> 

        {/* INPUT */}
        <AddCategory/>
        
        {/* LISTADO DE GIF */}
        <ol>
            {categories.map(category => {
                return <li key={category}>{category}</li>
            })}
        </ol>
            {/* GIF ITEM */}
    </>
  )
}

export default GifExpertApp;
