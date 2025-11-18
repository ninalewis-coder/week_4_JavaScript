function fetchUserData(userId){
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (userId > 0){
                resolve({
                    id: userId,
                    name: "Nina Lewis",
                    email: "ninarlewis@gmail.com",
                    registrationDate: "20/12/2025"
                });   
            } 
            else {
                reject("Error:Invalid useer ID.")
            }
         }, 1500);
    });
}

function generateUserCard(user) {
    return `
        <div class="user-card">
            <h2>${user.name}</h2>
            <p>ID: ${user.id}</p>
            <p>Email: ${user.email}</p>
            <p>Registered: ${user.registrationDate}</p>
        </div>
    `;
}

fetchUserData(1)
.then(user => {
    const html = generateUserCard(user);
    console.log(html)
})
.catch(error => console.error(error));

function fetchUserPosts(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0){
                resolve([
                    {id: 1, title: "Hello World", content: "My first post!", userId},
                    {id: 2, title: "JavaScript", content: "Learning promises!", userId}
                ]);
            }
            else {
                reject("Error: Invalid userId.")
            }

        }, 1000);
    });
}

function getUserAndPosts(userId) {
    return fetchUserData(userId)
    .then(user => {
        console.log("User data:", user);
        return fetchUserPosts(user.id)
        .then(posts => {
            console.log("Posts:", posts)
            return{
                ...user,
                posts: posts
            };
        });
    })
    .catch(err => {
        console.error("Error in Promise chain:", err);
    });
}

async function fetchUserWithPost(userId) {
    try {
        console.log("Fetching user...");
        const user = await fetchUser(userId);

        console.log("Fetching posts...");
        const posts = await fetchPosts(userId);

        console.log("Combining data...");
        return {user, posts};
    }
    catch (error) {
        console.error("Error:", error);
    }
}

async function fetchMultipleUsers(userIds) {
    const promises = userIds.map(id => fetchUser(id).catch(err => null));
    const results = await Promise.all(promises);
    return results.filter(u => u !== null);
}

async function fetchUserAndPosts(userIds) {
    try{
        const users = await fetchMultipleUsers(userIds);
        const postPromises = users.map(user => fetchPosts(user.id));
        const postsArray = await Promise.all(postPromises);
        return users.map((user, index) => ({
            user,
            posts: postsArray[index]
        }));
    
    }
    catch (err) {
        console.error("Error fetching users and posts:", err)
    }
}

fetchUserWithPost(1)
.then(data => console.log("Single user:", data));

fetchMultipleUsers([1, 2, -3, 4])
.then(data => console.log("Multiple users:"))

fetchUserAndPosts([1, 2])
.then(data => console.log("User + Posts:", data));
