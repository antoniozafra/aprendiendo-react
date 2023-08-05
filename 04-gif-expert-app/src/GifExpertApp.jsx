import  { useState } from 'react'
import {AddCategory, GifGrid} from './components';
// import GifGrid from './components/GifGrid';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Superman']);
   
    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) return;

        // setCategories([...categories, "Valorant"]);
        setCategories(cat => [ newCategory, ...cat]);                                           

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
