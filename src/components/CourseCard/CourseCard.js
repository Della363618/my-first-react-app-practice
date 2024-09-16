import React, {useState}from 'react';
import './CourseCard.css';


function CourseCard(props) {
    
    const [isEnrolled, setIsEnrolled] = useState(false);

    const handleEnrolled=() =>{
        setIsEnrolled(true);

    }

    return (
        <div className="my-class">
            <h2> {props.title}</h2>
            <p>{props.description}</p>
            <p>{props.number} lessons</p>
            <button onClick={handleEnrolled} disabled={isEnrolled}>
                {isEnrolled ? 'Enrolled':'Enroll now'}
            </button>

        </div>);

    // );} else {
    //     return (
    //         <div>
    //             <h1>Hello, </h1>
    //             <p> please log in</p>
    //         </div>
    //     )
    
}

export default CourseCard;