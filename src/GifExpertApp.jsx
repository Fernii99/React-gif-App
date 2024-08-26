import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Game of Thrones'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory])
    }

  return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) }
         />

        <ol>
            {categories.map((category) => <li key={category}> { category } </li> )}
        </ol>

    
    </>
  )
}
