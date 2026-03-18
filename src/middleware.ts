import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // user is not signed in and trying to access dashboard --> redirect to login

  if (user && !user.email?.endsWith("@my.smccd.edu")) {
    await supabase.auth.signOut();
    return NextResponse.redirect(
      new URL("/login?error=unauthorized_domain", request.url)
    );
  }

  if (user && request.nextUrl.pathname.startsWith("/dashboard")) {
    const { data: student } = await supabase
      .from("Student_Data")
      .select("smccd_email")
      .eq("smccd_email", user.email)
      .single();

    if (!student) {
      await supabase.auth.signOut();
      return NextResponse.redirect(
        new URL("/login?error=not_enrolled", request.url)
      );
    }
  }

  if (!user && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  /*
  // user is signed in and trying to access login --> redirect to dashboard
  if (user && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // user is signed in and trying to access root --> redirect to dashboard
  if (user && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  } */

  return response;
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login"],
};
