export default function Navbar(){
    const navItems = ["Início", "Sobre", "Servicos"]


    return (
        <nav className="flex items-center justify-around">
            <div>
                Logo
            </div>
            <ul className="flex gap-10">
                {navItems.map((item,index) => (
                    <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
            <div>
                <a href="#">Contato</a>
            </div>
        </nav>
    )
}