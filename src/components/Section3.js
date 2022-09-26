import React from 'react';

const Section3 = ({about}) => {
  return (<>
  {about.length>0 && <section className='bg-dark text-light p-5'>
    <div className='container'>
        <div className='d-flex dddd'>
            <h1 className='texting text-warning'>{about[0].name}</h1>
            <p className='lead'>
                {about[0].title}
            </p>
            <p className='lead text-warning'>
                {about[0].body}
            </p>

        </div>

    </div>

   </section>}
   </>
  );
}

export default Section3;
