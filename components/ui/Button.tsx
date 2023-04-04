interface Props{
    text?: string,
    className?: string
}

const Button = ({text, className}: Props) => {
    return ( 
        <button className={`${className}  font-medium  px-10 py-3 rounded text-xl`}>{text}</button>
     );
}
 
export default Button;