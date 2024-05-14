import React from 'react';
import AddFolder from './AddFolder';
import Folders from './Folders';
import AddCard from './AddCard'
import Confirm from './Confirm';

function CreateCards(props) {
    // THIS IS TO DISPLAY EACH FOLDERS
    let pair
    let display = props.mainData.map(data => {
        let cardCount = data.length -1 //cards count

        if (props.isAddCard === false ) {
            return data.map(data => {
                pair = data.isDouble
                return <Folders 
                key={data.key}
                addCardBtn={props.addCardBtn}
                caf={props.caf}
                cardsCount={cardCount}//cards count
                deleteFolderBtn={props.deleteFolderBtn}//Delete folder
                confirm={props.confirm}
                cancel={props.cancel}
                {...data}
                />
            })
        }

    })

    return (
        <div className='create_card_container'>
            {props.isAddCard ? 
                <AddCard 
                addPosition={props.addPosition}
                backAddCardBtn={props.backAddCardBtn}
                addCard={props.addCard}
                addCardsBtn={props.addCardsBtn}
                deleteCardsBtn={props.deleteCardsBtn}
                isEditCard={props.isEditCard}
                confirm={props.confirm}
                cancel={props.cancel}
                lstCancel={props.lstCancel}//***** */
                lstDelete={props.lstDelete}
                deleteFolderBtn={props.deleteFolderBtn}//Delete 
                // pair={pair}
                // main={props.mainData}
                /> : <AddFolder addFolderBtn={props.addFolderBtn} /> }

            {display}
            {/* <Confirm /> */}
        </div>
    );
}

export default CreateCards;