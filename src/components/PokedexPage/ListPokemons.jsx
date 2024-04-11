
import { useEffect, useState } from 'react'
import PokeCard from './PokeCard'

const ListPokemons = ({ pokemons, startIndex, endIndex, quantityPages, setPage, page }) => {

  const [blockPage, setBlockPage] = useState(1)
  const [pagesPerBlock, setPagesPerBlock] = useState(5)

  const initialPageBlock = (blockPage - 1) * pagesPerBlock
  const endPageBlock = initialPageBlock + pagesPerBlock

  useEffect(() => {
    const newBlock = Math.ceil(page / pagesPerBlock)
    if(newBlock !== blockPage) {
      setBlockPage(newBlock)
    }
  }, [page])

  const arrPages = []
  for(let i = 1; i <= quantityPages; i++) {
    arrPages.push(i)
  }

  const changePage = (pageNumber) => setPage(pageNumber)
  
  const handlePrev = () => {
    setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  return (
    <div>
      <ul className='listpoke-container gap-page'>
        <button className='listpoke_btn_prev' disabled={page === 1 && true} onClick={handlePrev}>&lt;</button>
        {
          arrPages.slice(initialPageBlock, endPageBlock).map(pageNumber => (
            <li className={`${pageNumber === page && 'active-page'}`} onClick={() => changePage(pageNumber)} key={pageNumber}>{pageNumber}</li>
          ))
        }
        <button className='listpoke_btn_next' disabled={page === quantityPages && true} onClick={handleNext}>&gt;</button>
      </ul>
      <div className='listpoke-container'>
        {
          pokemons?.slice(startIndex, endIndex).map(pokeInfo => (
            <PokeCard 
              key={pokeInfo.url}
              pokeInfo={pokeInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ListPokemons