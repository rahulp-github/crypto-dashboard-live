import BTC_logo from '../BTC_Logo.png'
import {Link} from 'react-router-dom';
/*------------------------------------------------------------------------------------------------
                                        End OF Imports                                          
------------------------------------------------------------------------------------------------*/

function Navbar({isAuthenticated,handleLogout}) {
    
    return (
        <>
        <nav>
            <ul className="navbarUl">
                <li className="navbarLi">
                    <a className="icon" href="#">
                       <img src={BTC_logo} alt="logo" width="40" height="40"/>
                    </a>
                </li>
                <li className="home navbarLi" ><Link className="navLink" to="/">Home</Link></li>
                { isAuthenticated && <li className="history navbarLi"><Link className="navLink" to="/history">History</Link></li> }
                {isAuthenticated ?  <li className="signup navbarLi"><Link  to="/" onClick={handleLogout}>Logout</Link></li>
                     :
                     <> 
                        <li className="signup navbarLi"><Link to="/signup">SignUp</Link></li> 
                        <li className="signin navbarLi"><Link to="/signin">SignIn</Link></li>
                     </>
                }
            </ul>
        </nav>
        </>
    );
    
}

export default Navbar;