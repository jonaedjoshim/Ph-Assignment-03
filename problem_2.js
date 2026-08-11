function filterActiveUsers(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }

    for (let user of users) {
        if (!("isActive" in user)) {
            return "Invalid";
        }
    }

    return users.filter(user => user.isActive === true);
}

console.log(filterActiveUsers([{ name: "Alice", isActive: true }, { name: "Bob", isActive: false }, { name: "Charlie", isActive: true }]));