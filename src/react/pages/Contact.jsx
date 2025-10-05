export default function Contact() {
    return (
        <div className="container">
            <div className="contact__wrapper">
                <Info href="https://x.com/noamukuv">X(Twitter) ↗</Info>                    <Info href="https://www.linkedin.com/in/noam-ureta-vidal/">LinkedIn ↗</Info>
                <Info href="mailto:noamukuv@gmail.com">Email ↗</Info>
            </div>
        </div>
    )
}

function Info({href, children}) {
    return (
        <div>
            <a href={href}>{children}</a>
        </div>
    )
}