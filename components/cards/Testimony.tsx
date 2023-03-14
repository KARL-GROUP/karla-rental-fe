
interface Props {
    testimony: string,
    name: string,
    index: number

}

const Testimony = ({ testimony, name, index }: Props) => {
    return (
        <div className={` ${index === 1 ? "bg-white shadow-xl" : " bg-stone-50  "} px-10 pt-5 rounded-xl flex flex-col gap-5 relative`}>
            <div className="flex justify-between  px-10">
                <svg width="30" height="30" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_65_141)">
                        <path d="M24.05 17.3264L20 3.99304L15.95 17.3264H3.33337L13.6334 24.6764L9.71671 37.3264L20 29.5097L30.3 37.3264L26.3834 24.6764L36.6667 17.3264H24.05Z" fill="#00A5E7" />
                    </g>
                    <defs>
                        <clipPath id="clip0_65_141">
                            <rect width="40" height="40" fill="white" transform="translate(0 0.659668)" />
                        </clipPath>
                    </defs>
                </svg><svg width="30" height="30" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_65_141)">
                        <path d="M24.05 17.3264L20 3.99304L15.95 17.3264H3.33337L13.6334 24.6764L9.71671 37.3264L20 29.5097L30.3 37.3264L26.3834 24.6764L36.6667 17.3264H24.05Z" fill="#00A5E7" />
                    </g>
                    <defs>
                        <clipPath id="clip0_65_141">
                            <rect width="40" height="40" fill="white" transform="translate(0 0.659668)" />
                        </clipPath>
                    </defs>
                </svg><svg width="30" height="30" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_65_141)">
                        <path d="M24.05 17.3264L20 3.99304L15.95 17.3264H3.33337L13.6334 24.6764L9.71671 37.3264L20 29.5097L30.3 37.3264L26.3834 24.6764L36.6667 17.3264H24.05Z" fill="#00A5E7" />
                    </g>
                    <defs>
                        <clipPath id="clip0_65_141">
                            <rect width="40" height="40" fill="white" transform="translate(0 0.659668)" />
                        </clipPath>
                    </defs>
                </svg><svg width="30" height="30" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_65_141)">
                        <path d="M24.05 17.3264L20 3.99304L15.95 17.3264H3.33337L13.6334 24.6764L9.71671 37.3264L20 29.5097L30.3 37.3264L26.3834 24.6764L36.6667 17.3264H24.05Z" fill="#00A5E7" />
                    </g>
                    <defs>
                        <clipPath id="clip0_65_141">
                            <rect width="40" height="40" fill="white" transform="translate(0 0.659668)" />
                        </clipPath>
                    </defs>
                </svg>
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_65_182)">
                        <path d="M27.5 11.7097L18.5125 10.9347L15 2.65967L11.4875 10.9472L2.5 11.7097L9.325 17.6222L7.275 26.4097L15 21.7472L22.725 26.4097L20.6875 17.6222L27.5 11.7097ZM15 19.4097V7.78467L17.1375 12.8347L22.6125 13.3097L18.4625 16.9097L19.7125 22.2597L15 19.4097Z" fill="#00A5E7" />
                    </g>
                    <defs>
                        <clipPath id="clip0_65_182">
                            <rect width="30" height="30" fill="white" transform="translate(0 0.159668)" />
                        </clipPath>
                    </defs>
                </svg>
                <svg width="30" height="30" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_65_189)">
                        <path d="M26.5 11.8049L17.872 11.0218L14.5 2.65967L11.128 11.0344L2.5 11.8049L9.052 17.7797L7.084 26.6597L14.5 21.9481L21.916 26.6597L19.96 17.7797L26.5 11.8049ZM14.5 19.586L9.988 22.4534L11.188 17.047L7.204 13.4091L12.46 12.9291L14.5 7.83861L16.552 12.9418L21.808 13.4218L17.824 17.0597L19.024 22.466L14.5 19.586Z" fill="#00A5E7" />
                    </g>
                    <defs>
                        <clipPath id="clip0_65_189">
                            <rect width="30" height="30" fill="white" transform="translate(0 0.159668)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <p className="text-xl text-center">{testimony}</p>
            <p className="font-bold text-center pb-10">{name}</p>

            <div className="flex justify-end absolute -bottom-5 bg-white right-10">
                <div className=" p-3">
                    <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.50008 21.5763H8.75008L12.9167 13.2429V0.74292H0.416748V13.2429H6.66675L2.50008 21.5763ZM19.1667 21.5763H25.4167L29.5834 13.2429V0.74292H17.0834V13.2429H23.3334L19.1667 21.5763Z" fill="#00A5E7" />
                    </svg>

                </div>


            </div>

        </div>
    );
}

export default Testimony;