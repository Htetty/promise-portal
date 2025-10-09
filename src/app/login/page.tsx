import { ImageGallery } from './components/LeftSide/GallerySide';
import { Login } from './components/RightSide/LoginSide';

const errorCopy: Record<string, string> = {
    oauth_error: 'We could not start the Google sign-in. Please try again.',
    unexpected_error: 'Something went wrong while signing you in. Please try again.',
};

interface LoginPageProps {
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const resolvedParams = searchParams ? await searchParams : undefined;
    const errorKey = Array.isArray(resolvedParams?.error) ? resolvedParams?.error[0] : resolvedParams?.error;
    const errorMessage = errorKey ? errorCopy[errorKey] ?? 'Unable to sign in at the moment. Please try again.' : undefined;

    return (
        <div className="min-h-screen font-sans">

            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen ">
                <Login errorMessage={errorMessage} />
                <ImageGallery />
            </div>
        </div>
    );
}
