import React, {useState}   from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



//create your first component
const List = () => {
	const [inputValue, setinputValue] = useState("");
	const [toDos, settoDos] = useState([])
	const [hoveredIndex, setHoveredIndex] = useState(null)

	return (
		<div className="container">
			<h1>to Dos</h1>
			<ul>
				<li>
					<input
						 type="text" 
						 onChange={(e) => setinputValue(e.target.value)}
						 value={inputValue}
						 onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                settoDos(prevToDos => [...prevToDos, inputValue]);
                                setinputValue("");
                            }
                        }}
						placeholder={toDos.length === 0 ? "Nothing for now. Something new?" : "More to do?"}></input>
				</li>
				
				{toDos.map((item, index) => (
					<li className="trash"
						key={index}
						onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}>
						
						<span className="does">{item}</span>
						
						{hoveredIndex === index && (
                            <FontAwesomeIcon
                                icon={faTrash}
                                onClick={() => 
                                    settoDos(prevToDos => 
                                        prevToDos.filter(
                                            (t, currentIndex) => index !== currentIndex
                                        )
                                    )
                                }
                            />
                        )}
						 
					</li>
					
				))}
			</ul>
			<div>{toDos.length === 0 ? "No tasks! Free!" : `${toDos.length} tasks to go`}</div>
		</div>
	);
};

export default List;
