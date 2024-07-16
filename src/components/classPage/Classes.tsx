type Props = {
  name: string;
  description?: string;
  image: string;
};

export const Classes = ({ name, description, image }: Props) => {
  const overLayStyles = `p-s absolute z-30 flex h-[380px] w-[450px] flex-col items-center
  justify-center whitespace-normal bg-blue-500 text-center text-white opacity-0 
  transition duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overLayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5 px-5">{description}</p>
      </div>
      <img src={`${image}`} alt={image} />
    </li>
  );
};
