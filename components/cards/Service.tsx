interface Props {
    key: number,
    title: string,
    icon: any,
    description: string
}

const Service = ({ title, icon, description }: Props) => {
    return (
        <div className="bg-white shadow-xl px-[30px] relative py-5 rounded-[10px] flex flex-col gap-4">
            <div className="bg-primary-blue rounded-full grid place-content-center w-[50px] h-[50px] absolute right-5 -top-7">{icon}</div>
            <p className="font-bold text-[20px]">{title}</p>
            <p className="text-primary-text text-[18px]">{description}</p>
        </div>
    );
}

export default Service;