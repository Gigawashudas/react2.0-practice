


import '../styles/header.css'
export default function Header({search, setSearch, isStockOnly, setIsStockOnly}) {
    return (

        

        <div className='header'>
            <input
            id='search' 
            className='searchInput'
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
            <div className='sortBtn'>
                <input 
                id="sort" 
                type="checkbox"
                checked={isStockOnly}
                onChange={e => setIsStockOnly(e.target.checked)} />
                <label htmlFor="sort">Only show products in stock</label>
            </div>
        </div>
    )
};