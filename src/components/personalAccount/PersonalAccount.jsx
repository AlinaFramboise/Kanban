import React, { useState } from "react"
import css from '../header/header.module.css'
import ArrowDown from '../../assets/ArrowDown.svg'
import ArrowUp from '../../assets/ArrowUp.svg'
import UserPhoto from '../../assets/Photo.svg'


function PersonalAccount() {
    const [isFormVisible, setFormVisible] = useState(false)

    function handleClick() {
        setFormVisible(!isFormVisible)
    }

    return (<div className={css.wrapper}>
    <button className={css.PersonalAccount} onClick={handleClick}>
        <div className={css.PersonalAccountPhoto}>
            <img className={css.UserPhoto} src={UserPhoto} alt='' />
        </div>
        <div className={css.arrow}>
            <span>
            {isFormVisible ? <img className={css.ArrowUp} src={ArrowUp} alt='' /> : <img className={css.ArrowDown} src={ArrowDown} alt='' />} 
                
            </span>
        </div>
    </button>
    {isFormVisible && (
    <div className={css.molu}>
        <span className={css.moluOption}>Profile</span>
        <span className={css.moluOption}>Log out</span>
    </div>
    )}
    </div>
    )
}

export default PersonalAccount