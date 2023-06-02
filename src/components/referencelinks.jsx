import React from "react";

export const  ReferenceLinks = ({icon, title, link}) => {
    return(
        <div className="reference-links">
                <ul>
                    Reference Links
                    <li href ={ link}>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>
        </div>
    )
}