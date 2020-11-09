import React from 'react'


 const Navbar  = () => {
    return (
      <nav className='nav-wrapper grey darken-3 '>
        <div>
          <form className='form-inline'>
            <input className='form-control mr-sm-2' type='search' placeholder='Search' />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        

    )
}

export default Navbar