import React, { useEffect, useState } from 'react';
import './App.css';

const Character = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [keyPressed, setKeyPressed] = useState({});
    const [frameID, setFrameID] = useState(null);

    useEffect(() => {

        const handleKeyDown = (event) => {
            setKeyPressed((prevState) => ({...prevState, [event.key]: true}));
        };            

        const handleKeyUp = (event) => {
            setKeyPressed((prevState) => ({...prevState, [event.key]: false}));
        };

        const moveCharacter = () => {
            if (keyPressed.w) {
                move(0, -3);
            } else if (keyPressed.s) {
                move(0, 3);
            } 
            
            if (keyPressed.a) {
                move(-3, 0);
            } else if (keyPressed.d) {
                move(3, 0);
            }

            if (frameID) {
                window.cancelAnimationFrame(frameID);
            }

            const newFrameID = window.requestAnimationFrame(moveCharacter);
            setFrameID(newFrameID);

        };
    
        const move = (deltaX, deltaY) => {
            setPosition((prevPosition) => ({
                x: prevPosition.x + deltaX,
                y: prevPosition.y + deltaY,
            }));
        };

        const stopMoving = () => {
            if (!keyPressed.w && !keyPressed.s && !keyPressed.a && !keyPressed.d) {
                if(frameID){
                    window.cancelAnimationFrame(moveCharacter);
                    setFrameID(null);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        // async
        stopMoving();
        moveCharacter();

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
  }, [keyPressed]);



  return (
    <div id='character' style={{top: position.y, left: position.x,}}>
        {/* <div>{`(${position.x}, ${position.y})`}</div> */}
    </div>
  );
};

export default Character;