import React, { useState } from 'react'
import Character from './Character';
import Pagination from './Pagination';
import useFetchData from './useFetchData';
import "./PaginationExample.css"



 function Main() {
  const {data} = useFetchData();
  const [currentPage,setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage 

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(data.length/itemsPerPage)
  return (
    <>
        <div>
          <div className='character-container'>
            {currentItems.map((character,index)=>(
              <Character character={character} key={index} />
            ))}
          </div>
          <Pagination nPages={nPages} currentPage ={currentPage} setCurrentPage ={setCurrentPage}/>
        </div>
    </>
  )
};
export default Main;