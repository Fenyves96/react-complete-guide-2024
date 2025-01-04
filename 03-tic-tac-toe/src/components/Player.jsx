import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing); //!isEditing cause unexpected behaviour
    //setIsEditing(!isEditing); sceduel a state update only
  }
  let buttonCaption = 'Edit';
  let playerName = <span className='player-name'>{name}</span>;
  if(isEditing){
    playerName = <input type="text" required value={name} />;
    buttonCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
      {playerName}

        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}