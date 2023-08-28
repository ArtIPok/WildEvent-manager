const getAllActiveUsers = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_GET_ACTIVE_USERS}`);
        if (!response.ok) {
            throw new Error("Failed to fetch active users!");
        }
        return await response.json();
    } catch (error) {
        console.error("Cannot fetch active users!");
    }
}

const addUser = async (userDTO) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_ADD_USER}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDTO)
        });
        if (!response.ok) {
            throw new Error("Failed to add user!");
        }
        return await response.json();
    } catch (error) {
        console.error("Cannot add user:" , error);
    }

    
}