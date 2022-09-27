import React from 'react';
import {Link} from 'react-router-dom'
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

const Navbar = () => {

const shareUrl = 'https://www.pakkamarwadi.tk/';
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
                <a href='#learn' className='nav-link'>What You'll learn</a>
            </li>
            <li className='nav-item'>
                <a href='#questions' className='nav-link'>Questions</a>
            </li>
            <li className='nav-item'>
                <a href='#instructors' className='nav-link'>Instructors</a>
            </li>
            <li className='nav-item'>
                <Link to='/about/#categories' className='nav-link'>Categories</Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-link'>About</Link>
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

export default Navbar;
