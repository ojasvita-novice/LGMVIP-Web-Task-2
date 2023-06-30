import React,{useState} from 'react'
import './test.css'



export default function Test() {

  const [data,setData] = useState([]);
  const [loading,setLoading]=useState(false);

  const fetchData = async () => {

    setLoading(true);
    await fetch("https://reqres.in/api/users?page=1").then((response) => {
      response.json().then((value) => {
        let jsonResponse = value.data;
        setData(jsonResponse);
        setLoading(false);

      }

      )
    })
  }


 
//   const render=()=>
//   {
//   <ul>
  
//      <li>{data}</li>

// </ul>
//    }

  console.log(data);
 
  return (

    <>
    <div className="container bckg" >

      <nav className="navbar navbar-light bg-secondary">
            <div className="container-fluid">
              <a className="navbar-brand">AUROR ENTERPRISES</a>
              <form className="d-flex"/>
                <button className="btn btn-outline-dark" onClick={fetchData}>Get Data</button>
             </div>

          </nav>
    
       

        
    <br/>
  
    {!loading && <ul>
     {
      data.map((value) =>
      
      (
        
        <div className="card mb-3 my-4 border border-dark border-3 rounded-1 mx-auto" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4 my-2 ">
            <img src={value.avatar} className="img-fluid rounded-start my-1 border border-secondary   border-2 " alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body bg-light">
              <div className="row">

                <input type="number" className="form-control mb-4 border-secondary" placeholder="ID" aria-label="ID" value={value.id} />

                <div className="row mb-4 ">
                  <div className="col">
                    <input type="text" className="form-control border-secondary" placeholder="First name" aria-label="First name" value={value.first_name} />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control border-secondary" placeholder="Last name" aria-label="Last name" value={value.last_name}  />
                  </div>
                </div>

                <input type="email" className="form-control border-secondary" placeholder="Email" aria-label="Email" value={value.email}/>
              </div>
            </div>

          </div>
        </div>
      </div>

    

      )
 
      )
     }

     </ul>  }
     {loading && <div class="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">

</div>}

     </div>
    </>
    
  )
}
