import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Lightbox = ({image, caption}) => {
    return <LBCss>
        <div className="lb-container">
            <div className="lb-image"><img src={image} /></div>
            <div className="lb-caption">{caption}</div>
        </div>
    </LBCss>
}

export default Lightbox

const LBCss = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(17, 26, 42, 0.5);
    .lb-container {
        height: 99vh;
        margin: auto;

    }
    .lb-image {
        height: 100%;
    }
    .lb-caption {
        text-align: center;
    }
`