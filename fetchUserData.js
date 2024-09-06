function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: userId,
                name: 'John Doe',
                email: 'john.doe@example.com'
            };
            resolve(user);
        }, 2000); // Simulate a 2 second delay
    });
}

fetchUserData(1)
    .then(user => {
        console.log(`User Name: ${user.name}`);
        console.log(`User Email: ${user.email}`);
    })
    .catch(error => console.error(error));
