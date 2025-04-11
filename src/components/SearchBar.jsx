import React from 'react'
import { useState } from 'react'




const SearchBar = ({onSearch}) => {

          const [city,setCity]=useState('');

          const handleSubmit=(e)=>{

                    e.preventDefault();
                    onSearch(city);
                    setCity(''); // Clear the input field after submission
          }




  return (
   <form  onSubmit={handleSubmit} className='mb-4'>
          <div className='input-group' >
                    <input
                        type='text'
                        value={city}
                        onChange={(e)=> setCity(e.target.value)}
                        className='form-control'
                        placeholder='Enter city...'
                        required
                      
                    />
                    <button type='submit' className='btn btn-primary'>
                              Search
                    </button>
          </div>
    
   </form>
  )
}

export default SearchBar