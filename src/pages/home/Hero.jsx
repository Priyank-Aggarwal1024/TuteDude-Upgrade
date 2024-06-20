import React from 'react';
import '../../styles/hero.css'
import HeroImg from '../../assets/HeroImg.png'
function Hero(props) {
    return (
        <section className="section hero-section">
            <svg className='hero-design' xmlns="http://www.w3.org/2000/svg" width="571" height="738" viewBox="0 0 571 738" fill="none">
                <g opacity="0.4">
                    <path d="M904.091 681.616C819.673 715.203 730.31 733.956 641.105 736.804C551.9 739.652 464.599 726.538 384.187 698.212C303.775 669.886 231.827 626.903 172.451 571.716C113.074 516.529 67.4317 450.219 38.1299 376.573C8.82808 302.926 -3.55953 223.386 1.67438 142.492C6.90829 61.5981 29.6612 -19.0644 68.6341 -94.8901C107.607 -170.716 162.036 -240.22 228.815 -299.434C295.593 -358.648 373.413 -406.412 457.831 -440L680.961 120.808L904.091 681.616Z" fill="url(#paint0_linear_181_166)" fillOpacity="0.3" />
                    <path d="M898.341 667.164C816.099 699.886 729.039 718.155 642.133 720.93C555.226 723.704 470.175 710.928 391.836 683.332C313.496 655.736 243.402 613.86 185.555 560.096C127.709 506.331 83.2428 441.73 54.696 369.981C26.1493 298.233 14.0809 220.742 19.18 141.933C24.279 63.1238 46.4456 -15.46 84.4141 -89.3317C122.383 -163.203 175.41 -230.916 240.467 -288.604C305.525 -346.293 381.339 -392.826 463.581 -425.548L680.961 120.808L898.341 667.164Z" fill="url(#paint1_linear_181_166)" fillOpacity="0.3" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_181_166" x1="38.1299" y1="376.573" x2="293.129" y2="249.421" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#800080" />
                        <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_181_166" x1="38.1299" y1="376.573" x2="293.129" y2="249.421" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#800080" />
                        <stop offset="1" stopColor="#FF864C" stopOpacity="0.27" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="hero-top">
                <div className="ht-left">
                    <h1 className="hero-heading fw-400 f-55 text-black">Make the smarter you more smarter by <span className='text-pink fw-700'>adding any 3 course at just ₹ 799</span></h1>
                    <p className=" fw-500 text-black hero-top-para">Purchase any 3 course and increase REFUND validity to1 Year</p>
                    <div className="htl-bottom">
                        <div className="htl-bottom-left">
                            <div ><span className="f-34 fw-700 text-black">₹ 799 </span>{" "}<span className="f-20 fw-400 td-lt" style={{ color: "#585858" }}>₹2197</span><p className="f-16 fw-700" style={{
                                color: "#04BD00"

                            }}>Flat 40% OFF</p></div>
                            <p className="enroll-now">Enroll Now</p>
                        </div>
                    </div>
                </div>
                <div className="ht-right">
                    <img src={HeroImg} alt="Hero Image" />
                </div>
            </div>
            {/* <div className="hero-middle">
                <div className="hm-left">
                    <p className="fw-700 f-34 text-pink text-center">3</p>
                    <p className="fw-700 f-16 text-pink" style={{ color: "#263238" }}>Selected Course</p>
                </div>
                <div className="hm-middle">
                    <p className="fw-700 f-34 text-pink text-center">₹799</p>
                    <p className="fw-700 f-16 text-pink" style={{ color: "#263238" }}>Total Price </p>
                </div>
                <div className="hm-right">
                    <div className="proceed f-18 text-white">Procced</div>
                </div>
            </div> */}
            {/* <div className="layout-bottom">
                <div className="hm-left">
                    <p className="fw-700 f-34 text-pink text-center">7</p>
                    <p className="fw-700 f-16 text-pink text-center" style={{ color: "#263238" }}>Selected Course</p>
                </div>
                <div className="hm-middle">
                    <p className="fw-700 f-34 text-pink text-center">₹799</p>
                    <p className="fw-700 f-16 text-pink text-center" style={{ color: "#263238" }}>Total Price </p>
                </div>
                <div className="hm-right">
                    <div className="proceed layout-proceed f-18 text-white">Procced</div>
                </div>
            </div> */}
            <div className="hero-bottom">
                <div className="hb-card hb-card-1">
                    <div className="hb-card-inner1">
                        <p className="hero-card1-heading">Special Offer for you</p>
                        <div className='hero-card-inner'>
                            <p className='hero-card1-para' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                    <g opacity="0.9">
                                        <path d="M22.5255 4.5255C21.8693 3.86908 20.9792 3.5002 20.051 3.5H7.5C6.57174 3.5 5.6815 3.86875 5.02513 4.52513C4.36875 5.1815 4 6.07174 4 7V19.551C4.0002 20.4792 4.36908 21.3693 5.0255 22.0255L19.0255 36.0255C19.6818 36.6816 20.5719 37.0503 21.5 37.0503C22.4281 37.0503 23.3182 36.6816 23.9745 36.0255L36.5255 23.4745C37.1816 22.8182 37.5503 21.9281 37.5503 21C37.5503 20.0719 37.1816 19.1818 36.5255 18.5255L22.5255 4.5255ZM12.75 15.75C11.8215 15.7498 10.9311 15.3807 10.2748 14.724C9.61839 14.0673 9.24977 13.1767 9.25 12.2483C9.25023 11.3198 9.6193 10.4294 10.276 9.77301C10.9327 9.11664 11.8233 8.74802 12.7517 8.74825C13.6802 8.74848 14.5706 9.11755 15.227 9.77425C15.8834 10.431 16.252 11.3215 16.2518 12.25C16.2515 13.1785 15.8825 14.0689 15.2257 14.7252C14.569 15.3816 13.6785 15.7502 12.75 15.75Z" fill="url(#paint0_linear_181_1659)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_181_1659" x1="4.34828" y1="3.5" x2="43.2415" y2="10.0944" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#B1B1B1" />
                                            <stop offset="0.0852" stopColor="#BDBDBD" />
                                            <stop offset="0.2551" stopColor="#EBE6E6" />
                                            <stop offset="0.431" stopColor="white" />
                                            <stop offset="0.621" stopColor="#F0F0F0" />
                                            <stop offset="0.8216" stopColor="#CBCBCB" />
                                            <stop offset="1" stopColor="#BEBEBE" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span className="f-24 fw-400">Purchase any 3 course:  </span>
                                <span className="f-24 fw-700">{" "}₹799</span>
                            </p>
                            <p className='hero-card1-para' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="45" viewBox="0 0 46 45" fill="none">
                                    <g opacity="0.9">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M41.7486 18.7496H4.25V31.8741C4.25 33.3658 4.84261 34.7965 5.89746 35.8514C6.95231 36.9062 8.383 37.4988 9.87478 37.4988H36.1238C37.6156 37.4988 39.0462 36.9062 40.1011 35.8514C41.1559 34.7965 41.7486 33.3658 41.7486 31.8741V18.7496ZM20.3481 26.2493L20.5731 26.0224C20.9149 25.669 21.1042 25.1956 21.1003 24.7039C21.0964 24.2123 20.8995 23.7419 20.5522 23.3941C20.2048 23.0462 19.7347 22.8487 19.2431 22.8441C18.7514 22.8394 18.2777 23.0281 17.9238 23.3694L14.4946 26.7986C14.1431 27.1502 13.9457 27.627 13.9457 28.1242C13.9457 28.6214 14.1431 29.0982 14.4946 29.4498L17.9238 32.8771C18.0968 33.0562 18.3037 33.1991 18.5324 33.2973C18.7612 33.3956 19.0072 33.4473 19.2562 33.4495C19.5051 33.4516 19.752 33.4042 19.9824 33.3099C20.2129 33.2156 20.4222 33.0764 20.5982 32.9004C20.7743 32.7243 20.9135 32.515 21.0078 32.2846C21.102 32.0542 21.1495 31.8073 21.1473 31.5583C21.1452 31.3094 21.0934 31.0633 20.9952 30.8346C20.8969 30.6058 20.7541 30.399 20.575 30.226L20.3481 29.9991H28.6241C29.1213 29.9991 29.5982 29.8016 29.9498 29.45C30.3014 29.0984 30.499 28.6215 30.499 28.1242C30.499 27.6269 30.3014 27.15 29.9498 26.7984C29.5982 26.4468 29.1213 26.2493 28.6241 26.2493H20.3481ZM9.87478 7.5C8.383 7.5 6.95231 8.09261 5.89746 9.14746C4.84261 10.2023 4.25 11.633 4.25 13.1248V14.9997H41.7486V13.1248C41.7486 11.633 41.1559 10.2023 40.1011 9.14746C39.0462 8.09261 37.6156 7.5 36.1238 7.5H9.87478Z" fill="url(#paint0_linear_181_1663)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_181_1663" x1="4.63927" y1="7.5" x2="47.4368" y2="16.5705" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#B1B1B1" />
                                            <stop offset="0.0852" stopColor="#BDBDBD" />
                                            <stop offset="0.2551" stopColor="#EBE6E6" />
                                            <stop offset="0.431" stopColor="white" />
                                            <stop offset="0.621" stopColor="#F0F0F0" />
                                            <stop offset="0.8216" stopColor="#CBCBCB" />
                                            <stop offset="1" stopColor="#BEBEBE" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <span className="f-24 fw-400">100% Refund Validity :</span>
                                <span className="f-24 fw-700">{" "} 1 Year</span>
                            </p>
                        </div>
                        <p className="select-course-btn">Select Course</p>
                    </div>
                </div>
                <div className="hb-card hb-card-2">
                    <div className="hb-card-inner2">
                        <p className="hero-card2-heading">Your previous Purchase</p>
                        <div className='hero-card-inner'>
                            <p className='hero-card2-para' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <g opacity="0.9">
                                        <path d="M22.0255 4.5255C21.3693 3.86908 20.4792 3.5002 19.551 3.5H7C6.07174 3.5 5.1815 3.86875 4.52513 4.52513C3.86875 5.1815 3.5 6.07174 3.5 7V19.551C3.5002 20.4792 3.86908 21.3693 4.5255 22.0255L18.5255 36.0255C19.1818 36.6816 20.0719 37.0503 21 37.0503C21.9281 37.0503 22.8182 36.6816 23.4745 36.0255L36.0255 23.4745C36.6816 22.8182 37.0503 21.9281 37.0503 21C37.0503 20.0719 36.6816 19.1818 36.0255 18.5255L22.0255 4.5255ZM12.25 15.75C11.3215 15.7498 10.4311 15.3807 9.77476 14.724C9.11839 14.0673 8.74977 13.1767 8.75 12.2483C8.75023 11.3198 9.1193 10.4294 9.776 9.77301C10.4327 9.11664 11.3233 8.74802 12.2517 8.74825C13.1802 8.74848 14.0706 9.11755 14.727 9.77425C15.3834 10.431 15.752 11.3215 15.7518 12.25C15.7515 13.1785 15.3825 14.0689 14.7257 14.7252C14.069 15.3816 13.1785 15.7502 12.25 15.75Z" fill="#800080" />
                                    </g>
                                </svg>
                                <span className="f-24 fw-400">Purchased One course:</span>
                                <span className="f-24 fw-700">{" "}₹799</span>
                            </p>
                            <p className='hero-card2-para' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                    <g opacity="0.9">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M41.2486 18.7496H3.75V31.8741C3.75 33.3658 4.34261 34.7965 5.39746 35.8514C6.45231 36.9062 7.883 37.4988 9.37478 37.4988H35.6238C37.1156 37.4988 38.5462 36.9062 39.6011 35.8514C40.6559 34.7965 41.2486 33.3658 41.2486 31.8741V18.7496ZM19.8481 26.2493L20.0731 26.0224C20.4149 25.669 20.6042 25.1956 20.6003 24.7039C20.5964 24.2123 20.3995 23.7419 20.0522 23.3941C19.7048 23.0462 19.2347 22.8487 18.7431 22.8441C18.2514 22.8394 17.7777 23.0281 17.4238 23.3694L13.9946 26.7986C13.6431 27.1502 13.4457 27.627 13.4457 28.1242C13.4457 28.6214 13.6431 29.0982 13.9946 29.4498L17.4238 32.8771C17.5968 33.0562 17.8037 33.1991 18.0324 33.2973C18.2612 33.3956 18.5072 33.4473 18.7562 33.4495C19.0051 33.4516 19.252 33.4042 19.4824 33.3099C19.7129 33.2156 19.9222 33.0764 20.0982 32.9004C20.2743 32.7243 20.4135 32.515 20.5078 32.2846C20.602 32.0542 20.6495 31.8073 20.6473 31.5583C20.6452 31.3094 20.5934 31.0633 20.4952 30.8346C20.3969 30.6058 20.2541 30.399 20.075 30.226L19.8481 29.9991H28.1241C28.6213 29.9991 29.0982 29.8016 29.4498 29.45C29.8014 29.0984 29.999 28.6215 29.999 28.1242C29.999 27.6269 29.8014 27.15 29.4498 26.7984C29.0982 26.4468 28.6213 26.2493 28.1241 26.2493H19.8481ZM9.37478 7.5C7.883 7.5 6.45231 8.09261 5.39746 9.14746C4.34261 10.2023 3.75 11.633 3.75 13.1248V14.9997H41.2486V13.1248C41.2486 11.633 40.6559 10.2023 39.6011 9.14746C38.5462 8.09261 37.1156 7.5 35.6238 7.5H9.37478Z" fill="#800080" fillOpacity="0.87" />
                                    </g>
                                </svg>
                                <span className="f-24 fw-400">100% Refund Validity : </span>
                                <span className="f-24 fw-700">{" "}3Month</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;