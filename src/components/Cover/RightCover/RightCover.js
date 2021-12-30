import styles from './RightCover.module.css'

export default function RightCover(props) {
    return (
        <div id={styles.container}>
            <div id={styles.top}>
                <div id={styles.top_row}>
                    <svg viewBox="0 0 547.000000 132.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,132.000000) scale(0.100000,-0.100000)">
                            <path d="M 0 648 l 0 -648 l 2735 0 c 1818 -3 2735 3 2690 -4 c 0 6 -44 10 -112 10 c -170 0 -416 35 -613 87 c -80 21 -215 62 -240 73 c -11 4 -56 23 -100 40 c -194 78 -425 214 -565 335 c -44 38 -153 147 -203 203 c -38 42 -164 136 -242 180 c -91 51 -235 122 -310 152 c -44 17 -89 35 -100 40 c -19 8 -132 42 -250 74 c -72 21 -247 53 -365 69 c -42 5 -577 12 -1223 16 l -1147 6 l 0 -647 z" />
                        </g>
                    </svg>
                </div>
            </div>
            <div id={styles.bottom}></div>
        </div>
    )
}