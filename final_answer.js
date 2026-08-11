//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
    if (
        typeof student !== "object" ||
        student === null ||
        Array.isArray(student) ||
        !("name" in student) ||
        !("age" in student) ||
        !("course" in student)
    ) {
        return "Invalid";
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

//Problem-02: Active User Filter
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

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    if (typeof caption !== "string") {
        return "Invalid";
    }

    let words = caption.split(" ");
    let hashtagCount = 0;
    let longestTag = "";

    for (let word of words) {
        if (word.startsWith("#")) {
            hashtagCount++;

            let tag = word.slice(1);

            if (tag.length > longestTag.length) {
                longestTag = tag;
            }
        }
    }

    return {
        hashtagCount: hashtagCount,
        longestTag: longestTag
    };
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }

    for (let score of scores) {
        if (typeof score !== "number") {
            return "Invalid";
        }
    }

    let updatedScores = scores.map(score => score + 10);

    return updatedScores.reduce((total, score) => total + score, 0);
}


//Problem-05: Debugging Challenge - AI Leaderboard Generator
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

