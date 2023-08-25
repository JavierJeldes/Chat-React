import React from 'react'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <div className='searchForm'>
        <input type='text' placeholder='Encontrar Usuario'/>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/15471913/pexels-photo-15471913/free-photo-of-mar-playa-arena-saludar.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt=''/>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar