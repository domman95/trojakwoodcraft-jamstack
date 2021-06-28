import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

export default function Logo() {
  return (
    <svg
      width="1001"
      height="174"
      viewBox="0 0 1001 174"
      fill="none"
      id="logo"
      xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1" fill="white">
        <path d="M99.9929 16.355H45.3727V5.71038H171.044V16.355H116.423V122.135H99.9929V16.355Z" />
        <path d="M303.424 122.135L267.899 84.7131C263.902 85.0457 259.757 85.2121 255.465 85.2121H213.723V122.135H197.292V5.71038H255.465C275.3 5.71038 290.842 9.25857 302.092 16.355C313.341 23.4513 318.966 33.2089 318.966 45.6275C318.966 54.7198 315.858 62.426 309.641 68.7462C303.572 74.9556 294.839 79.4462 283.441 82.2183L321.409 122.135H303.424ZM255.021 74.7338C270.415 74.7338 282.183 72.1835 290.324 67.083C298.465 61.9825 302.536 54.8307 302.536 45.6275C302.536 36.2027 298.465 28.9954 290.324 24.0057C282.183 18.9052 270.415 16.355 255.021 16.355H213.723V74.7338H255.021Z" />
        <path d="M564.386 123.133C555.505 123.133 547.289 121.692 539.74 118.809C532.191 115.926 526.048 111.823 521.311 106.501L531.081 98.1851C539.666 107.721 550.842 112.489 564.608 112.489C583.851 112.489 593.472 103.951 593.472 86.8752V16.3549H536.632V5.71034H609.681V86.3763C609.681 98.5732 605.832 107.776 598.135 113.986C590.586 120.084 579.336 123.133 564.386 123.133Z" />
        <path d="M753.187 91.0333H666.594L647.943 122.135H630.847L701.897 5.71034H718.106L789.156 122.135H771.838L753.187 91.0333ZM747.192 81.054L709.891 18.5171L672.589 81.054H747.192Z" />
        <path d="M863.048 67.4156L831.298 91.5322V122.135H814.867V5.71034H831.298V76.0643L922.553 5.71034H941.426L874.15 58.4343L946.089 122.135H926.55L863.048 67.4156Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M450.371 1.63128C443.04 0.554344 435.352 0 427.428 0C376.982 0 332.434 29.1206 332.434 65.8633C332.434 72.8299 334.036 79.4029 336.975 85.4811C337.183 85.9997 337.325 86.4398 337.455 86.8406C337.817 87.9595 338.08 88.7717 339.382 90.1306L339.507 90.0751C354.011 113.439 389.009 128.4 427.428 128.4C451.63 128.4 473.633 120.932 489.976 109.105L489.98 109.107C490.067 109.043 490.152 108.979 490.236 108.916C490.491 108.73 490.746 108.542 490.999 108.354C492.214 107.466 493.21 106.782 494.071 106.191C496.944 104.219 498.313 103.279 501.312 99.2642C512.291 87.7765 518.768 73.8337 518.768 59.2104C518.768 28.2594 489.75 7.43778 450.449 1.64265L450.525 1.33062L450.371 1.63128ZM496.941 96.6973C507.175 85.9322 513.218 72.8899 513.218 59.2104C513.218 42.103 503.758 28.469 488.484 19.0348C477.973 12.5422 464.585 7.97211 449.442 5.73159L448.667 8.8791C483.783 14.1757 509.635 32.6727 509.635 60.086C509.635 72.9115 503.976 85.1496 494.357 95.293L496.941 96.6973ZM448.331 10.2422C462.201 12.3375 474.549 16.5243 484.336 22.4973C498.825 31.34 507.784 44.1413 507.784 60.086C507.784 72.6114 502.255 84.5668 492.86 94.4792L489.98 92.9144L488.415 92.3928C497.175 83.2007 502.327 72.1158 502.327 60.4997C502.327 35.8009 479.035 19.0824 447.296 14.1531L447.466 13.7553L448.331 10.2422ZM446.119 9.92744C440.074 9.12009 433.756 8.70419 427.249 8.70419C382.578 8.70419 343.419 34.1724 343.419 66.015C343.419 71.6894 344.665 77.0711 346.967 82.0836L349.238 81.6401L352.077 80.5946C350 76.0028 348.876 71.0756 348.876 65.8772C348.876 36.1784 385.562 12.6405 427.106 12.6405C432.979 12.6405 438.695 13.0034 444.18 13.7106L446.119 9.92744ZM446.794 8.61036C440.529 7.7568 433.983 7.31818 427.249 7.31818C381.749 7.31818 341.569 33.2702 341.569 66.015C341.569 71.82 342.831 77.3183 345.163 82.4362L342.144 83.0259L341.805 83.1757C339.325 77.7662 337.985 71.9655 337.985 65.8633C337.985 31.7827 379.536 4.15804 427.428 4.15804C434.671 4.15804 441.677 4.64163 448.35 5.57454L446.794 8.61036ZM442.438 16.3037C437.511 15.7156 432.382 15.4125 427.106 15.4125C387.197 15.4125 352.576 37.9991 352.576 65.8772C352.576 70.6496 353.596 75.1955 355.488 79.4513L362.466 78.2743C360.759 74.3457 359.837 70.1384 359.837 65.7048C359.837 39.8135 391.282 19.2933 426.891 19.2933C431.266 19.2933 435.54 19.5324 439.671 19.9997L442.438 16.3037ZM446.162 16.8082C458.462 18.6762 469.36 22.3697 477.967 27.5878C490.739 35.3305 498.627 46.5129 498.627 60.4997C498.627 71.713 493.555 82.4168 484.961 91.2418L479.023 89.2629C486.786 81.1638 491.366 71.3304 491.366 61.0168C491.366 39.5682 471.556 25.0228 444.514 20.6626L446.162 16.8082ZM443.947 21.989C454.482 23.6679 463.854 26.9208 471.306 31.5159C482.555 38.4522 489.516 48.4934 489.516 61.0168C489.516 71.1345 484.974 80.7759 477.297 88.6875L475.115 87.9603L472.616 86.8354C479.802 79.599 484.059 70.7363 484.059 61.4305C484.059 42.3037 466.073 29.3984 441.643 25.704L443.313 23.4723L443.947 21.989ZM438.702 21.294C434.882 20.8876 430.934 20.6794 426.891 20.6794C392.13 20.6794 361.687 40.7031 361.687 65.7048C361.687 70.0256 362.599 74.1315 364.288 77.967L369.661 77.0606C368.028 73.4794 367.144 69.6309 367.144 65.5669C367.144 42.7217 395.096 24.6157 426.748 24.6157C430.326 24.6157 433.827 24.7942 437.224 25.1438L438.502 21.5614L438.702 21.294ZM435.779 29.1945C432.858 28.9167 429.841 28.7737 426.748 28.7737C397.599 28.7737 372.695 45.4176 372.695 65.5669C372.695 85.455 397.198 100.292 426.748 100.292C439.272 100.292 450.785 96.7679 459.757 91.0677L456.872 89.6459C448.581 94.6946 438.041 97.7971 426.568 97.7971C399.862 97.7971 376.278 84.4323 376.278 65.3946C376.278 46.3569 399.862 31.2685 426.568 31.2685C429.409 31.2685 432.193 31.4002 434.9 31.6586L435.779 29.1945ZM438.778 29.5312C448.564 30.8016 457.145 33.6263 463.761 37.6759C472.874 43.2537 478.508 51.2863 478.508 61.4305C478.508 69.9618 474.524 78.0878 467.834 84.6827L464.984 83.3998C471.22 77.3185 474.925 69.8235 474.925 61.9475C474.925 45.4662 458.699 34.5283 437.013 31.888L438.778 29.5312ZM436.048 33.1774C445.205 34.2126 453.328 36.7559 459.6 40.5475C467.93 45.5832 473.075 52.8615 473.075 61.9475C473.075 69.5612 469.46 76.812 463.387 82.681L458.869 80.6473C464.35 75.4923 467.618 69.0924 467.618 62.3612C467.618 48.0075 452.76 38.6592 433.265 36.8948L436.048 33.1774ZM434.417 33.01C431.87 32.7748 429.248 32.6545 426.568 32.6545C400.674 32.6545 378.128 47.2707 378.128 65.3946C378.128 83.4321 400.539 96.4111 426.568 96.4111C437.387 96.4111 447.345 93.5378 455.247 88.8453L451.406 86.9523L450.811 86.4488C443.983 90.2026 435.551 92.4749 426.425 92.4749C403.675 92.4749 383.585 81.2484 383.585 65.2567C383.585 49.2651 403.675 36.5908 426.425 36.5908C428.676 36.5908 430.886 36.6866 433.039 36.8746L434.417 33.01ZM347.239 86.4264L344.339 87.9355C357.683 109.852 390.463 124.242 427.428 124.242C449.79 124.242 470.202 117.413 485.501 106.557L482.532 105.347C467.914 115.426 448.524 121.747 427.249 121.747C391.954 121.747 359.86 107.915 347.239 86.4264ZM427.249 120.361C392.365 120.361 360.984 106.667 348.798 85.6154L349.675 85.1588L353.587 83.5806C364.771 103.532 394.436 116.425 427.106 116.425C445.822 116.425 462.942 111.102 476.105 102.536L476.615 102.935L480.813 104.646C466.576 114.313 447.808 120.361 427.249 120.361ZM427.106 113.653C395.391 113.653 367.306 101.147 356.882 82.2515L358.715 81.5121L363.191 79.8316C372.2 97.9668 398.193 109.772 426.891 109.772C443.189 109.772 458.075 104.982 469.427 97.3048L473.544 100.53C461.046 108.623 444.824 113.653 427.106 113.653ZM426.891 108.386C398.704 108.386 373.508 96.7927 364.864 79.2035L369.796 77.3518C377.482 93.7376 400.879 104.45 426.748 104.45C441.222 104.45 454.442 100.232 464.529 93.4683L468.147 96.3025C457.123 103.745 442.682 108.386 426.891 108.386ZM455.667 79.2055C460.831 74.4724 463.917 68.5576 463.917 62.3612C463.917 55.2462 459.859 49.5889 453.248 45.6482C446.566 41.6649 437.127 39.3629 426.425 39.3629C405.247 39.3629 387.285 51.1267 387.285 65.2567C387.285 79.2158 404.978 89.7028 426.425 89.7028C434.616 89.7028 442.185 87.6898 448.346 84.3647L444.904 81.4551C439.638 84.181 433.199 85.822 426.246 85.822C408.442 85.822 392.719 77.2685 392.719 65.0844C392.719 52.9002 408.442 43.2437 426.246 43.2437C444.051 43.2437 458.484 50.6941 458.484 62.8782C458.484 68.1546 455.777 73.1638 451.262 77.1477L453.498 78.2291L455.667 79.2055ZM449.693 76.3885C454.033 72.6178 456.634 67.8618 456.634 62.8782C456.634 57.2415 453.319 52.7275 447.909 49.5876C442.46 46.4257 434.823 44.6297 426.246 44.6297C409.179 44.6297 394.569 53.8632 394.569 65.0844C394.569 76.2219 409.043 84.436 426.246 84.436C432.741 84.436 438.743 82.9223 443.669 80.4105L440.162 77.4455C436.152 79.3573 431.313 80.4996 426.103 80.4996C412.255 80.4996 400.026 74.0845 400.026 64.9464C400.026 55.8083 412.255 48.5659 426.103 48.5659C439.951 48.5659 451.177 54.1537 451.177 63.2918C451.177 67.3604 448.951 71.2171 445.26 74.2442L449.693 76.3885ZM443.681 73.4802C447.208 70.6613 449.327 67.0525 449.327 63.2918C449.327 59.1989 446.839 55.9142 442.725 53.6124C438.572 51.2881 432.716 49.9519 426.103 49.9519C412.924 49.9519 401.877 56.8138 401.877 64.9464C401.877 72.9978 412.788 79.1136 426.103 79.1136C430.864 79.1136 435.262 78.0951 438.92 76.3958L436.215 74.1088C433.31 75.6079 429.774 76.508 425.96 76.508C416.068 76.508 407.334 71.6966 407.334 64.8431C407.334 57.9895 416.068 52.5577 425.96 52.5577C435.851 52.5577 443.87 56.7486 443.87 63.6021C443.87 66.5706 442.365 69.3888 439.856 71.6299L443.681 73.4802ZM436.716 70.1109C438.874 68.3014 440.169 65.9916 440.169 63.6021C440.169 61.0721 438.735 59.0984 436.34 57.6909C433.871 56.2399 430.244 55.3297 425.96 55.3297C417.588 55.3297 411.034 59.8858 411.034 64.8431C411.034 69.6314 417.317 73.7359 425.96 73.7359C428.847 73.7359 431.514 73.0904 433.74 72.0157L431.455 70.0842C429.816 70.7773 427.885 71.1856 425.816 71.1856C419.882 71.1856 414.641 68.5127 414.641 64.7051C414.641 60.8976 419.882 57.8799 425.816 57.8799C431.751 57.8799 436.562 60.2082 436.562 64.0157C436.562 65.7753 435.535 67.4398 433.844 68.7214L436.716 70.1109ZM428.973 66.3649C430.319 65.7131 431.012 64.7167 431.012 64.0157C431.012 63.5899 430.826 63.2504 430.153 62.8843C429.355 62.4503 427.884 62.0379 425.816 62.0379C424.066 62.0379 422.506 62.4909 421.472 63.1109C420.447 63.7251 420.192 64.3171 420.192 64.7051C420.192 65.0427 420.379 65.5143 421.317 66.0377C422.306 66.589 423.905 67.0276 425.816 67.0276C426.476 67.0276 427.075 66.957 427.612 66.835L426.33 65.7513C426.094 65.824 425.834 65.8634 425.565 65.8634C424.576 65.8634 423.775 65.1909 423.775 64.4294C423.775 63.6679 424.576 63.2022 425.565 63.2022C426.555 63.2022 427.428 63.8058 427.428 64.5673C427.428 64.8989 427.262 65.1875 426.994 65.4076L428.973 66.3649Z"
        />
        <path d="M432.854 159.281L425.49 173.861H423.011L416.868 161.914L410.725 173.861H408.245L400.918 159.281H403.435L409.541 171.672L415.794 159.281H418.052L424.269 171.672L430.449 159.281H432.854Z" />
        <path d="M444.224 174C442.349 174 440.659 173.686 439.155 173.058C437.65 172.411 436.465 171.524 435.602 170.396C434.738 169.269 434.307 167.994 434.307 166.571C434.307 165.148 434.738 163.873 435.602 162.746C436.465 161.618 437.65 160.74 439.155 160.112C440.659 159.484 442.349 159.17 444.224 159.17C446.099 159.17 447.789 159.484 449.294 160.112C450.799 160.74 451.971 161.618 452.81 162.746C453.673 163.873 454.105 165.148 454.105 166.571C454.105 167.994 453.673 169.269 452.81 170.396C451.971 171.524 450.799 172.411 449.294 173.058C447.789 173.686 446.099 174 444.224 174ZM444.224 172.254C445.606 172.254 446.839 172.023 447.925 171.561C449.035 171.08 449.898 170.406 450.515 169.537C451.132 168.668 451.44 167.68 451.44 166.571C451.44 165.462 451.132 164.473 450.515 163.605C449.898 162.736 449.035 162.071 447.925 161.609C446.839 161.129 445.606 160.888 444.224 160.888C442.843 160.888 441.597 161.129 440.487 161.609C439.401 162.071 438.538 162.736 437.896 163.605C437.28 164.473 436.971 165.462 436.971 166.571C436.971 167.68 437.28 168.668 437.896 169.537C438.538 170.406 439.401 171.08 440.487 171.561C441.597 172.023 442.843 172.254 444.224 172.254Z" />
        <path d="M467.425 174C465.55 174 463.86 173.686 462.355 173.058C460.85 172.411 459.666 171.524 458.803 170.396C457.939 169.269 457.508 167.994 457.508 166.571C457.508 165.148 457.939 163.873 458.803 162.746C459.666 161.618 460.85 160.74 462.355 160.112C463.86 159.484 465.55 159.17 467.425 159.17C469.3 159.17 470.99 159.484 472.495 160.112C474 160.74 475.172 161.618 476.01 162.746C476.874 163.873 477.305 165.148 477.305 166.571C477.305 167.994 476.874 169.269 476.01 170.396C475.172 171.524 474 172.411 472.495 173.058C470.99 173.686 469.3 174 467.425 174ZM467.425 172.254C468.807 172.254 470.04 172.023 471.126 171.561C472.236 171.08 473.099 170.406 473.716 169.537C474.333 168.668 474.641 167.68 474.641 166.571C474.641 165.462 474.333 164.473 473.716 163.605C473.099 162.736 472.236 162.071 471.126 161.609C470.04 161.129 468.807 160.888 467.425 160.888C466.043 160.888 464.798 161.129 463.687 161.609C462.602 162.071 461.738 162.736 461.097 163.605C460.48 164.473 460.172 165.462 460.172 166.571C460.172 167.68 460.48 168.668 461.097 169.537C461.738 170.406 462.602 171.08 463.687 171.561C464.798 172.023 466.043 172.254 467.425 172.254Z" />
        <path d="M500.432 153.293V173.861H497.916V170.979C497.126 171.958 496.078 172.706 494.77 173.224C493.487 173.741 492.032 174 490.404 174C488.578 174 486.925 173.686 485.445 173.058C483.965 172.429 482.805 171.551 481.966 170.424C481.128 169.297 480.708 168.012 480.708 166.571C480.708 165.13 481.128 163.845 481.966 162.718C482.805 161.591 483.965 160.722 485.445 160.112C486.925 159.484 488.578 159.17 490.404 159.17C491.983 159.17 493.401 159.419 494.659 159.918C495.942 160.399 496.991 161.11 497.805 162.053V153.293H500.432ZM490.626 172.254C491.983 172.254 493.204 172.023 494.289 171.561C495.4 171.08 496.263 170.406 496.88 169.537C497.521 168.668 497.842 167.68 497.842 166.571C497.842 165.462 497.521 164.473 496.88 163.605C496.263 162.736 495.4 162.071 494.289 161.609C493.204 161.129 491.983 160.888 490.626 160.888C489.244 160.888 487.998 161.129 486.888 161.609C485.803 162.071 484.939 162.736 484.298 163.605C483.681 164.473 483.373 165.462 483.373 166.571C483.373 167.68 483.681 168.668 484.298 169.537C484.939 170.406 485.803 171.08 486.888 171.561C487.998 172.023 489.244 172.254 490.626 172.254Z" />
        <path d="M525.502 174C523.577 174 521.851 173.686 520.321 173.058C518.816 172.429 517.632 171.551 516.768 170.424C515.905 169.278 515.473 167.994 515.473 166.571C515.473 165.148 515.905 163.873 516.768 162.746C517.632 161.618 518.816 160.74 520.321 160.112C521.851 159.484 523.577 159.17 525.502 159.17C527.179 159.17 528.672 159.419 529.979 159.918C531.312 160.399 532.36 161.11 533.125 162.053L531.164 163.051C530.522 162.33 529.708 161.794 528.721 161.443C527.734 161.073 526.661 160.888 525.502 160.888C524.095 160.888 522.825 161.129 521.69 161.609C520.58 162.071 519.704 162.736 519.063 163.605C518.446 164.473 518.138 165.462 518.138 166.571C518.138 167.698 518.446 168.696 519.063 169.565C519.704 170.415 520.58 171.08 521.69 171.561C522.825 172.023 524.095 172.254 525.502 172.254C526.661 172.254 527.734 172.078 528.721 171.727C529.708 171.376 530.522 170.84 531.164 170.119L533.125 171.117C532.36 172.06 531.312 172.78 529.979 173.279C528.647 173.76 527.155 174 525.502 174Z" />
        <path d="M540.803 162.136C541.419 161.156 542.332 160.417 543.541 159.918C544.775 159.419 546.292 159.17 548.093 159.17V161.082L547.464 161.055C545.416 161.055 543.812 161.526 542.653 162.468C541.493 163.411 540.914 164.732 540.914 166.432V173.861H538.286V159.281H540.803V162.136Z" />
        <path d="M559.623 159.17C562.164 159.17 564.113 159.65 565.47 160.611C566.827 161.554 567.505 162.958 567.505 164.825V173.861H564.989V171.588C564.397 172.346 563.521 172.937 562.361 173.362C561.226 173.787 559.87 174 558.291 174C556.12 174 554.393 173.612 553.11 172.836C551.827 172.06 551.186 171.034 551.186 169.759C551.186 168.521 551.778 167.523 552.962 166.765C554.171 166.007 556.083 165.628 558.698 165.628H564.878V164.741C564.878 163.485 564.409 162.533 563.471 161.886C562.534 161.221 561.165 160.888 559.364 160.888C558.13 160.888 556.946 161.045 555.811 161.36C554.676 161.655 553.702 162.071 552.888 162.607L551.704 161.138C552.69 160.509 553.875 160.029 555.256 159.696C556.638 159.345 558.093 159.17 559.623 159.17ZM558.698 172.448C560.178 172.448 561.449 172.198 562.509 171.699C563.57 171.182 564.36 170.443 564.878 169.482V167.098H558.772C555.441 167.098 553.776 167.966 553.776 169.703C553.776 170.553 554.208 171.228 555.071 171.727C555.935 172.207 557.144 172.448 558.698 172.448Z" />
        <path d="M581.08 154.818C579.945 154.818 579.082 155.049 578.49 155.511C577.923 155.973 577.639 156.656 577.639 157.562V159.281H583.634V160.944H577.713V173.861H575.085V160.944H571.607V159.281H575.085V157.479C575.085 156.148 575.591 155.095 576.603 154.319C577.639 153.542 579.094 153.154 580.969 153.154C581.709 153.154 582.425 153.238 583.116 153.404C583.806 153.552 584.386 153.773 584.855 154.069L583.967 155.538C583.202 155.058 582.24 154.818 581.08 154.818Z" />
        <path d="M597.432 172.974C596.938 173.307 596.322 173.566 595.582 173.751C594.866 173.917 594.114 174 593.324 174C591.499 174 590.092 173.63 589.106 172.891C588.119 172.152 587.625 171.108 587.625 169.759V160.944H584.147V159.281H587.625V156.093H590.253V159.281H596.174V160.944H590.253V169.648C590.253 170.517 590.536 171.182 591.104 171.644C591.696 172.087 592.535 172.309 593.62 172.309C594.163 172.309 594.681 172.244 595.174 172.115C595.693 171.986 596.137 171.801 596.507 171.561L597.432 172.974Z" />
        <path d="M617.993 162.995H1001V165.767H617.993V162.995Z" />
        <path d="M0 164.381H383.007V167.153H0V164.381Z" />
      </mask>
      <path
        d="M99.9929 16.355H45.3727V5.71038H171.044V16.355H116.423V122.135H99.9929V16.355Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M303.424 122.135L267.899 84.7131C263.902 85.0457 259.757 85.2121 255.465 85.2121H213.723V122.135H197.292V5.71038H255.465C275.3 5.71038 290.842 9.25857 302.092 16.355C313.341 23.4513 318.966 33.2089 318.966 45.6275C318.966 54.7198 315.858 62.426 309.641 68.7462C303.572 74.9556 294.839 79.4462 283.441 82.2183L321.409 122.135H303.424ZM255.021 74.7338C270.415 74.7338 282.183 72.1835 290.324 67.083C298.465 61.9825 302.536 54.8307 302.536 45.6275C302.536 36.2027 298.465 28.9954 290.324 24.0057C282.183 18.9052 270.415 16.355 255.021 16.355H213.723V74.7338H255.021Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M564.386 123.133C555.505 123.133 547.289 121.692 539.74 118.809C532.191 115.926 526.048 111.823 521.311 106.501L531.081 98.1851C539.666 107.721 550.842 112.489 564.608 112.489C583.851 112.489 593.472 103.951 593.472 86.8752V16.3549H536.632V5.71034H609.681V86.3763C609.681 98.5732 605.832 107.776 598.135 113.986C590.586 120.084 579.336 123.133 564.386 123.133Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M753.187 91.0333H666.594L647.943 122.135H630.847L701.897 5.71034H718.106L789.156 122.135H771.838L753.187 91.0333ZM747.192 81.054L709.891 18.5171L672.589 81.054H747.192Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M863.048 67.4156L831.298 91.5322V122.135H814.867V5.71034H831.298V76.0643L922.553 5.71034H941.426L874.15 58.4343L946.089 122.135H926.55L863.048 67.4156Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M450.371 1.63128C443.04 0.554344 435.352 0 427.428 0C376.982 0 332.434 29.1206 332.434 65.8633C332.434 72.8299 334.036 79.4029 336.975 85.4811C337.183 85.9997 337.325 86.4398 337.455 86.8406C337.817 87.9595 338.08 88.7717 339.382 90.1306L339.507 90.0751C354.011 113.439 389.009 128.4 427.428 128.4C451.63 128.4 473.633 120.932 489.976 109.105L489.98 109.107C490.067 109.043 490.152 108.979 490.236 108.916C490.491 108.73 490.746 108.542 490.999 108.354C492.214 107.466 493.21 106.782 494.071 106.191C496.944 104.219 498.313 103.279 501.312 99.2642C512.291 87.7765 518.768 73.8337 518.768 59.2104C518.768 28.2594 489.75 7.43778 450.449 1.64265L450.525 1.33062L450.371 1.63128ZM496.941 96.6973C507.175 85.9322 513.218 72.8899 513.218 59.2104C513.218 42.103 503.758 28.469 488.484 19.0348C477.973 12.5422 464.585 7.97211 449.442 5.73159L448.667 8.8791C483.783 14.1757 509.635 32.6727 509.635 60.086C509.635 72.9115 503.976 85.1496 494.357 95.293L496.941 96.6973ZM448.331 10.2422C462.201 12.3375 474.549 16.5243 484.336 22.4973C498.825 31.34 507.784 44.1413 507.784 60.086C507.784 72.6114 502.255 84.5668 492.86 94.4792L489.98 92.9144L488.415 92.3928C497.175 83.2007 502.327 72.1158 502.327 60.4997C502.327 35.8009 479.035 19.0824 447.296 14.1531L447.466 13.7553L448.331 10.2422ZM446.119 9.92744C440.074 9.12009 433.756 8.70419 427.249 8.70419C382.578 8.70419 343.419 34.1724 343.419 66.015C343.419 71.6894 344.665 77.0711 346.967 82.0836L349.238 81.6401L352.077 80.5946C350 76.0028 348.876 71.0756 348.876 65.8772C348.876 36.1784 385.562 12.6405 427.106 12.6405C432.979 12.6405 438.695 13.0034 444.18 13.7106L446.119 9.92744ZM446.794 8.61036C440.529 7.7568 433.983 7.31818 427.249 7.31818C381.749 7.31818 341.569 33.2702 341.569 66.015C341.569 71.82 342.831 77.3183 345.163 82.4362L342.144 83.0259L341.805 83.1757C339.325 77.7662 337.985 71.9655 337.985 65.8633C337.985 31.7827 379.536 4.15804 427.428 4.15804C434.671 4.15804 441.677 4.64163 448.35 5.57454L446.794 8.61036ZM442.438 16.3037C437.511 15.7156 432.382 15.4125 427.106 15.4125C387.197 15.4125 352.576 37.9991 352.576 65.8772C352.576 70.6496 353.596 75.1955 355.488 79.4513L362.466 78.2743C360.759 74.3457 359.837 70.1384 359.837 65.7048C359.837 39.8135 391.282 19.2933 426.891 19.2933C431.266 19.2933 435.54 19.5324 439.671 19.9997L442.438 16.3037ZM446.162 16.8082C458.462 18.6762 469.36 22.3697 477.967 27.5878C490.739 35.3305 498.627 46.5129 498.627 60.4997C498.627 71.713 493.555 82.4168 484.961 91.2418L479.023 89.2629C486.786 81.1638 491.366 71.3304 491.366 61.0168C491.366 39.5682 471.556 25.0228 444.514 20.6626L446.162 16.8082ZM443.947 21.989C454.482 23.6679 463.854 26.9208 471.306 31.5159C482.555 38.4522 489.516 48.4934 489.516 61.0168C489.516 71.1345 484.974 80.7759 477.297 88.6875L475.115 87.9603L472.616 86.8354C479.802 79.599 484.059 70.7363 484.059 61.4305C484.059 42.3037 466.073 29.3984 441.643 25.704L443.313 23.4723L443.947 21.989ZM438.702 21.294C434.882 20.8876 430.934 20.6794 426.891 20.6794C392.13 20.6794 361.687 40.7031 361.687 65.7048C361.687 70.0256 362.599 74.1315 364.288 77.967L369.661 77.0606C368.028 73.4794 367.144 69.6309 367.144 65.5669C367.144 42.7217 395.096 24.6157 426.748 24.6157C430.326 24.6157 433.827 24.7942 437.224 25.1438L438.502 21.5614L438.702 21.294ZM435.779 29.1945C432.858 28.9167 429.841 28.7737 426.748 28.7737C397.599 28.7737 372.695 45.4176 372.695 65.5669C372.695 85.455 397.198 100.292 426.748 100.292C439.272 100.292 450.785 96.7679 459.757 91.0677L456.872 89.6459C448.581 94.6946 438.041 97.7971 426.568 97.7971C399.862 97.7971 376.278 84.4323 376.278 65.3946C376.278 46.3569 399.862 31.2685 426.568 31.2685C429.409 31.2685 432.193 31.4002 434.9 31.6586L435.779 29.1945ZM438.778 29.5312C448.564 30.8016 457.145 33.6263 463.761 37.6759C472.874 43.2537 478.508 51.2863 478.508 61.4305C478.508 69.9618 474.524 78.0878 467.834 84.6827L464.984 83.3998C471.22 77.3185 474.925 69.8235 474.925 61.9475C474.925 45.4662 458.699 34.5283 437.013 31.888L438.778 29.5312ZM436.048 33.1774C445.205 34.2126 453.328 36.7559 459.6 40.5475C467.93 45.5832 473.075 52.8615 473.075 61.9475C473.075 69.5612 469.46 76.812 463.387 82.681L458.869 80.6473C464.35 75.4923 467.618 69.0924 467.618 62.3612C467.618 48.0075 452.76 38.6592 433.265 36.8948L436.048 33.1774ZM434.417 33.01C431.87 32.7748 429.248 32.6545 426.568 32.6545C400.674 32.6545 378.128 47.2707 378.128 65.3946C378.128 83.4321 400.539 96.4111 426.568 96.4111C437.387 96.4111 447.345 93.5378 455.247 88.8453L451.406 86.9523L450.811 86.4488C443.983 90.2026 435.551 92.4749 426.425 92.4749C403.675 92.4749 383.585 81.2484 383.585 65.2567C383.585 49.2651 403.675 36.5908 426.425 36.5908C428.676 36.5908 430.886 36.6866 433.039 36.8746L434.417 33.01ZM347.239 86.4264L344.339 87.9355C357.683 109.852 390.463 124.242 427.428 124.242C449.79 124.242 470.202 117.413 485.501 106.557L482.532 105.347C467.914 115.426 448.524 121.747 427.249 121.747C391.954 121.747 359.86 107.915 347.239 86.4264ZM427.249 120.361C392.365 120.361 360.984 106.667 348.798 85.6154L349.675 85.1588L353.587 83.5806C364.771 103.532 394.436 116.425 427.106 116.425C445.822 116.425 462.942 111.102 476.105 102.536L476.615 102.935L480.813 104.646C466.576 114.313 447.808 120.361 427.249 120.361ZM427.106 113.653C395.391 113.653 367.306 101.147 356.882 82.2515L358.715 81.5121L363.191 79.8316C372.2 97.9668 398.193 109.772 426.891 109.772C443.189 109.772 458.075 104.982 469.427 97.3048L473.544 100.53C461.046 108.623 444.824 113.653 427.106 113.653ZM426.891 108.386C398.704 108.386 373.508 96.7927 364.864 79.2035L369.796 77.3518C377.482 93.7376 400.879 104.45 426.748 104.45C441.222 104.45 454.442 100.232 464.529 93.4683L468.147 96.3025C457.123 103.745 442.682 108.386 426.891 108.386ZM455.667 79.2055C460.831 74.4724 463.917 68.5576 463.917 62.3612C463.917 55.2462 459.859 49.5889 453.248 45.6482C446.566 41.6649 437.127 39.3629 426.425 39.3629C405.247 39.3629 387.285 51.1267 387.285 65.2567C387.285 79.2158 404.978 89.7028 426.425 89.7028C434.616 89.7028 442.185 87.6898 448.346 84.3647L444.904 81.4551C439.638 84.181 433.199 85.822 426.246 85.822C408.442 85.822 392.719 77.2685 392.719 65.0844C392.719 52.9002 408.442 43.2437 426.246 43.2437C444.051 43.2437 458.484 50.6941 458.484 62.8782C458.484 68.1546 455.777 73.1638 451.262 77.1477L453.498 78.2291L455.667 79.2055ZM449.693 76.3885C454.033 72.6178 456.634 67.8618 456.634 62.8782C456.634 57.2415 453.319 52.7275 447.909 49.5876C442.46 46.4257 434.823 44.6297 426.246 44.6297C409.179 44.6297 394.569 53.8632 394.569 65.0844C394.569 76.2219 409.043 84.436 426.246 84.436C432.741 84.436 438.743 82.9223 443.669 80.4105L440.162 77.4455C436.152 79.3573 431.313 80.4996 426.103 80.4996C412.255 80.4996 400.026 74.0845 400.026 64.9464C400.026 55.8083 412.255 48.5659 426.103 48.5659C439.951 48.5659 451.177 54.1537 451.177 63.2918C451.177 67.3604 448.951 71.2171 445.26 74.2442L449.693 76.3885ZM443.681 73.4802C447.208 70.6613 449.327 67.0525 449.327 63.2918C449.327 59.1989 446.839 55.9142 442.725 53.6124C438.572 51.2881 432.716 49.9519 426.103 49.9519C412.924 49.9519 401.877 56.8138 401.877 64.9464C401.877 72.9978 412.788 79.1136 426.103 79.1136C430.864 79.1136 435.262 78.0951 438.92 76.3958L436.215 74.1088C433.31 75.6079 429.774 76.508 425.96 76.508C416.068 76.508 407.334 71.6966 407.334 64.8431C407.334 57.9895 416.068 52.5577 425.96 52.5577C435.851 52.5577 443.87 56.7486 443.87 63.6021C443.87 66.5706 442.365 69.3888 439.856 71.6299L443.681 73.4802ZM436.716 70.1109C438.874 68.3014 440.169 65.9916 440.169 63.6021C440.169 61.0721 438.735 59.0984 436.34 57.6909C433.871 56.2399 430.244 55.3297 425.96 55.3297C417.588 55.3297 411.034 59.8858 411.034 64.8431C411.034 69.6314 417.317 73.7359 425.96 73.7359C428.847 73.7359 431.514 73.0904 433.74 72.0157L431.455 70.0842C429.816 70.7773 427.885 71.1856 425.816 71.1856C419.882 71.1856 414.641 68.5127 414.641 64.7051C414.641 60.8976 419.882 57.8799 425.816 57.8799C431.751 57.8799 436.562 60.2082 436.562 64.0157C436.562 65.7753 435.535 67.4398 433.844 68.7214L436.716 70.1109ZM428.973 66.3649C430.319 65.7131 431.012 64.7167 431.012 64.0157C431.012 63.5899 430.826 63.2504 430.153 62.8843C429.355 62.4503 427.884 62.0379 425.816 62.0379C424.066 62.0379 422.506 62.4909 421.472 63.1109C420.447 63.7251 420.192 64.3171 420.192 64.7051C420.192 65.0427 420.379 65.5143 421.317 66.0377C422.306 66.589 423.905 67.0276 425.816 67.0276C426.476 67.0276 427.075 66.957 427.612 66.835L426.33 65.7513C426.094 65.824 425.834 65.8634 425.565 65.8634C424.576 65.8634 423.775 65.1909 423.775 64.4294C423.775 63.6679 424.576 63.2022 425.565 63.2022C426.555 63.2022 427.428 63.8058 427.428 64.5673C427.428 64.8989 427.262 65.1875 426.994 65.4076L428.973 66.3649Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M432.854 159.281L425.49 173.861H423.011L416.868 161.914L410.725 173.861H408.245L400.918 159.281H403.435L409.541 171.672L415.794 159.281H418.052L424.269 171.672L430.449 159.281H432.854Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M444.224 174C442.349 174 440.659 173.686 439.155 173.058C437.65 172.411 436.465 171.524 435.602 170.396C434.738 169.269 434.307 167.994 434.307 166.571C434.307 165.148 434.738 163.873 435.602 162.746C436.465 161.618 437.65 160.74 439.155 160.112C440.659 159.484 442.349 159.17 444.224 159.17C446.099 159.17 447.789 159.484 449.294 160.112C450.799 160.74 451.971 161.618 452.81 162.746C453.673 163.873 454.105 165.148 454.105 166.571C454.105 167.994 453.673 169.269 452.81 170.396C451.971 171.524 450.799 172.411 449.294 173.058C447.789 173.686 446.099 174 444.224 174ZM444.224 172.254C445.606 172.254 446.839 172.023 447.925 171.561C449.035 171.08 449.898 170.406 450.515 169.537C451.132 168.668 451.44 167.68 451.44 166.571C451.44 165.462 451.132 164.473 450.515 163.605C449.898 162.736 449.035 162.071 447.925 161.609C446.839 161.129 445.606 160.888 444.224 160.888C442.843 160.888 441.597 161.129 440.487 161.609C439.401 162.071 438.538 162.736 437.896 163.605C437.28 164.473 436.971 165.462 436.971 166.571C436.971 167.68 437.28 168.668 437.896 169.537C438.538 170.406 439.401 171.08 440.487 171.561C441.597 172.023 442.843 172.254 444.224 172.254Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M467.425 174C465.55 174 463.86 173.686 462.355 173.058C460.85 172.411 459.666 171.524 458.803 170.396C457.939 169.269 457.508 167.994 457.508 166.571C457.508 165.148 457.939 163.873 458.803 162.746C459.666 161.618 460.85 160.74 462.355 160.112C463.86 159.484 465.55 159.17 467.425 159.17C469.3 159.17 470.99 159.484 472.495 160.112C474 160.74 475.172 161.618 476.01 162.746C476.874 163.873 477.305 165.148 477.305 166.571C477.305 167.994 476.874 169.269 476.01 170.396C475.172 171.524 474 172.411 472.495 173.058C470.99 173.686 469.3 174 467.425 174ZM467.425 172.254C468.807 172.254 470.04 172.023 471.126 171.561C472.236 171.08 473.099 170.406 473.716 169.537C474.333 168.668 474.641 167.68 474.641 166.571C474.641 165.462 474.333 164.473 473.716 163.605C473.099 162.736 472.236 162.071 471.126 161.609C470.04 161.129 468.807 160.888 467.425 160.888C466.043 160.888 464.798 161.129 463.687 161.609C462.602 162.071 461.738 162.736 461.097 163.605C460.48 164.473 460.172 165.462 460.172 166.571C460.172 167.68 460.48 168.668 461.097 169.537C461.738 170.406 462.602 171.08 463.687 171.561C464.798 172.023 466.043 172.254 467.425 172.254Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M500.432 153.293V173.861H497.916V170.979C497.126 171.958 496.078 172.706 494.77 173.224C493.487 173.741 492.032 174 490.404 174C488.578 174 486.925 173.686 485.445 173.058C483.965 172.429 482.805 171.551 481.966 170.424C481.128 169.297 480.708 168.012 480.708 166.571C480.708 165.13 481.128 163.845 481.966 162.718C482.805 161.591 483.965 160.722 485.445 160.112C486.925 159.484 488.578 159.17 490.404 159.17C491.983 159.17 493.401 159.419 494.659 159.918C495.942 160.399 496.991 161.11 497.805 162.053V153.293H500.432ZM490.626 172.254C491.983 172.254 493.204 172.023 494.289 171.561C495.4 171.08 496.263 170.406 496.88 169.537C497.521 168.668 497.842 167.68 497.842 166.571C497.842 165.462 497.521 164.473 496.88 163.605C496.263 162.736 495.4 162.071 494.289 161.609C493.204 161.129 491.983 160.888 490.626 160.888C489.244 160.888 487.998 161.129 486.888 161.609C485.803 162.071 484.939 162.736 484.298 163.605C483.681 164.473 483.373 165.462 483.373 166.571C483.373 167.68 483.681 168.668 484.298 169.537C484.939 170.406 485.803 171.08 486.888 171.561C487.998 172.023 489.244 172.254 490.626 172.254Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M525.502 174C523.577 174 521.851 173.686 520.321 173.058C518.816 172.429 517.632 171.551 516.768 170.424C515.905 169.278 515.473 167.994 515.473 166.571C515.473 165.148 515.905 163.873 516.768 162.746C517.632 161.618 518.816 160.74 520.321 160.112C521.851 159.484 523.577 159.17 525.502 159.17C527.179 159.17 528.672 159.419 529.979 159.918C531.312 160.399 532.36 161.11 533.125 162.053L531.164 163.051C530.522 162.33 529.708 161.794 528.721 161.443C527.734 161.073 526.661 160.888 525.502 160.888C524.095 160.888 522.825 161.129 521.69 161.609C520.58 162.071 519.704 162.736 519.063 163.605C518.446 164.473 518.138 165.462 518.138 166.571C518.138 167.698 518.446 168.696 519.063 169.565C519.704 170.415 520.58 171.08 521.69 171.561C522.825 172.023 524.095 172.254 525.502 172.254C526.661 172.254 527.734 172.078 528.721 171.727C529.708 171.376 530.522 170.84 531.164 170.119L533.125 171.117C532.36 172.06 531.312 172.78 529.979 173.279C528.647 173.76 527.155 174 525.502 174Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M540.803 162.136C541.419 161.156 542.332 160.417 543.541 159.918C544.775 159.419 546.292 159.17 548.093 159.17V161.082L547.464 161.055C545.416 161.055 543.812 161.526 542.653 162.468C541.493 163.411 540.914 164.732 540.914 166.432V173.861H538.286V159.281H540.803V162.136Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M559.623 159.17C562.164 159.17 564.113 159.65 565.47 160.611C566.827 161.554 567.505 162.958 567.505 164.825V173.861H564.989V171.588C564.397 172.346 563.521 172.937 562.361 173.362C561.226 173.787 559.87 174 558.291 174C556.12 174 554.393 173.612 553.11 172.836C551.827 172.06 551.186 171.034 551.186 169.759C551.186 168.521 551.778 167.523 552.962 166.765C554.171 166.007 556.083 165.628 558.698 165.628H564.878V164.741C564.878 163.485 564.409 162.533 563.471 161.886C562.534 161.221 561.165 160.888 559.364 160.888C558.13 160.888 556.946 161.045 555.811 161.36C554.676 161.655 553.702 162.071 552.888 162.607L551.704 161.138C552.69 160.509 553.875 160.029 555.256 159.696C556.638 159.345 558.093 159.17 559.623 159.17ZM558.698 172.448C560.178 172.448 561.449 172.198 562.509 171.699C563.57 171.182 564.36 170.443 564.878 169.482V167.098H558.772C555.441 167.098 553.776 167.966 553.776 169.703C553.776 170.553 554.208 171.228 555.071 171.727C555.935 172.207 557.144 172.448 558.698 172.448Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M581.08 154.818C579.945 154.818 579.082 155.049 578.49 155.511C577.923 155.973 577.639 156.656 577.639 157.562V159.281H583.634V160.944H577.713V173.861H575.085V160.944H571.607V159.281H575.085V157.479C575.085 156.148 575.591 155.095 576.603 154.319C577.639 153.542 579.094 153.154 580.969 153.154C581.709 153.154 582.425 153.238 583.116 153.404C583.806 153.552 584.386 153.773 584.855 154.069L583.967 155.538C583.202 155.058 582.24 154.818 581.08 154.818Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M597.432 172.974C596.938 173.307 596.322 173.566 595.582 173.751C594.866 173.917 594.114 174 593.324 174C591.499 174 590.092 173.63 589.106 172.891C588.119 172.152 587.625 171.108 587.625 169.759V160.944H584.147V159.281H587.625V156.093H590.253V159.281H596.174V160.944H590.253V169.648C590.253 170.517 590.536 171.182 591.104 171.644C591.696 172.087 592.535 172.309 593.62 172.309C594.163 172.309 594.681 172.244 595.174 172.115C595.693 171.986 596.137 171.801 596.507 171.561L597.432 172.974Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M617.993 162.995H1001V165.767H617.993V162.995Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
      <path
        d="M0 164.381H383.007V167.153H0V164.381Z"
        stroke="white"
        strokeWidth="4"
        mask="url(#path-1-inside-1)"
      />
    </svg>
  );
}
