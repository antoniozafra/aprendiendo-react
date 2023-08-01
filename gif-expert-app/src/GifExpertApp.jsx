import  { useState } from 'react'


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
        <button onClick={onAddCategory}>Agregar</button>
        
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
