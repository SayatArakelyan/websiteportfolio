import React from 'react';

function Contacts(props) {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Gyumri, Armenia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2"> WhatsApp</h2>
                        <p><a href="tel:+37494442042">+374 (94) 44-20-42</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">sayat-arakelyan@mail.ru</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
}

export default Contacts;