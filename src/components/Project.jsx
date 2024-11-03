function Project(props) {
  // eslint-disable-next-line react/prop-types
  let back = props ? props.back : "";
  return (
    <div
      className={`bg-gray-500 text-white min-w-52 h-32 2xl:min-w-64 2xl:h-40 rounded-[45px] flex items-center justify-center ${back}`}
    >
      <p>project</p>
    </div>
  );
}

export default Project;
