import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext);

    const handleLogout=()=>{
        setUser({
        });
    }

    return ( 
        <div className='container mt-5'>
            <pre>
            {JSON.stringify(user,null,3)}
            </pre>

            <button className='btn btn-warning'
            onClick={handleLogout}
            >
                Logout
            </button>
        </div>
     );
}
 
export default AboutScreen;