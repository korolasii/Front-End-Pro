import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BaseUrlField from '../components/BaseUrlField';
import EndpointInput from '../components/EndpointInput';
import ResponseDisplay from '../components/ResponseDisplay';
import ClearButton from '../components/ClearButton';
import style from '../css/SWAPI.module.css'

export default function SWAPI() {
    return (
        <div className="page">
            <Header />
            <div className={style.container}>
                <div className={style.SWAPI}>
                    <h2>SWAPI Request with Redux-Thunk</h2>
                    <div className={style.input}>
                        <BaseUrlField />
                        <EndpointInput />
                    </div>
                    <ResponseDisplay />
                    <ClearButton />
                </div>
            </div>
            <Footer />
        </div>
    )
}
