import React from 'react';
import showcase from '../img/showcase.svg'

const Section1 = () => {
  return (
   <section className='bg-dark text-light p-5' id='sec'>
      <div className='container'>
     
        <div className="d-flex">
          <div>
            <h1>Become a <span class="text-warning"> Web Developer </span></h1>
            <p className="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <button
              className="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Start The Enrollment
            </button>
          </div>
          <img
            className="img-fluid w-50 d-none d-sm-block"
            src={showcase}
            alt="Loading.."
          />
        </div>

      </div>
   </section>
      
    
  );
}

export default Section1;
