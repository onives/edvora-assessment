import React from 'react';
import './carousel.css';

const Carousel = (props) => {
    const { children } = props
    const clickLeft = () => {
        let container = document.querySelector('#flex-container');
        container.scrollTo({
            left: container.scrollLeft - 200,
            top: 0,
            behavior: "smooth"
        });
    }

    const clickRight = () => {
        let container = document.querySelector('#flex-container');
        container.scrollTo({
            left: container.scrollLeft + 200,
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div class="outer">
            <div class='flex-container' id="flex-container">
                {children && children.length > 3 ? <button className="left-arrow" onClick={clickLeft}>
                    &lt;
                </button> : null}
                {children}
                {children && children.length > 3 ? <button className="right-arrow" onClick={clickRight}>
                    &gt;
                </button> : null}
            </div>
        </div>
    )
}

export default Carousel