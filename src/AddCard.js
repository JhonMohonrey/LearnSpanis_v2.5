import React from 'react';
import Card from './Card';
import backBtn from './asset/arrow.png'

function DisplayCard(props) {
    let [front, setFront] = React.useState("")
    let [back, setBack] = React.useState("")

    let display = props.addCard.map(data => {
        if (data.isCard === true) {
            return <Card 
                key={data.key}
                confirm={props.confirm}
                deleteCardsBtn={props.deleteCardsBtn}
                isEditCard={props.isEditCard}
                data={data}
                lstCancel={props.lstCancel}
                lstDelete={props.lstDelete}
                {...data}
                cancel={props.cancel}
                deleteFolderBtn={props.deleteFolderBtn}//Delete 
            />
        }
    })

    let frontCard = (event) => {
        setFront(event.target.value)
    }

    let backCard = (event) => {
        setBack(event.target.value)
    }

    return (
        <div className='addCard_container'>
            <div className='top_container'>
                <h3>
                    {props.addPosition[0].folderName}
                </h3>
                <button onClick={props.backAddCardBtn} >
                    <img src={backBtn} />
                </button>
            </div>

            <div className='createCard_container'>
                <input 
                    typeof='text'
                    placeholder='Front'
                    onChange={frontCard}
                />

                <input 
                    typeof='text'
                    placeholder='Back'
                    onChange={backCard}
                />
                <button
                    onClick={() => {
                        props.addCardsBtn(front, back)
                    }}
                >Create Card</button>

            </div>

            {display}
        </div>
    );
}

export default DisplayCard;