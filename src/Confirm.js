import React from 'react';

function Confirm(props) {
    return (
        <div className='confirm_container'>
            <h3>Are you sure?</h3>

            <div>
                <button className='confirm'
                onClick={() => {
                    props.delete(props.pair)
                }}
                >Delete</button>
                <button className='cancel'
                    onClick={() => {
                        props.cancel(props.pair)
                    }}
                >Cancel</button>
            </div>
        </div>
    );
}

export default Confirm;