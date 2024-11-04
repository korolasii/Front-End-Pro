import React from 'react';
import '../css/Contacts.css'

export default function Contacts() {
    return (
        <div className='contactsContainer'>
            <h1>Зв'яжіться з нами</h1>
            <p>Ми завжди раді відповісти на ваші запитання та обговорити ваш проект!</p>
            
            <p><strong>Телефон:</strong> +38 (044) 123-45-67</p>
            <p><strong>Email:</strong> support@websolutions.com</p>
            
            <p><strong>Наш офіс:</strong><br />
                м. Київ, вул. Лесі Українки, 24, офіс 12
            </p>
            
            <p><strong>Години роботи:</strong><br />
                Понеділок - П'ятниця: 10:00 - 19:00<br />
                Субота: 10:00 - 15:00<br />
                Неділя: вихідний
            </p>
            
            <p><strong>Соціальні мережі:</strong><br />
                <a href='#'>Facebook</a> | <a href='#'>Instagram</a> | <a href='#'>LinkedIn</a>
            </p>
        </div>
    )
}
