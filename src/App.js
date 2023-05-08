import React, { useState } from 'react'
import './App.css';




function App() {
  const [display, setDisplay] = useState(true);
  // const arscene = document.getElementById('arscene')
  
  // arscene.style.display="block"  
const Arscene = () => {
  setDisplay(false)
  const arscene = document.getElementById('arscene')
  arscene.style.display="block"  
 
}

  
  return (
    <>
   

        {/* //test */}
        { display &&   <div className="">
          <div className="">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card  text-white">
                  <div className="card-body milkybar-bg  p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <div className='px-1 py-3 
                        image' ><img src="https://s3-alpha-sig.figma.com/img/ae2c/6b42/e124d6fe544ba9131309028a86905ad2?Expires=1684108800&Signature=kqbInCIf4dPY6-2AO-DE3N2fwomkAnL5BBoOOrtTiUDfNjRA12YmFbkdzNhsYoN3V3M~ILm492GOVMTstS~Fk66Dql2XwzpfEZFxIeidsl7Fnnz93F2nL8l8vMTY4BznjgC4z-10SDRPzfy0eKVTjib0RRJYyOwRhpgY7Jy5~XwyK51evnibqBmKHAgDe9n1TCfXOCJdoqIuc6w2-w7Zyu3UqF-ucABdKPCaN74849q6QkJFevBzQKieQK5ei0Z8umR0XQwzLGhrF60Vo19mubQSI4iJbkaM-HmnMSmU8Us3sS6MTsiVgcGL782L66rSBk68WfS5Xvgk6z5YYG-tzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" height="230px" width="280px" alt='logo' /></div>
                      <div className="form-outline form-white mb-4 py-5">
                        <input type="text" placeholder='Enter Your Name' id="typeEmailX" className="form-control form-control-lg" />
                      </div>
                      <button className="btn btn-outline-light btn-lg px-5 text-dark px-3 py-3 " type="submit" onClick={()=>Arscene()} >Next</button>
                    </div>
                    <div className='px-0 '>
                    <p className="text-dark ">We are not Saving any personal details.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> }

            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card  text-white">
                  <div className="card-body milkybar-bg  p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <div className='px-1 justify-content-between 
                        image' ><img src="https://s3-alpha-sig.figma.com/img/ae2c/6b42/e124d6fe544ba9131309028a86905ad2?Expires=1684108800&Signature=kqbInCIf4dPY6-2AO-DE3N2fwomkAnL5BBoOOrtTiUDfNjRA12YmFbkdzNhsYoN3V3M~ILm492GOVMTstS~Fk66Dql2XwzpfEZFxIeidsl7Fnnz93F2nL8l8vMTY4BznjgC4z-10SDRPzfy0eKVTjib0RRJYyOwRhpgY7Jy5~XwyK51evnibqBmKHAgDe9n1TCfXOCJdoqIuc6w2-w7Zyu3UqF-ucABdKPCaN74849q6QkJFevBzQKieQK5ei0Z8umR0XQwzLGhrF60Vo19mubQSI4iJbkaM-HmnMSmU8Us3sS6MTsiVgcGL782L66rSBk68WfS5Xvgk6z5YYG-tzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" height="230px" width="280px" alt='logo' />
                         <img src='https://s3-alpha-sig.figma.com/img/8c36/3d08/f850d1a31459920f27bf9f06972c882f?Expires=1684108800&Signature=nJLpepaQc05JnxF1hLxmNYwxWRaa51AKt1XwEcSQTNEN4iCMUWUrt4KfLegtFN47FJ5JqrSB6hY6qvWAnX1u9rjM3G8hrZgMT1RZ3eIZ1o13-suV6NOzhXgShMwG3SQZh2EWvDOy-nLCP2mcHSSyqxD5bgrsS7W9xr25oh38ZVdZjYswUz~EHVCSQPYCGpnoDz4QuRYDcz050GfR3tW3~8ZcuPgBoEJqXEJBcZmUpLQ0L9CHNcC52IGB2f1FZUouDSKDkUow-juOEgINeEp6E7ZOJ6B48IoIeClRybXVEiV5yJ9fpGBc776L3QHHhWd~PyTsWNx7YUCWuXeO~4-jLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='info'/>
                        </div>
                      <div className="form-outline form-white mb-4 py-5">
                        <input type="text" placeholder='Enter Your Name' id="typeEmailX" className="form-control form-control-lg" />
                      </div>
                      <button className="btn btn-outline-light btn-lg px-5 text-dark px-3 py-3 " type="submit" >Start Exploration</button>
                    </div>
                    <div className='px-0 '>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
    </>
  );
}

export default App;
