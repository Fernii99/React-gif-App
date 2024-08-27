import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
        <div key={category}>
            <h3>{category}</h3>
            { isLoading && ( <h2>Loading...</h2>) }
           <div className='card-grid'>
            { 
              images.map( gif => (
                  <GifItem  key={gif.id} {...gif} />
              ))
            }
           </div>
        </div>
    </>
  )
}
