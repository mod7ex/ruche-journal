import type React from 'react';
import profileImg from '~/assets/profile.jpg';

export default function ({ src, ...props }: React.ImgHTMLAttributes<any>) {
    return (
        <img
            {...props}
            src={src == '' ? profileImg : src}
            onError={(e) => {
                // @ts-ignore
                e.target.onerror = null;
                // @ts-ignore
                e.target.src = profileImg;
            }}
        />)
}