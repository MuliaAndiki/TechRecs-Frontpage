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
import { FormRegisterType } from '@/src/types/form';
import Fallback from '@/src/components/ui/Fallback';

interface RegisterProps {
  formRegister: FormRegisterType;
  setFormRegister: React.Dispatch<React.SetStateAction<FormRegisterType>>;
  isPending: boolean;
  onRegister: () => void;
}

const RegisterSection: React.FC<RegisterProps> = ({
  formRegister,
  isPending,
  onRegister,
  setFormRegister,
}) => {
  return (
    <View>
      <Box className="flex min-h-screen  justify-center items-center relative z-0">
        <Shape className="w-70 h-70 bg-linear-to-t from-[#C30EFF]/20 via-[#E8BAC0] to-[#471EFF] rounded-full blur-3xl z-[-5] translate-x-2/3 translate-y-2/3" />
        <Shape className="w-70 h-70 bg-linear-to-b from-[#C30EFF]/20 via-[#E8BAC0] to-[#471EFF] rounded-full blur-3xl z-[-5] -translate-x-2/3 -translate-y-2/3" />
        <Card className="w-full max-w-sm bg-foreground/7 border border-foreground/70">
          <CardHeader className="flex justify-center items-center flex-col">
            <CardTitle className="text-3xl text-center font-bold">
              Register to your account
            </CardTitle>
            <CardDescription>Enter your email below to register to your account</CardDescription>
            <Label className="text-3xl font-extrabold text-[var(--shapeV1-child)]">TechRecs</Label>
          </CardHeader>
          <CardContent>
            <form>
              <Box className="flex flex-col gap-6">
                <Box className="grid gap-2">
                  <Label className="text-lg font-semibold">Fullname</Label>
                  <Input
                    id="fullname"
                    type="text"
                    required
                    value={formRegister.fullName}
                    onChange={(e) =>
                      setFormRegister((prev) => {
                        const newObj = { ...prev, fullName: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Box>
                <Box className="grid gap-2">
                  <Label className="text-lg font-semibold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={formRegister.email}
                    onChange={(e) =>
                      setFormRegister((prev) => {
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
                    value={formRegister.password}
                    onChange={(e) =>
                      setFormRegister((prev) => {
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
              onClick={() => onRegister()}
              disabled={isPending}
            >
              {isPending ? <Fallback title="Wait" /> : 'Register'}
            </Button>
            <Link href="/login">
              <CardAction className=" text-end w-full font-light">Have Acount? </CardAction>
            </Link>

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

export default RegisterSection;
