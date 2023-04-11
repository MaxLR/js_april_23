import { useNavigate} from "react-router-dom";

const Header  = () => {
    const navigate = useNavigate();
    
    const viewAll = () => {
        navigate('/all')
    }

    return(
        <div>
            <h1>Welcome to Shiny Hunter (Routing Edition)</h1>
			<h3>Let's go and find some shiny Pokemon!</h3>
            <button onClick={viewAll}>View All Page</button>
        </div>
    )
}

export default Header;