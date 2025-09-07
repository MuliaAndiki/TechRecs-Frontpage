import BlankLayout from '@/src/core/layout/blank.layout';
import HeaderApp from '@/src/core/components/header-app';
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full">
      <HeaderApp />
      <BlankLayout>{children}</BlankLayout>
    </main>
  );
}
