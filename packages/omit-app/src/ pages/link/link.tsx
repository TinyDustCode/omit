import { useEffect } from "react";
import { Link } from "omit-ui";
import './link.css'

function LinkPage(): JSX.Element {
  return (
    <>
      <p>default link</p>
      <div className='links'>
        <Link>default</Link>
        
      </div>
      <p>theme link</p>
      <div className='links'>
        <Link theme="primary">primary</Link>
        <Link theme="success">success</Link>
        <Link theme="warning">warning</Link>
        <Link theme="danger">danger</Link>
      </div>

      <p>underline link</p>
      <div className='links'>
        <Link underline></Link>
      </div>
      
    </>
  );
}

export default LinkPage;
