interface Props{
    text?: string,
    className?: string
}

const Button = ({text, className}: Props) => {
    return ( 
        <button className={`${className} bg-primary-blue  font-medium  px-10 py-5 rounded text-xl`}>{text}</button>
     );
}
 
export default Button;