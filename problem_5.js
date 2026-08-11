function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    for (let student of students) {
        if (
            typeof student !== "object" ||
            student === null ||
            Array.isArray(student) ||
            !("name" in student) ||
            !("score" in student) ||
            typeof student.score !== "number"
        ) {
            return "Invalid";
        }
    }

    let qualified = students.filter(student => student.score >= 70);

    let names = qualified.map(student => student.name.toUpperCase());

    return names.slice(0, 3);
}

console.log(generateLeaderboard([
    { name: "Alice", score: 85 },
    { name: "Bob", score: 90 }
]));