import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <navbar className='navbar'>
      <Link to='/'>Home page</Link>
      <Link to='about'>About</Link>
      <Link to='products'>Products</Link>
    </navbar>
  );
};

export default Navbar;
