import React from 'react';
import deleteLogo from './asset/delete.svg';
import addCardLogo from './asset/addBtn.svg';
import boxSvg from './asset/box.svg';
import Confirm from './Confirm';

function Folders(props) {

    //Folder display
    return (
        <div className={props.isFolder ? "Folder" : "NotFolder"}>
            
            <div className='title_container'>
                <h3 className='title'>{props.folderName}</h3>

            </div>
            {/* <p>same: {props.isDouble}</p> */}
            <p className='active_indicator'>
                <label>{props.isActive ? "Active" : "Not Active"}</label>
                <input 
                    type='checkbox'
                    checked={props.isActive}
                    onChange={() => {
                        props.caf(props.isDouble)
                }} />
            </p>

            {
                props.showDelete ? <Confirm 
                cancel={props.cancel}
                pair={props.isDouble}
                delete={props.deleteFolderBtn}
                /> : 
                <div className='control_container'>
                    <p className='count_cards'>
                        <img src={boxSvg} />
                        {props.cardsCount}</p>
                    <div className='buttons'>
                        <button onClick={() => {
                            props.confirm(props.isDouble)
                            // props.deleteFolderBtn(props.indexPosition, props.isDouble)
                        }} >
                            <img src={deleteLogo} />
                        </button>

                        <button onClick={() => {
                                props.addCardBtn(props.isDouble)
                        }} >
                            <img src={addCardLogo} />
                        </button>
                    </div>
                </div>
            }
            
        </div>
    );
}

export default Folders;