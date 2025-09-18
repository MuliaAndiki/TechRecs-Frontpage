import Shape from '../../ui/shape';
const TechnologyShape = () => {
  return (
    <>
      <Shape className="w-130 h-130 bg-[var(--shapeV1-parent)]/80 rounded-full blur-[500px] z-[-5] right-0 -translate-y-40" />
      <Shape className="w-130 h-130 bg-[var(--shapeV1-child)]/80 rounded-full blur-[500px] z-[-5] right-0 translate-y-30" />
      <Shape className="w-120 h-120 bg-[var(--shapeV1-parent)] rounded-full blur-[500px] z-[-5] left-0 -translate-x-80 translate-y-40" />
      <Shape className="w-120 h-120 bg-[var(--shapeV1-child)] rounded-full blur-[500px] z-[-5] left-0 -translate-x-80 -translate-y-40" />
    </>
  );
};

export default TechnologyShape;
