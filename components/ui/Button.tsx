interface Props{
    text?: string,
    className?: string,
    onClick ?: any
}

const Button = ({text, className, onClick}: Props) => {
    return ( 
        <button className={`${className}  font-medium  px-10 py-3 rounded text-xl`} onClick={onClick}>{text}</button>
     );
}
 
export default Button;