import React from 'react'

const Todos = ({ data, deleteTodo }) => {
  return (
    <>
      <div className="container">

        <div className='row'>


          {
            data.map(
              (data) => {
                return (
                  <>
                    <div className='App container my-3 col-sm-4 col-lg-4' key={data.id}>
                      <div className="card text-bg-warning mb-3 " style={{ maxWidth: '18rem' }}>
                        <div className="card-header">{data.title}</div>
                        <div className="card-body">

                          <p className="card-text">{data.description}</p>
                          <button
                            onClick={() => deleteTodo(data.id)}
                            className="btn btn-danger">Delete</button>
                        </div>
                      </div> </div>

                  </>
                )
              }
            )
          }
        </div >
      </div>

    </>
  )
}

export default Todos