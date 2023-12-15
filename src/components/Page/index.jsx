import React from 'react'
import stylles from './Page.module.scss'

export const Page = () => {
    return (
        <div className={stylles.page}>
            <div className="container">
                <div className={stylles.page__inner}>
                    <div className={stylles.page__block}>
                        <h2>Home page</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde 
                            itaque velit illum, repellendus eius fugit tempore odit hic eum 
                            natus alias consequuntur quis est, id earum adipisci fuga saepe rem?</p>
                    </div>
                    <div className={stylles.page__block}>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
