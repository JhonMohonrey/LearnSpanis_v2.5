import React from 'react';
import add from './asset/addBtn (2).png'

function AddFolder(props) {

    //Folder name
    let [name, setName] = React.useState("Folder")
    let folderName = (event) => {
        setName(event.target.value)
    }
        
    return (
        <form className='add_folder_container'>
            <div className='addFolder'>
                <input 
                    type='text'
                    onChange={folderName}
                    placeholder='Folder name...'/>

                <button onClick={() => props.addFolderBtn(name)}
                >
                    <img src={add} />
                </button>

            </div>
        </form>
    );
}

export default AddFolder;