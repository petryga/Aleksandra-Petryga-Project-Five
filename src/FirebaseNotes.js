import firebase from './firebase.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
library.add(faTimes);


const Notes = ({ noteText, id, index }) => {
    const converter = require('number-to-words');
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <li>
            <h3>note {converter.toWords(index)}</h3>
            <p className="note-text">{noteText}</p>
            <button
                aria-label="remove button"
                className="remove-btn"
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                onClick={() => {
                    const dbRef = firebase.database().ref();
                    dbRef.child(id).remove();
                }}>
                <FontAwesomeIcon
                    icon={['fas', 'times']}
                    spin={hovered ? true : false}
                />
            </button>
        </li>
    )
}

export default Notes;