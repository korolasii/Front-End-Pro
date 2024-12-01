import React from 'react'

import style from '../css/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {


    return (
        <div className={style.header}>
            <div className={style.menu}>
                <div className={style.main}>
                    <Link to='/'>
                        Головна
                    </Link>
                </div>
                <div className={style.Todo}>
                    <Link to='/TodoList'>
                        Todo List
                    </Link>
                </div>
                <div className={style.SWAPI}>
                    <Link to='SWAPI'>
                        SWAPI
                    </Link>
                </div>
            </div>
        </div>
    )
}
