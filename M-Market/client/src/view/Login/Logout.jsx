import {  useNavigate } from "react-router-dom";

const LogOut = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("userId")
        window.location.reload()
    }
    return (
        <div>
            <button className="icons" onClick={handleLogout}><i className='bx bx-log-in'></i></button>
        </div>
    )
}

export default LogOut;
