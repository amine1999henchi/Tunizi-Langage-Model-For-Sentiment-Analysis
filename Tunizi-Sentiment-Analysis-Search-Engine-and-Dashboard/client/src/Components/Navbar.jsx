import React from 'react'
import "../Assets/Navbar.css"
import { CNavbar, CContainer, } from '@coreui/react'
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router';

function Navbar() {
    const history = useNavigate();

    function handleClick() {
       history('/');
    }
    return (
        <div>
            <CNavbar colorScheme="light" className="navbar-head" placement="sticky-top">
                <CContainer fluid>
                    <div className='container-navbar'>
                    <div className='logo11'>
                        TUNIZI
                    </div >
                    <div style={{marginLeft:"1300px",width:"400px",marginTop:"-50px"}}>
                    <div className='person-icon'> <PersonIcon style={{fontSize:"30px"}} /> </div>
                    <div className='Logout-container' >
                    
                        
                        <div className='logout-logout'onClick={()=>handleClick()} > LOGOUT</div>
                        <div className='logout-icon' onClick={()=>handleClick()}> < LogoutIcon style={{fontSize:"25px",marginTop:"14px",marginLeft:"5px"}}/> </div>
                    </div>
                    </div>
                    </div>
                </CContainer>
            </CNavbar>

        </div>
    )
}

export default Navbar
