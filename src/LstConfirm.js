import React from 'react';

function LstConfirm(props) {
    // console.log("lst", props)
    return (
        <div className='lstContainer'>
            <h3>Are you sure?</h3>
            <div>
                <button className='lstDel'
                    onClick={props.lstDelete}
                >Delete</button>
                <button className='lstCan'
                    onClick={props.lstCancel}
                >Cancel</button>
            </div>
        </div>
    );
}

export default LstConfirm;