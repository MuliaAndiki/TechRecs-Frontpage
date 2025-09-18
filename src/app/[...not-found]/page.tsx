import Container from '@/src/components/ui/Container';
import NotFound from '@/src/core/components/not-found';
import BlankLayout from '@/src/core/layout/blank.layout';
const NotFoundPage = async () => {
  return (
    <Container className="w-full">
      <BlankLayout>
        <NotFound />
      </BlankLayout>
    </Container>
  );
};
export default NotFoundPage;
