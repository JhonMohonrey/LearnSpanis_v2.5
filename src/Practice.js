import React from 'react';
import Container from './Container';

function Practice(props) {
    let display
    let noActive = false

    if (props.mainData[0] !== undefined) {
        display = props.mainData.map(data => {
            if (data[0].isActive === true) {
                noActive = true
                return <Container 
                    key={data[0].key}
                    data={data}
                    {...data}
                />
            } else if (noActive === false) {
                noActive = false
            }
        })
    } else {
        display = <h3 className='NoSelectedFolder' >We couldn't locate any folder. Please create a folder to continue.</h3>
    }

    if (props.mainData[0] !== undefined && noActive === false) {
        console.log("it has a folder but no active")
        display = <h3 className='NoSelectedFolder'>Please select a folder to proceed!</h3>
    }

    return (
        <div>
            {display}
        </div>
    );
}

export default Practice;