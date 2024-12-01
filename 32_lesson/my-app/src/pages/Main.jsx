import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, List } from 'antd';

import style from '../css/Main.module.css'

export default function Main() {
    const data = [
        {
            title: 'Учебное заведение',
            content: 'Школа "Надежда(Одесса)"'
        },
        {
            title: 'Язык програмирования',
            content: 'Python(Основной язык)'
        },
        {
            title: 'Умения',
            content: 'Python(Основной язык), Java(Почти не пользуюсь но если надо могу написать код), Js(Использую когда пишу сайт), C++(Немного пытался), SQL запросы(в чистом виде), Pascal(вообще не пользуюсь но код написать могу), PHP(немног знаю)'
        },
        {
            title: 'Курсы',
            content: 'Hillel(Fron-End основы, Fron-End уровень 2, Python уровень 2, Java уровень 1, Java уровень 2, Linux, Front-end Pro), Робототехника'
        },
        {
            title: 'A big renaming Odesa (python)',
            content: 'https://github.com/korolasii/ABigRenamingOdesa.git'
        },
        {
            title: 'Business card website (html, css)',
            content: 'https://github.com/korolasii/Business-card-website.git'
        },
        {
            title: 'Android app start (java)',
            content: 'https://github.com/korolasii/AndroidAppStart.git'
        },
        {
            title: 'Scraping Ebay (java)',
            content: 'https://github.com/korolasii/ScrapingEbay.git'
        },
        {
            title: 'Multi task (java)',
            content: 'https://github.com/korolasii/MultiTaska.git'
        },
        {
            title: 'Weather api (java)',
            content: 'https://github.com/korolasii/WeatherApiJavaFX.git'
        },
        {
            title: 'Game bot (python)',
            content: 'https://github.com/korolasii/game-bot.git'
        },
        {
            title: 'Bot war ukrain (python)',
            content: 'https://github.com/korolasii/bot-war-ukrain.git'
        },
        {
            title: 'WWS shop (Python, httml, css)',
            content: 'https://github.com/korolasii/wwsShop.git'
        },
        {
            title: 'Send mesage Rozetka (Python)',
            content: 'https://github.com/korolasii/ABigRenamingOdesa.git'
        },
        {
            title: 'Work with google sheets (Python)',
            content: 'https://github.com/korolasii/Work-with-Google-Sheets.git'
        },
    ];


    return (
        <div className="page">
            <Header />
            <div className={style.container}>
                <div className={style.content}>
                    <List
                        grid={{ gutter: 16, column: 1 }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                {item.content.startsWith('http') ? (
                                    <Card title={item.title}>
                                        <a href={item.content}>Ссылка на проэкт</a>
                                    </Card>
                                ) : (
                                    <Card title={item.title}>{item.content}</Card>
                                )}
                            </List.Item>
                        )}
                        className={style.list}
                    />

                </div>
            </div>
            <Footer />
        </div>
    )
}
