import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const HomeScreen = () => {

    const user = useContext(UserContext);

    return ( 
        <div className='container my-5'>
            <pre>
            homescreen {JSON.stringify(user,null,3)} 
            </pre>
        </div>
     );
}
 
export default HomeScreen;