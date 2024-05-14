import React from 'react';

function AddFolder(props) {

    //Folder name
    let [name, setName] = React.useState("Folder")
    let folderName = (event) => {
        setName(event.target.value)
    }
        
    return (
        <form className='add_folder_container'>
            <input 
                type='text'
                onChange={folderName}
                placeholder='Folder name'/>

            <button onClick={() => props.addFolderBtn(name)}
            >Add Folder</button>
        </form>
    );
}

export default AddFolder;