import React from 'react'
import style from '../css/Footer.module.css'

export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.year}>
                @2024
            </div>
            <div className={style.contacts}>
                <div className={style.email}>
                    Email: korolasii11@gmail.com
                </div>
                <div className={style.telegram}>
                    Telegram: https://t.me/Hdbdbdnnxndnd
                </div>
                <div className={style.phone}>
                    Phone: +380 (73) 035 85 04
                </div>
            </div>
        </div>
    )
}
