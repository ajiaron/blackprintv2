import Image from "next/image";
import React, {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'
import styles from "../../styles/page.module.scss";
export default function Print({width, height}) {
  return (
    // 1235 x 688
    <span className={styles.printContainer}>

    <svg width={`${Math.max(width*0.857638, 1235)}`} height={`${Math.max(height*0.88318, 688)}`} viewBox="0 0 1235 688" fill="none" xmlns="http://www.w3.org/2000/svg" style={{objectFit:"cover"}}>
    <g style={{mixBlendMode:"overlay"}}>
    <path className={styles.printPath} d="M418.7 107L418.756 106.771L418.798 106.54C429.154 50.088 420.288 -4.93677 393.071 -51.1015C369.843 -99.4876 327.93 -136.57 274 -157" stroke="url(#paint0_linear_2071_6576)" stroke-opacity="0.5" stroke-width="28" stroke-linecap="round"/>
    <path className={styles.printPath} d="M308.221 225L308.229 224.988C324.707 199.562 342.686 166.381 349.335 126.365C356.011 86.1911 351.184 39.6216 322.892 -12.3462C304.933 -47.9011 276.364 -77.3928 239.768 -98.3672C203.154 -119.351 159.639 -131.167 113.01 -133H113" stroke="url(#paint1_linear_2071_6576)" stroke-opacity="0.5" stroke-width="28" stroke-linecap="round"/>
    <path className={styles.printPath} d="M2.06366 347C49.0154 338.967 95.4556 324.203 139.264 303.403L139.392 303.343L139.516 303.278C198.799 272.841 245.871 225.81 270.166 172.17C294.47 118.511 294.078 62.307 268.101 16.1411C256.152 -6.48556 238.466 -25.9506 216.142 -41.1596C193.796 -56.3838 167.292 -67.0134 138.228 -72.5534C109.167 -78.0927 78.0702 -78.4455 46.7186 -73.6738C15.4618 -68.9166 -15.502 -59.1497 -44.4358 -44.9494C-53.7258 -41.0952 -62.326 -35.7749 -69.6913 -29.3064C-77.1307 -22.7727 -83.2015 -15.1618 -87.4358 -6.91746C-91.6711 1.32888 -94.0006 10.0815 -94.1003 18.776C-94.1978 27.285 -92.1531 35.4962 -88.0118 42.8229C-85.0266 49.9855 -80.2801 56.2942 -74.0927 61.3912C-67.7567 66.6103 -60.1041 70.4019 -51.6726 72.6544C-43.2468 74.9053 -34.1768 75.5857 -24.9983 74.7511C-15.8477 73.9191 -6.70263 71.5924 1.93679 67.9357C35.2801 54.5487 62.1337 50.166 82.8848 53.4601C103.097 56.6685 118.389 67.2823 128.99 86.2013C139.592 105.12 129.123 86.4387 129.123 86.4387L129.272 86.6677C134.419 94.5913 137.304 103.729 137.668 113.56C138.033 123.407 135.86 133.801 131.116 144.059C126.372 154.32 119.186 164.161 109.947 172.882C100.711 181.603 89.6876 188.952 77.6032 194.421L77.4153 194.507L77.2316 194.601C-18.6321 243.374 -124.039 238.647 -205 183.084" stroke="url(#paint2_linear_2071_6576)" stroke-opacity="0.5" stroke-width="28" stroke-linecap="round"/>
    <path className={styles.printPath} d="M-7.39923 18.3734L-7.35761 18.3513C11.7635 8.21243 32.3152 1.02737 53.0787 -2.80056C73.8046 -6.62149 94.2637 -7.01004 113.268 -4.02003C133.549 -0.241852 151.689 7.07944 166.721 17.4053C181.766 27.7412 193.446 40.9121 201.175 56.1373L201.236 56.2575L201.302 56.3757C224.467 98.2577 219.956 136.607 201.024 169.322C181.867 202.422 147.759 229.936 111.813 248.469C42.77 283.816 -34.2905 297.814 -103.364 287.888L-103.681 287.843L-104 287.822" stroke="url(#paint3_linear_2071_6576)" stroke-opacity="0.5" stroke-width="28" stroke-linecap="round"/>
    <path className={styles.printPath} d="M-150 61L-149.997 61.0076L-149.994 61.0152C-147.085 69.3614 -143.638 77.4602 -139.671 85.2757L-139.569 85.4761L-139.478 85.682C-126.566 114.775 -101.601 136.911 -68.5778 147.761C-50.0202 152.62 -29.7259 153.744 -8.91434 150.967C11.9782 148.18 32.89 141.53 52.5238 131.395L52.5354 131.389" stroke="url(#paint4_linear_2071_6576)" stroke-opacity="0.5" stroke-width="28" stroke-linecap="round"/>
    </g>
    <g style={{mixBlendMode:"overlay"}}>
    <path className={styles.printPath} d="M761.001 655.928L760.964 656.179L760.939 656.432C755.04 718.145 767.844 777.01 797.939 825.053C824.298 875.768 868.093 912.997 922.398 931.414" stroke="url(#paint5_linear_2071_6576)" stroke-opacity="0.45" stroke-width="28" stroke-linecap="round"/>
    <path className={styles.printPath} d="M849.725 521.837L849.718 521.851C836.388 550.872 822.431 588.4 820.272 632.186C818.104 676.144 827.855 725.869 861.092 779.113C882.467 815.679 913.542 844.669 951.529 863.692C989.534 882.723 1033.28 891.196 1078.99 888.603L1079 888.602" stroke="url(#paint6_linear_2071_6576)" stroke-opacity="0.46" stroke-width="28" stroke-linecap="round"/>
    <path className={styles.printPath} d="M1131.43 369.593C1089.15 380.75 1047.81 398.733 1009.3 422.699L1009.19 422.768L1009.08 422.842C957.133 457.605 917.501 508.501 899.122 564.687C880.736 620.893 885.068 678.127 912.039 723.515C924.544 745.809 942.061 764.52 963.51 778.6C984.979 792.695 1009.92 801.845 1036.83 805.648C1063.75 809.451 1092.15 807.84 1120.43 800.993C1148.62 794.167 1176.18 782.255 1201.58 765.956C1209.79 761.441 1217.26 755.476 1223.53 748.419C1229.85 741.292 1234.86 733.153 1238.14 724.486C1241.42 715.816 1242.93 706.752 1242.4 697.888C1241.89 689.213 1239.44 680.977 1235.15 673.775C1231.91 666.667 1227.14 660.541 1221.13 655.74C1214.98 650.824 1207.73 647.446 1199.87 645.685C1192.02 643.926 1183.7 643.807 1175.38 645.239C1167.09 646.666 1158.91 649.616 1151.28 653.888C1121.8 669.639 1097.6 675.805 1078.43 673.763C1059.76 671.775 1045.05 661.93 1034.04 643.328C1023.03 624.725 1033.9 643.094 1033.9 643.094L1033.75 642.87C1028.49 635.124 1025.21 625.997 1024.19 616.005C1023.16 605.996 1024.4 595.269 1028.01 584.518C1031.61 573.764 1037.47 563.283 1045.29 553.813C1053.1 544.344 1062.64 536.158 1073.28 529.821L1073.45 529.722L1073.61 529.615C1157.65 473.854 1254.18 471.992 1331.99 523.47" stroke="url(#paint7_linear_2071_6576)" stroke-opacity="0.46" stroke-width="28" stroke-linecap="round"/>
    <path className={styles.printPath} d="M1184.56 721.722L1184.52 721.75C1166.6 734.436 1147.04 743.901 1127.01 749.611C1107.02 755.31 1087.02 757.137 1068.18 755.07C1048.03 752.205 1029.7 745.216 1014.18 734.64C998.65 724.055 986.189 710.057 977.435 693.484L977.366 693.353L977.293 693.224C951.351 647.763 952.778 604.388 968.761 566.362C984.935 527.887 1016.18 494.67 1049.92 471.414C1114.76 427.026 1189.11 406.07 1257.5 412.523L1257.81 412.553L1258.13 412.555" stroke="url(#paint8_linear_2071_6576)" stroke-opacity="0.46" stroke-width="28" stroke-linecap="round"/>
    <path className={styles.printPath} d="M1305 659.344L1305 659.336L1304.99 659.328C1301.52 650.505 1297.54 641.987 1293.07 633.81L1292.96 633.6L1292.85 633.384C1278.03 602.818 1251.95 580.592 1218.82 571.108C1200.29 567.117 1180.35 567.281 1160.19 571.695C1139.96 576.126 1119.99 584.734 1101.54 597.021L1101.53 597.027" stroke="url(#paint9_linear_2071_6576)" stroke-opacity="0.46" stroke-width="28" stroke-linecap="round"/>
    </g>
    <defs>
    <linearGradient id="paint0_linear_2071_6576" x1="340.958" y1="-111.881" x2="383.845" y2="118.66" gradientUnits="userSpaceOnUse">
    <stop stop-color="#999999"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint1_linear_2071_6576" x1="227.037" y1="-80.5953" x2="306.492" y2="225.412" gradientUnits="userSpaceOnUse">
    <stop stop-color="#999999"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint2_linear_2071_6576" x1="13.8035" y1="33.9046" x2="129.794" y2="312.129" gradientUnits="userSpaceOnUse">
    <stop stop-color="#999999"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint3_linear_2071_6576" x1="40.2521" y1="44.7585" x2="66.0749" y2="310.585" gradientUnits="userSpaceOnUse">
    <stop stop-color="#999999"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint4_linear_2071_6576" x1="-61.7155" y1="51.4937" x2="-6.98629" y2="174.039" gradientUnits="userSpaceOnUse">
    <stop stop-color="#999999"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint5_linear_2071_6576" x1="853.493" y1="887.2" x2="785.51" y2="643.391" gradientUnits="userSpaceOnUse">
    <stop stop-color="#999999"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint6_linear_2071_6576" x1="962.031" y1="843.288" x2="836.072" y2="527.32" gradientUnits="userSpaceOnUse">
    <stop stop-color="#999999"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint7_linear_2071_6576" x1="1142.86" y1="689.31" x2="996.602" y2="424.665" gradientUnits="userSpaceOnUse">
    <stop stop-color="#999999"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint8_linear_2071_6576" x1="1135.86" y1="695.328" x2="1082.03" y2="399.974" gradientUnits="userSpaceOnUse">
    <stop stop-color="#999999"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <linearGradient id="paint9_linear_2071_6576" x1="1219.32" y1="675.614" x2="1147.43" y2="552.218" gradientUnits="userSpaceOnUse">
    <stop stop-color="#999999"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    </defs>
    </svg>
    </span>
  )
}
