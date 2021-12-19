const SlideOne = () => {
    const list = [
        {
            title: 'Thành viên',
            count: 28
        },
        {
            title: 'Sự kiện',
            count: 1
        },
        {
            title: 'Project',
            count: 10
        },
        {
            title: 'Group Member',
            count: 8920
        }
    ]
    const member_counts = list.map((item, index) => {
        return <MemberCount title={item.title} count={item.count} key={index} />
    })


    return (
        <div data-scroll-section>
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-cyan-900"></div>
                <div className="hero-content text-neutral-content block">
                    <div className="font-bold mb-20">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid col-span-2 lg:col-span-1 content-center pt-10">
                                <h2 className="text-5xl m-3 font-bold text-center lg:text-right mb-5 lg:mb-0">
                                    HỆ SINH THÁI PHÁT TRIỂN TOÀN DIỆN CHO CÁC BẠN TRẺ ĐAM MÊ CÔNG NGHỆ
                                </h2>
                            </div>
                            <div className="grid col-span-2 lg:col-span-1 justify-center hidden lg:block">
                                <svg width="480" height="400" viewBox="0 0 623 508" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M459.583 9.6488C501.235 1.812 539.498 66.9832 567.144 96.5582C595.284 126.661 564.908 173.496 573.261 212.37C580.036 243.896 619.195 268.679 610.836 299.884C602.459 331.156 558.998 339.877 533.233 361.796C502.284 388.126 486.881 436.438 444.928 441.03C403.277 445.589 265.587 479.801 231.409 457.539C196.791 434.99 175.154 335.608 158.357 299.884C140.984 262.935 157.012 226.15 179.1 191.375C199.851 158.705 286.24 68.2819 320.694 47.4625C352.824 28.048 421.872 16.7439 459.583 9.6488Z" fill="#124872" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M470.913 11.6488C512.475 3.812 550.655 68.9832 578.242 98.5582C606.32 128.661 576.01 175.496 584.345 214.37C591.105 245.896 630.179 270.679 621.838 301.884C613.479 333.156 570.113 341.877 544.404 363.796C513.522 390.126 498.152 438.438 456.291 443.03C414.729 447.589 277.339 481.801 243.235 459.539C208.692 436.99 187.102 337.608 170.341 301.884C153.006 264.935 168.999 228.15 191.039 193.375C211.745 160.705 297.946 70.2819 332.326 49.4625C364.386 30.048 433.285 18.7439 470.913 11.6488Z" fill="#124872" fillOpacity="0.8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M436.913 0.648796C478.475 -7.188 516.655 57.9832 544.242 87.5582C572.32 117.661 542.01 164.496 550.345 203.37C557.105 234.896 596.179 259.679 587.838 290.884C579.479 322.156 536.113 330.877 510.404 352.796C479.522 379.126 464.152 427.438 422.291 432.03C380.729 436.589 243.339 470.801 209.235 448.539C174.692 425.99 153.102 326.608 136.341 290.884C119.006 253.935 134.999 217.15 157.039 182.375C177.745 149.705 263.946 59.2819 298.326 38.4625C330.386 19.048 399.285 7.74394 436.913 0.648796Z" fill="#1B4F78" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M125.409 143.786C155.964 140.411 185.134 123.124 215.127 136.024C246.595 149.558 271.545 180.616 290.275 214.695C309.45 249.585 322.255 289.326 321.37 329.336C320.474 369.847 306.615 406.886 285.374 436.184C264.226 465.353 236.301 489.126 203.158 492.387C171.495 495.502 142.616 469.512 112.382 453.202C81.547 436.568 39.975 432.954 25.0178 396.285C9.93296 359.304 43.5183 323.827 43.3927 284.071C43.2556 240.658 4.35362 191.159 24.2624 157.106C43.7057 123.849 90.7356 147.616 125.409 143.786Z" fill="#6F9EC0" fillOpacity="0.5" />
                                    <g filter="url(#filter0_d_0_1)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M111.689 149.275C142.288 146.324 171.695 129.442 201.506 142.756C232.784 156.725 257.302 188.125 275.558 222.46C294.248 257.612 306.502 297.527 305.062 337.521C303.605 378.015 289.235 414.859 267.59 443.859C246.041 472.733 217.79 496.117 184.605 498.919C152.901 501.595 124.384 475.208 94.3791 458.481C63.7777 441.421 22.2597 437.232 7.81166 400.36C-6.75969 363.173 27.3136 328.165 27.7385 288.411C28.2025 245 -10.0104 194.967 10.368 161.193C30.2699 128.208 76.9662 152.625 111.689 149.275Z" fill="#32B8CA" fillOpacity="0.5" shapeRendering="crispEdges" />
                                    </g>
                                    <ellipse cx="296.5" cy="247" rx="229.5" ry="238" fill="#F9FFEA" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M372.458 495.353C366.692 497.853 351.916 502.196 346.226 501.862C340.628 501.534 332.265 502.802 327.948 500.567C323.487 498.257 324.311 488.448 324.712 483.66C325.098 479.051 331.994 469.554 335.875 465.344C339.515 461.395 350.32 460.016 355.806 458.408C360.854 456.928 365.029 459.045 369.797 459.419C374.349 459.776 379.617 458.641 383.081 460.548C386.881 462.639 389.768 466.051 389.412 470.217C389.063 474.309 383.961 477.862 381.261 481.865C378.167 486.452 378.197 492.864 372.458 495.353Z" fill="#F3D68A" fillOpacity="0.8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M443.049 490.278C432.481 485.175 409.758 466.226 405.247 453.229C400.808 440.438 390.462 426.331 391.227 410.834C392.018 394.822 413.5 368.682 423.984 355.921C434.076 343.637 460.465 331.242 472.917 327.494C484.599 323.979 497.417 342.943 505.845 349.989C513.6 356.473 512.954 371.332 516.534 382.494C519.953 393.15 527.182 401.08 526.328 413.838C525.391 427.83 520.83 443.642 511.7 454.733C502.736 465.623 490.552 464.92 479.619 470.581C467.09 477.068 453.569 495.358 443.049 490.278Z" fill="#F5E4AC" />
                                    <defs>
                                        <filter id="filter0_d_0_1" x="0.189453" y="137.704" width="308.987" height="369.403" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>

                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-12 gap-4 pb-20 lg:pb-0">
                        {member_counts}
                    </div>
                </div>
            </div>

        </div>
    )
}

const MemberCount = ({ title, count }) => {
    return (<div className="flex flex-col items-center text-center col-span-6 md:col-span-3">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="block p-3 bg-white rounded-full min-w-min shadow-xl">
            <div className="block bg-cyan-900 rounded-full min-w-min shadow-xl">
            <div className="h-36 w-36 backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-200 rounded-full grid content-center shadow-xl">
                <p className="text-white font-bold text-4xl h-min">{count}</p>
            </div>
            </div>
        </div>

    </div>)
}

export default SlideOne

