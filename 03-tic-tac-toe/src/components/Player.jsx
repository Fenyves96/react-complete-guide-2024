import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing); //!isEditing cause unexpected behaviour
    //setIsEditing(!isEditing); sceduel a state update only
    if(isEditing){
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let buttonCaption = 'Edit';
  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  if(isEditing){
    editablePlayerName = <input
     type="text" required value={playerName}
     onChange={handleChange}/>;
    buttonCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
      {editablePlayerName}

        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}