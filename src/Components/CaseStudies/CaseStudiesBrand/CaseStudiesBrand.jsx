import React,{ useState } from 'react'
import classes from './CaseStuidesBrand.module.css';

const CaseStudiesBrand = () => {

  const collabbrands=[
      {img:"https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FTrek%20Morocco.png?alt=media&token=1e740b4f-4c53-4aa2-ba19-15c1303edd09",
        client:"Client",
        clientdesc:"Trek Morocco Desert ",
        service:"Services",
        servicedesc:"SEO, Web Development"
      },
      {img:"https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FUK%20Go%20Shop.png?alt=media&token=ea5b7273-911f-4034-8088-efd089b2572d",
        client:"Client",
        clientdesc:"UKGoshop ",
        service:"Services",
        servicedesc:"SEO"
      },
      {img:"https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FAnni%20Mateo.png?alt=media&token=63262d20-2825-4b2e-88bb-d62e9f9a26eb",
        client:"Client",
        clientdesc:"Annimateo ",
        service:"Services",
        servicedesc:"SEO"
      },
      {img:"https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FLocal%20Morocco%20Tours.png?alt=media&token=913fca4d-a0dc-4546-8709-8e95d829ffb8",
        client:"Client",
        clientdesc:"Local MoroccoTours ",
        service:"Services",
        servicedesc:"SEO"
      },
      {img:"https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FMinmet%20Refractory.png?alt=media&token=d3e38536-d9a2-4ba3-b082-9a77b39f1bdb",
        client:"Client",
        clientdesc:"Minmet Refractory ",
        service:"Services",
        servicedesc:"SEO"
      },
      {img:"https://firebasestorage.googleapis.com/v0/b/loyaltty-prod-89ee9.firebasestorage.app/o/smarttly%2FHotel%20Lorven.png?alt=media&token=b415a0ba-e0f9-4149-afcc-add16041392b",
        client:"Client",
        clientdesc:"Lorven Hotels ",
        service:"Services",
        servicedesc:"SEO"
      },
    ]

    const itemsPerPage = 6; // Number of items per page
    const totalPages = Math.ceil(collabbrands.length / itemsPerPage); // Calculate total pages
    const [currentPage, setCurrentPage] = useState(1); // Current page state
  
    // Get current page data
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBrands = collabbrands.slice(startIndex, endIndex);
  
return (
  <div className={classes.collab}>
      <div>
        <div>Other Brands we have helped grow</div>
        </div>
        <div className={classes.collabbrand}>
            {currentBrands.map((data)=>
              <div className={classes.collabbranddata}>
                <div>
                  <img src={data.img} alt="img" style={{objectFit:'cover',backgroundPosition:'center',backgroundSize:"cover",borderRadius:'0.5rem'}} />
                </div>
                <div>
                  <div>
                    <p>{data.client}</p>
                    <p>{data.clientdesc}</p>
                  </div>
                  <div>
                    <p>{data.service}</p>
                    <p>{data.servicedesc}</p>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
)
}

export default CaseStudiesBrand
