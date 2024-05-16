import React from 'react';
import './Style.css';
import Header from './Header';
import Practice from './Practice';
import CreateCards from './CreateCards';
import About from './About';
import dataCard from './DataCard'

function App() {

  //Header Logic
  let [activeH, setActiveH] = React.useState(
    () => {
      return JSON.parse(localStorage.getItem('header')) || [
          {
              practice: true,
              createCards: false,
              about: false,
          }
      ]
    }
  )

  //Save The Header
  React.useEffect(() => {
    localStorage.setItem('header', JSON.stringify(activeH))
  }, [activeH])
  
  let practiceBtn = () => {
    setActiveH(prev => {
      return prev.map(() => {
        return {
          practice: true,
          createCards: false,
          about: false,
        }
      })
    })
  }

  let CreateCardBtn = () => {
    setActiveH(prev => {
      return prev.map(() => {
        return {
          practice: false,
          createCards: true,
          about: false,
        }
      })
    })
  }
  
  let AboutBtn = () => {
    setActiveH(prev => {
      return prev.map(() => {
        return  {
          practice: false,
          createCards: false,
          about: true,
        }
      })
    })
  }

  let [mainData, setMainData] = React.useState(
    () => {
      return JSON.parse(localStorage.getItem('mainData')) ||
      dataCard
    }
  )
  let [isAddCard, setIsAddCard] = React.useState(
    () => {
      return JSON.parse(localStorage.getItem("isAddCard")) || false
    }
  )

  React.useEffect(() => {
    localStorage.setItem("isAddCard", JSON.stringify(isAddCard))
  }, [isAddCard] )

  React.useEffect(() => {
    localStorage.setItem("mainData", JSON.stringify(mainData))
  }, [mainData])


  //Add new folder
  let addNewFolder = (FolderName) => {
    if (FolderName !== "") {
      setMainData(prev => {
        return [
          ...prev,
          [
            {
              folderName: `${FolderName}`,
              key: Math.random(),
              indexPosition: prev.length,
              isCard: false,
              isFolder: true,
              isActive: prev.length === 0 ? true : false,
              isDouble: Math.random(),
              showDelete: false,
            }
          ]
        ]
      })
    }
  }

  //Delete folder

  //confirm
  let confirm = (test) => {
    setMainData(prev => {
      return prev.map(data => {
        return data.map(data => {
          console.log(data.isDouble)
          return data.isDouble === test ?
          {...data, showDelete: !data.showDelete} : data
        })
      })
    })
  }

  //cancel
  let cancel = (pair) => {
    setMainData(prev => {
      return prev.map(data => {
        return data.map(data => {
          return data.isDouble === pair ?
          {...data, showDelete: !data.showDelete} : data
        })
      })
    })
  }

  let deleteFolder = (same) => {
    console.log("click")
    setMainData(prev => {
      return prev.filter(data => {
          return data[0].isDouble !== same
      })
    })
  }

  //Add cards
  let [acPosition, setACPosition] = React.useState(
    () => {
      return JSON.parse(localStorage.getItem('acPosition')) || 0
    }
  )

  React.useEffect(() => {
    localStorage.setItem("acPosition", JSON.stringify(acPosition))
  }, [acPosition])

  let addCardBtn = (addLocation) => {
    let index = mainData.findIndex(item => {
      return item[0].isDouble === addLocation
    })

    setACPosition(index)
    setIsAddCard(prev => !prev)
  }

  let backAddCardBtn = () => {
    setIsAddCard(prev => !prev)
  }

  //Current active folder
  let [indexActive, setIndexActive] = React.useState()
  let currentActiveFolder = (currentActive) => {
    
    let index = mainData.findIndex(item => {
      return item[0].isDouble === currentActive
    })

    setIndexActive(index)
    setMainData(prev => {
      let selected = prev[index][0].isDouble
      return prev.map(data => {
        return data.map(data => {
          return data.isDouble === selected ?
          {...data, isActive: true} : {...data, isActive: false}
        })
      })
    })
  }

  //Create card function
  let addCardsBtn = (front, back) => {
    let cardLocation = mainData[acPosition][0].isDouble
    window.location.reload()
    if (front !== "" || back !== "") {
      setMainData(prev => {
        // console.log("Working", prev[acPosition].length)
        let index = prev[acPosition].length -1
        return prev.map(data => {
          return data[0].isDouble === cardLocation ?
          [
            ...data,
            {
              key: Math.random(),
              id: Math.random(),
              isFolder: false,
              isCard: true,
              front: `${front}`,
              back: `${back}`,
              count: `${index += 1}`,
              isDouble: Math.random(),//new
              showDelete: false,//new
            }
          ] : data
        })
      })
    }
  }
  
  //Delete Card Button ******
  let deleteCardsBtn = (idKey, check) => {
    console.log("Main", mainData[acPosition])
    console.log("test", acPosition)
    
    setMainData(prev => {
      return prev.map(data => {
        return data.map(data => {
          console.log("data", data.isDouble === check)
          return data.isDouble === check ?
          {...data, showDelete: !data.showDelete} : data
        })
      })
    })
    // setMainData(prev => {
    //   return prev.map(data => {
    //     return data.filter(data => {
    //       console.log("delete Test", data.id)
    //       return data.id !== idKey
    //     })
    //   })
    // })
  }

  //*********cancel */
  let lstCancel = (getData) => {
    // console.log("cancel lst", getData)

    setMainData(prev => {
      return prev.map(data => {
        return data.map(data => {
          return data.isDouble === getData ?
          {...data, showDelete: !data.showDelete} : data
        })
      })
    })
  }

  //****lst delete */
  let lstDelete = (idKey) => {
    // console.log("lstDelete", idKey)
    setMainData(prev => {
      return prev.map(data => {
        return data.filter(data => {
          console.log("delete Test", data.id)
          return data.id !== idKey
        })
      })
    })
  }

  console.log("main", mainData)

  //Card Edit Function ===>
  let isEditCard = (editId, front, back) => {

    setMainData(prev => {
      return prev.map(data => {
        return data.map(data => {
          return data.id === editId ? 
          {
            ...data,
            front: `${front}`,
            back: `${back}`,
            isEdit: !data.isEdit,
          } : data
        })
      })
    })
  }

  return (
  <div>
    <Header 
      practiceBtn={practiceBtn}
      CreateCardBtn={CreateCardBtn}
      AboutBtn={AboutBtn}
      isActive={activeH}
    />

    {activeH[0].practice ? <Practice 
    mainData={mainData}
    indexActive={indexActive}
    /> : null}

    {activeH[0].createCards ? <CreateCards 
    addCard={mainData[acPosition]}
    mainData={mainData}
    addFolderBtn={addNewFolder}
    deleteFolderBtn={deleteFolder}
    addCardBtn={addCardBtn}
    isAddCard={isAddCard}
    addPosition={mainData[acPosition]}
    backAddCardBtn={backAddCardBtn}
    caf={currentActiveFolder}
    addCardsBtn={addCardsBtn}
    deleteCardsBtn={deleteCardsBtn}
    isEditCard={isEditCard}
    confirm={confirm}
    cancel={cancel}
    lstCancel={lstCancel}
    lstDelete={lstDelete}
    /> : null}

    {activeH[0].about ? <About /> : null}
  </div>
  );
}

export default App;