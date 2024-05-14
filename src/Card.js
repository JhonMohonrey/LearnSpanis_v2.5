import React from 'react';
import Confirm from './Confirm';
import LstConfirm from './LstConfirm';

function Card(props) {
    let [frontData, setFrontData] = React.useState(props.front)
    let [backData, setBackData] = React.useState(props.back)

    let liveFront = (event) => {
        setFrontData(event.target.value)
    }

    let liveBack = (event) => {
        setBackData(event.target.value)
    }

    // console.log("xxx", props.data.count)
    // console.log("cards", props)
    
    return (
        <div className='cards'>
            
            {props.isEdit ? null : <span>{props.count}</span>}
            <div className='frontAndBack'>
                {
                    props.isEdit ?
                    <input 
                        type='text'
                        placeholder='Front'
                        onChange={liveFront}
                    /> : 
                    <h3>{props.front}</h3>
                }
                {
                    props.isEdit ?
                    <input 
                        type='text'
                        placeholder='Back'
                        onChange={liveBack}
                    /> : 
                    <h3>{props.back}</h3>
                }

            </div>

            <div className={props.showDelete ? "lst" : "hideControl"}>
                <LstConfirm lstCancel={() => {
                    props.lstCancel(props.isDouble)
                }}
                lstDelete={() => {
                    props.lstDelete(props.id)
                }}
                />
            </div>

            
            <div className={props.showDelete ? "hideControl" : "control"}>
                {
                    props.isEdit ? null : 
                    <button
                        onClick={() => {
                            // props.confirm(props.data.isDouble)
                            props.deleteCardsBtn(props.id, props.isDouble)
                    }}>Delete</button>
                }
                    

                <button
                    onClick={() => {
                        props.isEditCard(props.id, frontData, backData)
                    }}
                >{ props.isEdit ? "Save" : "Edit"}</button>

            </div>
        </div>
    );
}

export default Card;