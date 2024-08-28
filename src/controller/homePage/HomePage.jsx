import React from 'react'
import "./HomePage.css"
import RealTimeStatus from './RealTimeStatus'
// import Mapbox from 


function HomePage() {
  const alerts = [
    { id: 1, message: 'High application load in Subdivision A', link: '/subdivision-a' },
    { id: 2, message: 'New certificate issuance policy update', link: '/policy-update' },
  ];
  

  const news = [
    { id: 1, title: 'System Update', description: 'New features added to the system.' },
    { id: 2, title: 'Maintenance Notice', description: 'Scheduled maintenance on 5th Sep.' },
  ];


  return (
    <div className='home'>
      <div className="announcement">
        <div className='latest'>
          <h4>Latest Update</h4>
        </div>
        <div className="marquee-container">
          <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
            <h4>
              {alerts.map((alert, index) => (
                <React.Fragment key={alert.id}>
                  <a href={alert.link}>
                    {alert.message}
                  </a>
                  {index < alerts.length - 1 && <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                </React.Fragment>
              ))}
            </h4>
          </marquee>
        </div>
      </div>



        {/* welcome section */}
          <div className="welcomeSection">
                <h1>Welcome to the Certificate Issuance System</h1>
                <p>Our system simplifies and streamlines the certificate 
                    issuance process, ensuring efficiency and transparency.
                </p>
            </div>

            <section className="quick-access">
              <h2>Quick Access</h2>
              <div className="links">
                <a href="/apply">Apply for a New Certificate</a>
                <a href="/status">Check Application Status</a>
                <a href="/dashboard">Go to Dashboard</a>
              </div>
            </section>



            {/* <section className="interactive-map">
              <h2>Subdivision Status Map</h2>
              <Mapbox />
            </section> */}


    </div>
  )
}

export default HomePage
