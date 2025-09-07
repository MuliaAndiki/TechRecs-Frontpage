import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import Shape from '@/src/components/ui/Shape';
import Spread from '@/src/components/ui/spread';
import View from '@/src/components/ui/View';
import Box from '@/src/components/ui/Box';
import { FormLoginType } from '@/src/types/form';
import Fallback from '@/src/components/ui/Fallback';

interface LoginPops {
  formLogin: FormLoginType;
  setFormLogin: React.Dispatch<React.SetStateAction<FormLoginType>>;
  onLogin: () => void;
  isPending: boolean;
}

const LoginSection: React.FC<LoginPops> = ({ formLogin, isPending, onLogin, setFormLogin }) => {
  return (
    <View>
      <Box className="flex min-h-screen  justify-center items-center relative z-0 ">
        <Shape className="w-70 h-70 bg-linear-to-t from-[#C30EFF]/20 via-[#E8BAC0] to-[#471EFF] rounded-full blur-3xl z-[-5] translate-x-2/3 -translate-y-2/3" />
        <Shape className="w-70 h-70 bg-linear-to-b from-[#C30EFF]/20 via-[#E8BAC0] to-[#471EFF] rounded-full blur-3xl z-[-5] -translate-x-2/3 translate-y-2/3" />
        <Card className="w-full max-w-sm bg-foreground/7 border border-foreground/70">
          <CardHeader className="flex justify-center items-center flex-col">
            <CardTitle className="text-3xl font-bold">Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
            <Label className="text-3xl font-extrabold text-[var(--shapeV1-child)]">TechRecs</Label>
          </CardHeader>
          <CardContent>
            <form>
              <Box className="flex flex-col gap-6">
                <Box className="grid gap-2">
                  <Label className="text-lg font-semibold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={formLogin.email}
                    onChange={(e) =>
                      setFormLogin((prev) => {
                        const newObj = { ...prev, email: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Box>
                <Box className="grid gap-2">
                  <Box className="flex items-center">
                    <Label className="text-lg font-semibold">Password</Label>
                  </Box>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={formLogin.password}
                    onChange={(e) =>
                      setFormLogin((prev) => {
                        const newObj = { ...prev, password: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Box>
              </Box>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full"
              variant={'glass'}
              onClick={() => onLogin()}
              disabled={isPending}
            >
              {isPending ? <Fallback title="Wait" /> : 'Login'}
            </Button>
            <Box className="w-full flex justify-between items-center">
              <Link href="#">
                <CardAction className=" text-center font-light">Forgot Password</CardAction>
              </Link>
              <Link href="/register">
                <CardAction className=" text-center font-light">Sign up </CardAction>
              </Link>
            </Box>
            <Spread orientation="horizontal" />
            <Button variant="glass" className="w-full">
              Login with Google
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </View>
  );
};

export default LoginSection;
