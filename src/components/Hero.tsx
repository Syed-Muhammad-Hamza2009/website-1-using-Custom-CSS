import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className='hero' style={{backgroundImage: "url(bg.jpg)"}}>
           <div>
            <h1 className="fade-in">Welcome to Watch Hub</h1>
            <p>Your one-stop shop for the best watches</p>
            <button>Shop Now</button>
            </div>        
        </section>
    </div>
  )
}

export default Hero

