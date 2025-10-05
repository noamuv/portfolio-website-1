import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import DecryptedText from './External Comps/DecrytedText';
 
export default function Navbar() {
    return (
    <>
        <div className="title">
            <CustomLink to="/"><DecryptedText text="Noam Ureta-Vidal" speed={30} animateOn="view" sequential="true" maxIterations={10}/></CustomLink>
                        
        </div>    
        <nav className="nav">
            <ul>
                <CustomLink to="/about"><DecryptedText text="About" speed={60} animateOn="view" sequential="true" maxIterations={10}/></CustomLink>
                <CustomLink to="/projects"><DecryptedText text="Projects" speed={60} animateOn="view" sequential="true" maxIterations={10}/></CustomLink>
                <CustomLink to="/contact"><DecryptedText text="Contact" speed={60} animateOn="view" sequential="true" maxIterations={10}/></CustomLink>
            </ul>
        </nav>
    </>
    
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

