import React from 'react';
import './Logo.css';

type LogoProps = {
    hover: boolean,
    minimized: boolean
}

/**
 * Logo is the main team logo. We will have to modify this as the team logo changes.
 * 
 * Do not wrap anything to the next line in this file, otherwise you will mess up the SVG points
 * 
 * Last Modified
 * William Kwok
 * June 16, 2019
 */
export const Logo: React.FC<LogoProps> = ({ hover, minimized }) => {
    return <div className={`logo-outside ${minimized ? "logo-outside-minimized" :
        "logo-outside-regular"}`}>
        <svg
            className={`logo logo-white ${minimized ? "logo-minimized" : "logo-non-minimized"}`}
            id="white" xmlns="http://www.w3.org/2000/svg" viewBox="-205 297 200 200"><polygon
                className="white-1"
                points="-127.9,356.01 -120.88,354.88 -153.03,330.65 -144.88,367.78" />
            <polygon className="white-1"
                points="-49.41,362.59 -115,303.92 -115.44,358.5 -126,360.61 -154.5,379.51 -166.44,407.03 -187.93,421.25 -195.11,427.34 -198.52,439 -189.37,445.82 -184.71,451.02 -175.2,456.76 -177,451.56 -170.37,450.3 -156.2,449.05 -149.56,444.05 -135.2,450.1 -141.84,470.55 -149,472.37 -144.15,478.28 -145.58,484.74 -130.16,485.1 -88.37,451.56 -78.86,454.97 -59.86,459.97 -43.54,479.16 -36.41,421.22 -33.55,393.86 -33.44,383.86" />
        </svg>
        <svg
            className={`logo logo-purple ${minimized ? "logo-minimized" : "logo-non-minimized"} 
                ${hover ? "logo-purple-hover" : "logo-purple-nonhover"}`}
            id="purple"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200">
            <polygon className="cls-1" points="51.97 33.65 60.12 70.78 66.91 50.4 51.97 33.65" />
            <polygon className="cls-2" points="84.12 57.88 51.97 33.65 66.91 50.4 77.1 59.01 84.12 57.88" />
            <polygon className="cls-3" points="60.12 70.78 77.1 59.01 66.91 50.4 60.12 70.78" />
            <polygon className="cls-4" points="90.01 6.92 89.56 61.5 97.03 47.91 90.01 6.92" />
            <polygon className="cls-5" points="100.31 22.4 95.97 41.49 90.01 6.92 100.31 22.4" />
            <polygon className="cls-2" points="155.62 65.59 133.03 45.87 133.03 60.8 155.62 65.59" />
            <polygon className="cls-2" points="116.76 57.55 133.03 60.8 133.03 45.87 116.76 57.55" />
            <polygon className="cls-3" points="155.62 65.59 129.01 78.22 106.23 71.52 129.97 60.23 155.62 65.59" />
            <polygon className="cls-2" points="171.51 86.84 155.62 65.59 132.91 76.37 171.51 86.84" />
            <polygon className="cls-2" points="129.01 78.22 152.78 94.98 171.4 96.84 171.51 86.84 132.91 76.37 129.01 78.22" />
            <polygon className="cls-6" points="89.56 61.5 105.41 53.8 116.76 57.55 89.56 61.5" />
            <polygon className="cls-3" points="106.23 71.52 62.85 87.16 78.98 63.61 89.56 61.5 116.76 57.55 129.97 60.23 106.23 71.52" />
            <polygon className="cls-3" points="152.78 94.98 132.84 92.95 124.13 79.55 129.01 78.22 152.78 94.98" />
            <polygon className="cls-2" points="87.92 93.48 100.28 103.75 129.71 103.92 108.11 85.47 87.92 93.48" />
            <polygon className="cls-2" points="139.63 104.97 132.84 92.95 124.13 79.55 108.11 85.47 129.71 103.92 139.63 104.97" />
            <polygon className="cls-1" points="62.85 87.16 87.92 93.48 108.11 85.47 124.13 79.55 129.01 78.22 106.23 71.52 62.85 87.16" />
            <polygon className="cls-1" points="44.56 95.74 50.48 82.51 78.98 63.61 62.85 87.16 44.56 95.74" />
            <polygon className="cls-7" points="48.39 106.54 62.85 87.16 44.56 95.74 48.39 106.54" />
            <polygon className="cls-3" points="91.57 108.45 100.28 103.75 87.92 93.48 79.91 99.75 91.57 108.45" />
            <polygon className="cls-3" points="62.85 87.16 79.91 99.75 87.92 93.48 62.85 87.16" />
            <polygon className="cls-2" points="56.23 102.53 59.88 112.28 71.38 106.01 56.23 102.53" />
            <polygon className="cls-8" points="55.93 96.49 60.75 103.4 56.23 102.53 57.81 106.7 49.96 104.45 55.93 96.49" />
            <polygon className="cls-4" points="62.85 87.16 55.93 96.49 60.75 103.4 71.38 106.01 79.91 99.75 62.85 87.16" />
            <polygon className="cls-9" points="132.84 92.95 171.4 96.84 168.58 124.25 139.63 104.97 132.84 92.95" />
            <polygon className="cls-2" points="38.54 110.03 44.56 95.74 48.39 106.54 50.1 112.87 38.54 110.03" />
            <polygon className="cls-10" points="55.6 115.33 59.88 112.28 57.81 106.7 49.96 104.45 48.39 106.54 50.1 112.87 55.6 115.33" />
            <polygon className="cls-11" points="91.57 108.45 71.38 106.01 79.91 99.75 91.57 108.45" />
            <polygon className="cls-11" points="55.6 115.33 59.88 112.28 71.38 106.01 91.57 108.45 55.6 115.33" />
            <polygon className="cls-10" points="73.8 125.95 91.57 108.45 55.6 115.33 73.8 125.95" />
            <polygon className="cls-11" points="100.28 103.75 123.28 119.88 142.8 107.37 139.63 104.97 129.71 103.92 100.28 103.75" />
            <polygon className="cls-10" points="140.06 139.41 140.06 118.43 135.8 111.9 123.28 119.88 140.06 139.41" />
            <polygon className="cls-12" points="168.58 124.25 140.06 118.43 135.8 111.9 142.8 107.37 168.58 124.25" />
            <polygon className="cls-13" points="140.06 139.41 164.5 151.51 140.06 118.43 140.06 139.41" />
            <polygon className="cls-9" points="168.58 124.25 164.5 151.51 140.06 118.43 168.58 124.25" />
            <polygon className="cls-13" points="140.06 139.41 145.13 162.99 161.45 182.18 164.5 151.51 140.06 139.41" />
            <polygon className="cls-12" points="91.86 133.57 123.28 119.88 131.86 129.81 104.42 142.9 91.86 133.57" />
            <polygon className="cls-11" points="116.61 154.56 140.06 139.41 131.86 129.81 104.42 142.9 116.61 154.56" />
            <polygon className="cls-14" points="145.13 162.99 126.12 157.97 140.06 139.41 145.13 162.99" />
            <polygon className="cls-14" points="116.61 154.56 126.12 157.97 140.06 139.41 116.61 154.56" />
            <polygon className="cls-3" points="17.07 124.25 38.54 110.03 50.1 112.87 17.07 124.25" />
            <polygon className="cls-10" points="35.18 128.55 50.1 112.87 17.07 124.25 23.88 128.37 35.18 128.55" />
            <polygon className="cls-15" points="73.8 125.95 55.6 115.33 50.1 112.87 38.59 124.96 73.8 125.95" />
            <polygon className="cls-9" points="23.88 128.37 22.27 136.62 36.98 141.64 73.8 125.95 38.59 124.96 35.18 128.55 23.88 128.37" />
            <polygon className="cls-7" points="17.07 124.25 9.89 130.34 22.27 136.62 23.88 128.37 17.07 124.25" />
            <polygon className="cls-3" points="6.48 142 22.27 136.62 9.89 130.34 6.48 142" />
            <polygon className="cls-2" points="15.63 148.82 22.27 136.62 6.48 142 15.63 148.82" />
            <polygon className="cls-11" points="36.98 141.64 34.64 153.3 28.01 154.56 29.8 159.76 20.3 154.02 15.63 148.82 22.27 136.62 36.98 141.64" />
            <polygon className="cls-9" points="100.28 103.75 91.57 108.45 83.25 116.53 99.75 122.27 123.28 119.88 100.28 103.75" />
            <polygon className="cls-9" points="73.8 125.95 91.86 133.57 123.28 119.88 99.75 122.27 83.25 116.53 73.8 125.95" />
            <polygon className="cls-16" points="82.53 155.46 104.42 142.9 116.61 154.56 82.53 155.46" />
            <polygon className="cls-11" points="92.94 173.21 116.61 154.56 82.53 155.46 74.28 169.8 92.94 173.21" />
            <polygon className="cls-17" points="74.82 188.1 92.94 173.21 74.28 169.8 69.98 178.41 74.82 188.1" />
            <polygon className="cls-9" points="59.4 187.74 69.98 178.41 74.82 188.1 59.4 187.74" />
            <polygon className="cls-3" points="82.53 155.46 69.8 153.12 63.16 173.57 60.83 181.28 59.4 187.74 69.98 178.41 74.28 169.8 82.53 155.46" />
            <polygon className="cls-14" points="55.45 147.03 69.8 153.12 82.53 155.46 81.08 145.18 55.45 147.03" />
            <polygon className="cls-18" points="36.98 141.64 51.32 135.37 68.85 146.06 55.45 147.03 48.81 152.05 34.64 153.3 36.98 141.64" />
            <polygon className="cls-2" points="56.23 102.53 59.88 112.28 71.38 106.01 56.23 102.53" />
            <polygon className="cls-2" points="116.05 30.25 90.01 6.92 100.31 22.4 116.05 30.25" />
            <polygon className="cls-1" points="100.31 22.4 110.79 34.64 116.05 30.25 100.31 22.4" />
            <polygon className="cls-11" points="89.56 61.5 105.41 53.8 97.03 47.91 89.56 61.5" />
            <polygon className="cls-19" points="110.79 34.64 97.03 47.91 105.41 53.8 116.76 57.55 110.79 34.64" />
            <polygon className="cls-20" points="100.31 22.4 95.97 41.49 97.03 47.91 110.79 34.64 100.31 22.4" />
            <polygon className="cls-2" points="133.03 45.87 116.05 30.25 110.79 34.64 116.76 57.55 133.03 45.87" />
            <polygon className="cls-14" points="104.42 142.9 81.08 145.18 82.53 155.46 104.42 142.9" />
            <polygon className="cls-10" points="73.8 125.95 51.32 135.37 68.85 146.06 81.08 145.18 104.42 142.9 91.86 133.57 73.8 125.95" />
            <polygon className="cls-10" points="55.98 175.37 63.16 173.57 60.83 181.28 55.98 175.37" />
            <polygon className="cls-1" points="87.92 93.48 108.11 85.47 129.71 103.92 100.28 103.75 87.92 93.48" />
        </svg>
    </div>
}