// work experience, used to generate work experience cards
const work_experience = [
    {
        title: "Software Engineer",
        company: "Farmland Efficiency",
        Location: "Hamilton, NZ",
        dates: "October 2025 - March 2026",
        type: "Full-time",
        description: 
            `Joined an early stage startup as a software engineer building an AI-driven blueberry harvesting system,
            using computer vision to improve harvesting efficiency and displaying real-time data.`,
        achievements: [
            "Developed live data transfer pipeline from sensor data to company servers",
            "Developed a web application to display real-time data from the harvesting system",
            "Developed early computer vision system to detect and classify blueberries"
        ],
        stack: ["Python", "Java", "Node.js", "Express", "PostgreSQL", "Redis", "Docker"]
    },
    {
        title: "Information Technology Intern",
        company: "New Zealand Thoroughbred Racing",
        Location: "Cambridge, NZ",
        dates: "June - July 2025",
        type: "Internship",
        description:
            `Embedded within the team infrastructure, troubleshooting and monitoring live systems
            while contributing to improving internal applications and processes.`,
        achievements: [
            "Built and configured API monitors that improve reliability tracking and alerting",
            "Improved upon internal web application for choosing and managing jockey silk designs",
            "Presented project outcomes and improvements live to two departments"
        ],
        stack: ["Python", "Node.js", "React"]
    },
    {
        title: "Long Life Assistant",
        company: "WoolWorths New Zealand",
        Location: "Hamilton, NZ",
        dates: "October 2022 - October 2025",
        type: "Part-time",
        description:
            `Worked across checkouts and long-life departments, assisting customers and
            with stock operations and display management.`,
        achievements: [
            "Recognised for consistent friendly, and efficient customer service",
            "Successfully rolling out new weekly promotional campaigns and displays across the store",
        ],
        stack: ["Customer Service", "Stock Management", "Display Management"]
    }
]

function makeCard(work) {
    const newCard = document.createElement("div");
    newCard.className = "card work-container";
    
    newCard.innerHTML = `
        <div class="card-header">
            <h3>${work.title}</h3>
            <div>
                <h4>${work.company}</h4>
                <h5>${work.Location}</h5>
            </div>
        </div>
        <div class="card-body">
            <div class="card-dates">
                <h5>${work.dates}</h5>
                <h5>${work.type}</h5>
            </div>
            <p>${work.description}</p>
            <ul>
                ${work.achievements.map(achievement => `
                    <li>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                            class="lucide lucide-sparkle-icon lucide-sparkle">
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>
                        </svg> 
                        ${achievement}
                    </li>
                `).join('')}
            </ul>
            <div class="stack-section">
                <h5>Stack:</h5>
                <ul>
                    ${work.stack.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    return newCard;
}

for (let i = 0; i < work_experience.length; i++) {
    const work = work_experience[i];
    const card = makeCard(work);
    document.getElementById("work-experience").appendChild(card);
}