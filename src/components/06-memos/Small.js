import React from 'react';

const Small = React.memo(({value}) => {

    console.log('desde small');

    return ( 
        <>
        {value}
        </>
     );
});
 
export default Small;