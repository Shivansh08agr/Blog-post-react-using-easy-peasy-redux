import React from 'react'
import Feed from './Feed'
import {useStoreState} from 'easy-peasy'

const Home = ({isLoading, fetchError}) => {
  const searchResults = useStoreState(state=> state.searchResults);
  return (
    <main className='Home'>
      
      {!fetchError && isLoading && <p className='statusMsg'>Loading Posts...</p>}
      {!isLoading && fetchError && <p className= 'statusMsg' style={{color: "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length? 
        (<Feed posts = {searchResults}/>) : (
          <p className='statusMsg'>No Post to display</p>
        ))}
    </main>
  )
}

export default Home