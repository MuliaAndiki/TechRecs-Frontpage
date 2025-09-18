import Shape from '../../ui/shape';
const Ball = () => {
  return (
    <>
      <Shape className="w-1 h-1 lg:w-150 lg:h-150 bg-[var(--shapeV1-parent)] rounded-full blur-2xl lg:blur-[500px] top-10  lg:left-0 translate-y-10 lg:-translate-x-100 z-[-5] " />
      <Shape className="w-1 h-1 lg:w-150 lg:h-150 bg-[var(--shapeV1-child)] rounded-full blur-2xl lg:blur-[500px] top-10  lg:right-0 translate-y-10 lg:translate-x-100 z-[-5] " />
    </>
  );
};

export default Ball;
