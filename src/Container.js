import React from 'react';

function Container(props) {
    let currentNum = props.data.length -1
    let [data, setData] = React.useState(Array.from(
        {length: currentNum}, (_, i) => i +1
    ))
    let [display, setDisplay] = React.useState(0)
    let [reveal, setReveal] = React.useState(false)
    let [time, setTime] = React.useState(5)
    let [nextTimer, setNextTimer] = React.useState(8)
    let [isSwitch, setIsSwitch] = React.useState(false)
    let [isPause, setIsPause] = React.useState(true)

    let shuffle = () => {
        const shuffle = [...data.sort(() => Math.random() - 0.5)]
        setData(shuffle)
        PlayBtn()
    }

 

    
    let nextCard = () => {
        setDisplay(prev => {
            if (display < data.length -1) {
                return prev += 1
            }

            if (display === data.length -1) {
                return prev = 0
            }
        })
    }


    React.useEffect(() => {//Stop
        if (isPause === false) {
            const IntervalID = setInterval(() => {
                nextCard()
                setReveal(false)
                setTime(5)
                setNextTimer(8)
            }, 8000)
            
            return () => clearInterval(IntervalID)
        }
    }, [display, isPause])
    
    React.useEffect(() => {
        if (isPause === false) {
            const reveal = setInterval(() => {
                setReveal(true)
            }, 5000)
    
            return () => clearInterval(reveal)
        }
    }, [reveal, isPause])

    React.useEffect(() => {
        if (isPause === false) {
            const reveal = setInterval(() => {
                setTime(prev => {
                    return prev -=1
                })
            }, 1000)
    
            return () => clearInterval(reveal)

        }
    }, [time, isPause])

    React.useEffect(() => {
        if (isPause === false) {
            const nextTimer = setInterval(() => {
                setNextTimer(prev => {
                    return prev -=1
                })
            }, 1000)
    
            return () => clearInterval(nextTimer)
        }
    }, [display, isPause])

    let switchBtn = () => {
        setIsSwitch(prev => !prev)
    }

    let pauseBtn = () => {
        setIsPause(prev => !prev)
    }

    let PlayBtn = () => {
        setIsPause(prev => !prev)
        setReveal(false)
        setTime(5)
        setNextTimer(8)
    }
 

    // console.log(isPause)

    let front
    let back
    try {
        front = props[data[display]].front
        back = props[data[display]].back
    } catch (error) {
        front = "Please create card"
        back = "....."
    }


    return (
        <div className='practiceContainer'>

            <div className='practiceMain'>
                <span className='timer'> {`${nextTimer}`} </span>

                <div className='frontCards'>
                    <h3>{isSwitch ? back : front}</h3>

                </div>
                <div className='backCards'>
                    {/* <span className='line'></span> */}
                    <h3>{reveal === false ? `---${time}---` : isSwitch ? front : back}</h3>
                </div>

            </div>

            <div className='practiceBtnControl'>
                <button className='shuffle' onClick={shuffle} >Shuffle</button>
                <button className='flip' onClick={switchBtn} >Flip</button>
                <button className='play' onClick={isPause ? PlayBtn : pauseBtn} >{isPause ? "Play" : "Pause"}</button>
            </div>
        </div>
    );
}

export default Container;