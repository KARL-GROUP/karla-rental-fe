interface Props{
    text?: string,
    className?: string,
    onClick ?: any
}

const Button = ({text, className, onClick}: Props) => {
    return ( 
        <button className={`${className}  font-medium  px-8 py-4 rounded text-xl`} onClick={onClick}>{text}</button>
     );
}
 
export default Button;