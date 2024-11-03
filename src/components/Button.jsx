/* eslint-disable react/prop-types */
function Button(props) {
  let color = props.color ? props.color : "bg-white text-black";
  return (
    <button
      className={`${color} rounded-[8px] md:rounded-[19px] mt-2 text-xs md:text-base capitalize py-1 px-2 md:py-4 md:px-8 md:font-bold mb-[-15px]`}
      {...(props.email && {
        onClick: () => {
          window.location.href = `mailto:${props.email}`;
        },
      })}
    >
      {props.name}
    </button>
  );
}

export default Button;
