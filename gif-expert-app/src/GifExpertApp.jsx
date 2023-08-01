import  { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Superman']);
   
    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) return;

        // setCategories([...categories, "Valorant"]);
        setCategories(cat => [...cat, newCategory]);                                           

    }
    
  return (
    <>
        <h1>GifExpertApp</h1> 

        <AddCategory
            onNewCategory={ value => onAddCategory(value) }
            //  setCategories={setCategories}
        />
        
        {
            categories.map( (category) =>(
                    <GifGrid key={category} category={category}/>  
                )
            )
        }
    </>
  )
}

export default GifExpertApp;
