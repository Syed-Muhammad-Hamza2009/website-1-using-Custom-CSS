import React from 'react'


const page = () => {

const watchData =[
  { id: 1, name: 'Rolex', price: 15000, description: 'Luxury watch', image: '/rolex.jpg' },
  { id: 2, name: 'Casio', price: 8000, description: 'Sporty design', image: '/casio.jpg' },
  { id: 3, name: 'Fastrack', price: 11000, description: 'Elegant timepiece', image: '/fastrack.jpg' },
  { id: 4, name: 'Fossil', price: 5000, description: 'Affordable and reliable', image: '/fossil.jpg' },
  { id: 5, name: 'Rado', price: 7000, description: 'Sporty and stylish', image: '/rado.jpg' },
  { id: 6, name: 'Titan', price: 6000, description: 'Smart Utility', image: '/titan.jpg' },
]

  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
          <div key={watch.id} className="watch-card">
             <img src={watch.image} alt={watch.name} />
             <h3>{watch.name}</h3>
             <p>{watch.description}</p>
             <div className='price'>${watch.price}</div>
             <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
