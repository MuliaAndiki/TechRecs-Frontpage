import Shape from '../../ui/Shape';
const Ball = () => {
  return (
    <>
      <Shape className="w-150 h-150 bg-[var(--shapeV1-parent)] rounded-full blur-[500px] left-0 -translate-x-100 z-[-5]" />
      <Shape className="w-150 h-150 bg-[var(--shapeV1-child)] rounded-full blur-[500px] right-0 translate-x-100 z-[-5]" />
    </>
  );
};

export default Ball;
