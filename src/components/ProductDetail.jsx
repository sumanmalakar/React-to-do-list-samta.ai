import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from './Products';


const ProductDetail = ({items}) => {
    const {id} = useParams();
    const [data, setData] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])

    
    useEffect(() => {
      const filterData = () =>{
        const singleProducts = items.filter(
            (product) => product.id == id
          );
          setData(singleProducts[0]);
      }
      filterData();


      const filterRelated = () =>{
        const relatedProducts = items.filter(
            (product) => product.category == data.category
          );
          setRelatedProducts(relatedProducts);
      }

      filterRelated();


    }, [id, data.category])

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
// console.log(relatedProducts);
  return (
   <>
   <div className="container center d-flex justify-content-center align-items-center g-5 my-3">
        <div className="img-fluid img-thumbnail d-flex justify-content-center align-items-center mx-5"style={{ width: "60%",}} >
          <img src={data.imgSrc} alt="" 
          style={{ width: "60%", height: "10%" }}
           />
        </div>
        <div className="content center">
          <div style={{ textAlign: 'center' }}>

            <h1>{data.title}</h1>
            <button className='btn btn-warning mx-3'>{data.price} ₹</button>
   <button onClick={() => openInNewTab(`${data.amazonLink}`)} className="btn btn-primary">Buy Now</button>

            <p className='my-3'>{data.description}</p>
          </div>

        </div>


      </div>
   <div className="text-center">
    <h1>Related Products</h1>
   </div>
<Products items={relatedProducts} />
      
   </>
  )
}

export default ProductDetail