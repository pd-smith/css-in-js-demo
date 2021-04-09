import React from 'react';
import { Global, css } from '@emotion/react'

export default function GlobalStyles() {
    return (
        <Global
            styles={css`
                html,body {
                    font-size: 20px;
                }
            `}
        />
    )
}
