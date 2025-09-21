function projectObj(id, name, description, image, githubLink, liveLink, technologiesUsed, difficulty) {
    return { id, name, description, image, githubLink, liveLink, technologiesUsed, difficulty };
}

export default function createFakeData(quantity) {
    const arr = [];

    for (let i = 0; i <= quantity; i++) {
        arr.push(
            projectObj(
                i,
                `Project #${i}`,
                `Description of Project #${i}.`,
                "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://github.com/georgekandelaki",
                "https://github.com/georgekandelaki",
                ["SCSS", "React", "JS", "Express", "MongoDB"],
                2
            )
        );
    }

    return arr;
}
