import React from "react"
import { Link } from "react-router-dom"

interface HeaderItemProps {
    title: string
    to: string
    src?: string
}

const HeaderItem: React.FC<HeaderItemProps> = ({title,to,src}) => {
    return(
        <div className="header__container_item">
            <Link to={to}>{title}</Link>
        </div>
    )
}



export default HeaderItem