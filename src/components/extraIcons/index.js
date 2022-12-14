/* eslint-disable react/no-unknown-property */
import Icon from "@ant-design/icons";
import React from "react";

const SunSvg = () => (
  <svg
    t="1670998851879"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2696"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path
      d="M448 64v195.2a224.832 224.832 0 0 0-100.992 42.24L208.512 163.2l-45.248 45.312 138.24 138.496A218.624 218.624 0 0 0 259.008 448H64v64h195.008c5.504 37.76 20.48 72 42.496 100.992l-138.24 138.496 45.248 45.248 138.496-138.496c28.992 21.76 63.488 36.992 100.992 42.496V896h64v-195.2a222.4 222.4 0 0 0 100.992-42.56l138.496 138.496 45.248-45.248-138.496-138.496A216.32 216.32 0 0 0 700.992 512H896V448h-195.008a216.32 216.32 0 0 0-42.752-100.992l138.496-138.496-45.248-45.248-138.496 138.24A224.832 224.832 0 0 0 512 259.2V64z m32 256C568.768 320 640 391.232 640 480S568.768 640 480 640A159.488 159.488 0 0 1 320 480C320 391.232 391.232 320 480 320z"
      p-id="2697"
    ></path>
  </svg>
);

const MoonSvg = () => (
  <svg
    t="1670998960379"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3604"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path
      d="M558.27 1024c157.512 0 301.964-71.608 397.688-189.55 56.54-69.662-5.116-171.444-92.498-154.802-164.696 31.366-316.544-94.536-316.544-261.584 0-96.848 52.12-184.584 134.868-231.672 77.49-44.1 57.998-161.576-30.044-177.838A515.872 515.872 0 0 0 558.27 0c-282.72 0-512 229.15-512 512 0 282.72 229.152 512 512 512z m0-928c25.97 0 51.378 2.402 76.032 6.956-109.52 62.326-183.386 180.084-183.386 315.108 0 227.696 207.282 398.4 430.504 355.888C805.148 867.928 688.732 928 558.27 928c-229.75 0-416-186.25-416-416s186.25-416 416-416z"
      p-id="3605"
    ></path>
  </svg>
);

const ThemeSvg = () => (
  <svg
    t="1670999030751"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4672"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path
      d="M320 85.333333C243.626667 134.4 192 221.013333 192 320 192 418.986667 243.626667 505.6 321.28 554.666667 190.293333 554.666667 85.333333 449.706667 85.333333 320 85.333333 190.293333 190.293333 85.333333 320 85.333333M813.653333 149.333333 874.666667 210.346667 210.346667 874.666667 149.333333 813.653333 813.653333 149.333333M549.973333 253.013333 486.826667 213.333333 425.386667 256 443.306667 183.466667 384 138.24 458.666667 133.12 483.413333 62.72 512 132.266667 585.813333 133.546667 528.213333 181.76 549.973333 253.013333M409.173333 407.04 359.68 375.893333 311.893333 409.173333 326.4 352.853333 279.893333 317.44 337.92 313.6 357.12 258.56 378.88 312.746667 436.906667 314.026667 392.106667 351.146667 409.173333 407.04M810.666667 576C810.666667 705.706667 705.706667 810.666667 576 810.666667 523.946667 810.666667 475.733333 793.6 436.906667 765.013333L765.013333 436.906667C793.6 475.733333 810.666667 523.946667 810.666667 576M622.933333 856.746667 741.12 807.68 730.88 950.613333 622.933333 856.746667M807.68 741.546667 856.746667 623.36 950.613333 731.733333 807.68 741.546667M856.746667 529.92 808.106667 411.306667 950.613333 421.546667 856.746667 529.92M410.88 807.68 529.066667 856.746667 421.12 950.186667 410.88 807.68Z"
      p-id="4673"
    ></path>
  </svg>
);

export const SunOutlined = (props) => <Icon component={SunSvg} {...props} />;
export const MoonOutlined = (props) => <Icon component={MoonSvg} {...props} />;
export const ThemeOutlined = (props) => (
  <Icon component={ThemeSvg} {...props} />
);