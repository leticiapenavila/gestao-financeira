import React from "react";
import {HeaderModification, HeaderPosition, HeaderStrings} from './style'

export default function Header(){
    return(
    <HeaderModification>
        <HeaderPosition>
                <h1>ML</h1>
            <HeaderStrings>
                <p>Home</p>
                <p>Contato</p>
            </HeaderStrings>
        </HeaderPosition>
    </HeaderModification>
    )
}