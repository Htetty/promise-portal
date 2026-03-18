import { signinWithGoogle } from "../../actions";
import { SignInButton } from "./SignInButton";

interface LoginProps {
  errorMessage?: string;
}

export function Login({ errorMessage }: LoginProps) {
  return (
    <div className="flex items-center justify-center py-10 lg:py-0 px-3 lg:px-16 ">
      <div className="w-full max-w-md space-y-8">
        {/*<div className="flex justify-center mb-6">
                    <img
                        src="/images/SMCCDLogo.jpg"
                        alt="SMCCD Logo"
                        className="h-20 w-auto object-contain"
                    />
                </div>*/}

        <div>
          <h1 className="text-5xl lg:text-8xl font-extrabold text-[black] leading-tight text-center lg:text-left">
            Welcome Back <br />
            <span className="lg:inline-flex lg:whitespace-nowrap items-baseline">
              <span className="bg-[#FDD06E] text-[black] italic">
                Scholars
                <span className="font-kavoon inline-block ml-2 align-baseline rotate-6 text-7xl sm:text-6xl lg:text-8xl">
                  !&nbsp;
                </span>
              </span>
            </span>
          </h1>
        </div>

        <div>
          <form action={signinWithGoogle}>
            <SignInButton />
          </form>
        </div>

        {errorMessage && (
          <div
            role="alert"
            className="rounded-lg px-4 py-3 text-lg text-red-500 text-center"
          >
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
