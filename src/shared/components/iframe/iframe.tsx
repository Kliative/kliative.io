import React from 'react';
import './iframe.scss';

const KioFrame = (props: any) => (
    
        <div>
            <iframe src={props.src} height={props.height} width={props.width} />
        </div>
    
)

export default KioFrame;
