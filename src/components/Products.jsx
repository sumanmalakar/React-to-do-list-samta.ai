import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({ items }) => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const style = items.length === 1 ? 'col-md-12 col-lg-12 col-sm-12' : 'col-md-6 col-sm-12 col-lg-4 my-3';

  return (
    <>
      <div className="container my-3 text-center d-flex justify-content-center align-item-center">
        <div className="row center">

          {
            items.map((data) => {
              return (
                <div key={data.id} className={style}>
                  <Link to={`/category/${data.id}`} style={{ textDecoration: 'none' }}>
                    <div className="card" style={{ maxWidth: '18rem' }}>
                      <div className='d-flex justify-content-center align-item-center'>

                        <img className="card-img-top" src={data.imgSrc} alt="img"
                        //   style={{width:'70%'}}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        <button className="btn btn-warning mx-3">{data.price} ₹</button>

                        <button onClick={() => openInNewTab(`${data.amazonLink}`)} className="btn btn-primary">Buy Now</button>


                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }


        </div>
      </div>
    </>
  )
}

export default Products