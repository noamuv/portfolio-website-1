export default function Projects() {
    return (
        <div className="container">
            <div className="projects__wrapper">
                <ul>
                    <File href="https://noamuv.github.io/Basic-ecommerce-site/" name="Ecommerce Website" date="Sept 2024" code="HTML/CSS"/>
                    <File name="Sushi Website" date="Nov 2024" code="HTML/CSS"/>
                    <File name="Recreate Octiocor" date="Jun 2025" code="HTML/CSS"/>
                </ul>
            </div>
        </div>
    )
}

function File({href, name, date, code}) {
    return (
        <li>
            <a href={href}>
                <div>
                    <h2>{name}</h2>
                </div>
                <div>
                    <p>{date}</p>
                </div>
                <div>
                    <p>{code}</p>
                </div>
            </a>
        </li>
    )
}