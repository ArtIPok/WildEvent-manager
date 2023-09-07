const getAllEvents = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_GET_EVENT}`);
        if (!response.ok) {
            throw new Error("Problem occured with fetching events!")
        }
        return await response.json();
    } catch (error) {
        console.error("Events cannot be downloaded!")
    }
}
const addEvent = async (eventData) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_ADD_EVENT}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventData)
        });
        if (!response.ok) {
            throw new Error("Problem occurred while adding an event!");
        }
    } catch (error) {
        console.error("Event could not be added:", error);
    }
}
const deleteEvent = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_DELETE_EVENT}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (!response.ok) {
            throw new Error("Problem occurred while deleting the event!");
        }
    } catch (error) {
        console.error("Event could not be deleted:", error);
    }
}

const updateDate = async (event, id) => {
    try {
        const response = await fetch(`http://localhost:8080/event-management/event/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        });
        if (!response.ok) {
            throw new Error("Problem occurred while updating the event!");
        }
    } catch (error) {
        console.error("Event could not be updated: ", error);
    }
}

const updateDateEvent = async (eventDTO) => {
    try {
        const response = await fetch(`http://localhost:8080/event-management/event`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventDTO)
        });
        if (!response.ok) {
            throw new Error("Problem occurred while updating the event!");
        }
    } catch (error) {
        console.error("Event could not be updated: ", error);
    }
}

export { getAllEvents, addEvent, deleteEvent, updateDate, updateDateEvent };