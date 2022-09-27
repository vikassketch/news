import React from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  InstapaperIcon,
  InstapaperShareButton,
} from 'react-share';

const Navbar3 = () => {
  const shareUrl = 'https://www.pakkamarwadi.tk/';
  const navigate=useNavigate()
  return (
    <div>
    <nav className='navbar navbar-expand-lg bg-primary fixed-top'>
      <div className='container'>
    <a href='#' className='navbar-brand'>Frontend Bootcamp</a>
     <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navmenu">
      <span className='navbar-toggler-icon'></span>

     </button>
    
      <div className='collapse  navbar-collapse' id="navmenu">
      <ul className='navbar-nav ms-auto'>
         
          <li className='nav-item'>
            
              <a className='nav-link' onClick={()=>{navigate('/news/Sports')}} style={{cursor:"pointer"}}>Sports</a>
          </li>
          <li className='nav-item'>
              <a className='nav-link' onClick={()=>{navigate('/news/Finance')}} style={{cursor:"pointer"}}>Finance</a>
          </li>
          <li className='nav-item'>
              <a className='nav-link' onClick={()=>{navigate('/news/Business')}} style={{cursor:"pointer"}}>Business</a>
          </li>
          <li className='nav-item'>
              <Link to='/' className='nav-link' >Home</Link>
          </li>
          <li className='nav-item'>
              <Link to='/about' className='nav-link' >About</Link>
          </li>
          <li className='nav-item'>

<i> <FacebookShareButton
            url={shareUrl}
            quote={'news paper live'}
            hashtag={'#Valorant'}
            style={{marginRight:"10px"}}
        >
            <FacebookIcon size={40} round={false} />
        </FacebookShareButton> 
</i>

</li>
<li className='nav-item'>
<i>  <WhatsappShareButton
            url={shareUrl}
            quote={'Title or jo bhi aapko likhna ho'}
            hashtag={'#portfolio...'}
            style={{marginRight:"10px"}}
        >
            <WhatsappIcon size={40} round={false} />
        </WhatsappShareButton>
        </i>

</li>
<li className='nav-item'>
<i>
            <TwitterShareButton
            url={shareUrl}
            quote={'Title or jo bhi aapko likhna ho'}
            hashtag={'#portfolio...'}
            style={{marginRight:"10px"}}
            >
                <TwitterIcon size={40} round={false}></TwitterIcon>
            </TwitterShareButton>
        </i>
</li>
<li className='nav-item'>
<i>
            < LineShareButton
               url={shareUrl}
               quote={'Title or jo bhi aapko likhna ho'}
               hashtag={'#portfolio...'}
               style={{marginRight:"10px"}}>
                <LineIcon size={40} round={false}></LineIcon>
            </LineShareButton>
        </i>

</li>
         
      </ul>
    
     </div>
     </div>
    </nav>
  </div>
  );
}

export default Navbar3;
