import React from 'react';

export default function Header({ children }) { //seria a variavael que a função vai receber para escrever no H1, quando se usa chaves buscamos apenas o que esta dentro dela
    return (
        <header>
            <h1>{children}</h1>
        </header>
    )
}