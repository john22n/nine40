import React, {useState, useEffect} from 'react';


const CalendarForm = () => {
    const [selectedDuration, setSelectedDuration] = useState('');

    useEffect(() => {
    });

    const handleSelectionChange = (e) => {
        console.log(e.target.value);
        setSelectedDuration(e.target.value);
    };

    return (
        <React.Fragment>
            <form>
                <label>Pick Amount of time for session
                    <select value={selectedDuration} onChange={handleSelectionChange}>
                        <option value="tattoo">2 hours</option>
                        <option value="3-hour-tattoo">3 hours</option>
                    </select>
                </label>
            </form>
            <a href={`https://calendly.com/johnnoriega22/${selectedDuration}`}>Set Appointment</a>
        </React.Fragment>
    )
};

export default CalendarForm;