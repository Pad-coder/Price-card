import { useState } from 'react'




function App() {
  let data=[{
    plan:"Free",
    price:"$0",
    service_data:[
      {
      status:true,
      service:"Single service",
      highlight:false
    },
    {
      status:true,
      service:"5GB Storage",
      highlight:false
    },
    {
      status:true,
      service:"Unlimited public projects",
      highlight:false
    },
    {
      status:true,
      service:"Community Access",
      highlight:false
    },
    {
      status:false,
      service:"Unlimited private projects",
      highlight:false
    },
    {
      status:false,
      service:"Dedication phone support",
      highlight:false
    },
    {
      status:false,
      service:"Free subdomine",
      highlight:false
    },
    {
      status:false,
      service:"Monthly status report",
      highlight:false
    }
  ]
  },
  {
    plan:"Plus",
    price:"$9",
    service_data:[
      {
      status:true,
      service:"5 service",
      highlight:true
    },
    {
      status:true,
      service:"50GB Storage",
      highlight:false
    },
    {
      status:true,
      service:"Unlimited public projects",
      highlight:false
    },
    {
      status:true,
      service:"Community Access",
      highlight:false
    },
    {
      status:true,
      service:"Unlimeted private projects",
      highlight:false
    },
    {
      status:true,
      service:"Dedication phone support",
      highlight:false
    },
    {
      status:true,
      service:"Free subdomine",
      highlight:false
    },
    {
      status:false,
      service:"Monthly status report",
      highlight:false
    }
  ]
  },
  {
    plan:"Pro",
    price:"$49",
    service_data:[
      {
      status:true,
      service:"Unlimited service",
      highlight:true
    },
    {
      status:true,
      service:"150GB Storage",
      highlight:false
    },
    {
      status:true,
      service:"Unlimited public projects",
      highlight:false
    },
    {
      status:true,
      service:"Community Access",
      highlight:false
    },
    {
      status:true,
      service:"Unlimited private projects",
      highlight:false
    },
    {
      status:true,
      service:"Dedication phone support",
      highlight:false
    },
    {
      status:true,
      service:"Unlimited Free subdomine",
      highlight:true
    },
    {
      status:true,
      service:"Monthly status report",
      highlight:false
    }
  ]
  },
  {
    plan:"Premium",
    price:"$89",
    service_data:[
      {
      status:true,
      service:"Unlimited service",
      highlight:true
    },
    {
      status:true,
      service:"1TB Storage",
      highlight:false
    },
    {
      status:true,
      service:"Unlimited public projects",
      highlight:false
    },
    {
      status:true,
      service:"Community Access",
      highlight:false
    },
    {
      status:true,
      service:"Unlimited private projects",
      highlight:false
    },
    {
      status:true,
      service:"Unlimited Free subdomine",
      highlight:true
    },
    {
      status:true,
      service:"Monthly status report",
      highlight:false
    },
    {
      status:true,
      service:"24/7 Customer Support",
      highlight:true
    },
    {
      status:true,
      service:"Personal Executive Support",
      highlight:true
    }
  ]
  }
   
  ]

  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">

          {
            data.map((e,i)=>{
              return <div className="col-lg-4" id="Card-Div" key={i}>
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">{e.plan}</h5>
                  <h6 className="card-price text-center">{e.price}<span className="period">/month</span></h6>
                  <hr />
                  {
                    e.service_data.map((list,i)=>{
                      return<ul className="fa-ul" key={i}>
                      <li className={list.status ? "" : "text-muted"}><span className="fa-li"><i className={list.status ? "fa-solid fa-check" : "fas fa-times"}></i></span>{list.highlight ? <strong>{list.service}</strong> : list.service}</li>
                    </ul>
                    })
                  }
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Buy Plan</a>
                  </div>
                </div>
              </div>
            </div>
            })
          } 
          </div>
        </div>
      </section>
    </>
  )
}

export default App



 {/* <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                  <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 services</strong></li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                      Reports</li>
                  </ul>
                  <div className="d-grid">


                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Pro Tier --> */}
            {/*<div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                  <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited services</strong>
                    </li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
                      Subdomains</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div> */}