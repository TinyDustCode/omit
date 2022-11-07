import { Link } from 'omit-ui';
import './link.css';
import { LinkIcon, JumpIcon } from 'tdesign-icons-react';

function LinkPage(): JSX.Element {
  return (
    <>
      <p>default link</p>
      <div className='links'>
        <Link>default</Link>
      </div>
      <p>theme link</p>
      <div className='links'>
        <Link theme='primary'>primary</Link>
        <Link theme='success'>success</Link>
        <Link theme='warning'>warning</Link>
        <Link theme='danger'>danger</Link>
      </div>

      <p>size link</p>
      <div className='links'>
        <Link theme='primary' size='small'>
          primary
        </Link>
        <Link theme='success' size='medium'>
          success
        </Link>
        <Link theme='warning' size='large'>
          warning
        </Link>
        <Link theme='danger' size='medium'>
          danger
        </Link>
      </div>

      <p>underline link</p>
      <div className='links'>
        <Link theme='primary' size='small' underline>
          primary
        </Link>
        <Link theme='success' size='medium' underline>
          success
        </Link>
        <Link theme='warning' size='large' underline>
          warning
        </Link>
        <Link theme='danger' size='medium' underline>
          danger
        </Link>
      </div>

      <p>hover link</p>
      <div className='links'>
        <Link theme='primary' hover='color' size='large'>
          primary
        </Link>
        <Link theme='success' hover='underline' size='large'>
          success
        </Link>
        <Link theme='warning' hover='color' size='large'>
          warning
        </Link>
        <Link theme='danger' hover='underline' size='large'>
          danger
        </Link>
      </div>

      <p>disabled link</p>
      <div className='links'>
        <Link theme='primary' hover='color' disabled>
          primary
        </Link>
        <Link theme='success' hover='underline' disabled>
          success
        </Link>
        <Link theme='warning' hover='color' disabled>
          warning
        </Link>
        <Link theme='danger' hover='underline' disabled>
          danger
        </Link>
      </div>

      <p>icons link</p>
      <div className='links'>
        <Link theme='primary' prefixIcon={<LinkIcon />} size='large'>
          primary
        </Link>
        <Link theme='success' prefixIcon={<LinkIcon />} size='medium'>
          success
        </Link>
        <Link theme='warning' prefixIcon={<LinkIcon />} size='small'>
          warning
        </Link>
        <Link theme='danger' prefixIcon={<LinkIcon />} size='small'>
          danger
        </Link>
      </div>
    </>
  );
}

export default LinkPage;
