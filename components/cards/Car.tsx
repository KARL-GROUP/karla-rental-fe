interface Props {
    name: string,
    price: string,
    title: string,
    image: any,
    suv: string,
    automatic: string,
    seats: string

}
import Image from "next/image";
import Button from "../ui/Button";

const Car = ({ name, price, title, image, suv, automatic, seats }: Props) => {
    return (
        <div className="bg-white rounded-xl shadow-xl px-5 py-5 flex flex-col gap-2 h-[55vh]">
            <div className="flex justify-between">
                <p className="font-bold text-[18px]">{name}</p>
                <p className="font-bold text-primary-blue text-[18px]">{price}<span className="text-black font-normal">/day</span></p>
            </div>
            {/* <p className="text-[#939393] text-[16px]">{title}</p> */}
            <img className= "h-[25vh]" src={image} alt="car" />
            <div className="flex justify-between py-3">
                <div className="flex items-center gap-2">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_106_438)">
                            <path d="M16.2667 5.66802C16.1 5.17636 15.6333 4.82635 15.0833 4.82635H5.91667C5.36667 4.82635 4.90833 5.17636 4.73333 5.66802L3 10.6597V17.3264C3 17.7847 3.375 18.1597 3.83333 18.1597H4.66667C5.125 18.1597 5.5 17.7847 5.5 17.3264V16.493H15.5V17.3264C15.5 17.7847 15.875 18.1597 16.3333 18.1597H17.1667C17.625 18.1597 18 17.7847 18 17.3264V10.6597L16.2667 5.66802ZM5.91667 13.993C5.225 13.993 4.66667 13.4347 4.66667 12.743C4.66667 12.0514 5.225 11.493 5.91667 11.493C6.60833 11.493 7.16667 12.0514 7.16667 12.743C7.16667 13.4347 6.60833 13.993 5.91667 13.993ZM15.0833 13.993C14.3917 13.993 13.8333 13.4347 13.8333 12.743C13.8333 12.0514 14.3917 11.493 15.0833 11.493C15.775 11.493 16.3333 12.0514 16.3333 12.743C16.3333 13.4347 15.775 13.993 15.0833 13.993ZM4.66667 9.82635L5.91667 6.07635H15.0833L16.3333 9.82635H4.66667Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_106_438">
                                <rect width="20" height="20" fill="white" transform="translate(0.5 0.659668)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p>{suv}</p>
                </div>
                <div className="flex items-center gap-2">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.659668" width="20" height="20" fill="url(#pattern0)" />
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_106_443" transform="scale(0.0104167)" />
                            </pattern>
                            <image id="image0_106_443" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACX0lEQVR4nO3c3U7UQBjG8ScR5DoMeCJwm8qHa3YD0TtRVOACIHiCXIYYFw/RMU26CTVh6fSdnbft/H/JJHuyecr7MIU5aCUAAAAAAACgvV1JM0nfJf2uV/V5KmlnBYPcHXleaxuS3kv6Iyk8su4lHUt6Tl764Z8vGfz/68xYwsbI86J9iLi4xToiL909cdltZ9ntaJs8u1mH4S/WO/LsbgwFXJNnd2coYE6e3U9DAT/Is7syFHBBnt1bQwEH5Nltdvw3tPrOC/LS2O9QwGvy0lmTdBIx/I/1d8hLaK3lTngj6Rl5q/NUAeStGAU4owBnFOCMApxRgDMKcEYBzijAGQU4owBnFOCMApyFwpe7UPhyFwpf7kLhy10ofLkLhS93ofDlLhS+3OW+wDDyvGhjH0iggCYKKGwggR3QRAGFDSSwA5oooLCBBHZAEwUUNpDADmiigMIGEtgBTRTw4BGlvRYD2Tc+H9blkagUeb3eAdUP+LnFxS3WSYKH9L5E5H1KWEIvCziMGMbDnZDz4fC9sRbQ9UHtv5JedsjbypzX+wImHYaxWIeZ8w7GWIDlZR2XHfK+Zc7rfQGW19XcDiCv9wXMDQP5NYC83hcw9leWeZ1zWptmfmnfNHOexzknyk79CsrYYVTfeTWAPI9zTrTjDhc4G0jeluGFVNUZKYvqNb2nERf3VdL6QPImmc85pqEcPXF7uK9/E9cHlHflfO6Itl3/sbuu3yl6V3+eGO7Bnnm3zueO4s2dzx3Fu3E6dyDBuaO6DcLI49wB53MOnM856ME5Bz055wAAAAAAAEDj9A8pFzV5vm6PxQAAAABJRU5ErkJggg==" />
                        </defs>
                    </svg>


                    <p>{automatic}</p>
                </div>
                <div className="flex items-center gap-2">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_106_446)">
                            <path d="M13.8334 9.82635C15.2167 9.82635 16.325 8.70969 16.325 7.32635C16.325 5.94302 15.2167 4.82635 13.8334 4.82635C12.45 4.82635 11.3334 5.94302 11.3334 7.32635C11.3334 8.70969 12.45 9.82635 13.8334 9.82635ZM7.16671 9.82635C8.55004 9.82635 9.65837 8.70969 9.65837 7.32635C9.65837 5.94302 8.55004 4.82635 7.16671 4.82635C5.78337 4.82635 4.66671 5.94302 4.66671 7.32635C4.66671 8.70969 5.78337 9.82635 7.16671 9.82635ZM7.16671 11.493C5.22504 11.493 1.33337 12.468 1.33337 14.4097V16.493H13V14.4097C13 12.468 9.10837 11.493 7.16671 11.493ZM13.8334 11.493C13.5917 11.493 13.3167 11.5097 13.025 11.5347C13.9917 12.2347 14.6667 13.1764 14.6667 14.4097V16.493H19.6667V14.4097C19.6667 12.468 15.775 11.493 13.8334 11.493Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_106_446">
                                <rect width="20" height="20" fill="white" transform="translate(0.5 0.659668)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p>{seats}</p>
                </div>
            </div>
            <Button text="Book" className="bg-[#D9D9D9] text-black py-2" />
        </div>
    );
}

export default Car;