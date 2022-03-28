import React from 'react'
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Pic = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .gray {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }

`

const imageOverlay = ({src}) => {
    return <Pic>
        <div className="gray">
            
            <img src={src} />
        </div>
    </Pic>
}