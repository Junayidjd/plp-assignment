import { getCsrfToken } from "next-auth/react";
import Link from "next/link";

export default function SignIn({ csrfToken }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form method="post" action="/api/auth/callback/credentials" className="bg-white p-6 rounded shadow-md w-80">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <input name="callbackUrl" type="hidden" value="/" />
        
        <h2 className="text-xl mb-4 text-center">Sign In</h2>
        
        <input name="email" type="text" placeholder="Email" className="border p-2 w-full mb-3" />
        <input name="password" type="password" placeholder="Password" className="border p-2 w-full mb-4" />
        
        <button type="submit" className="bg-black text-white py-2 px-4 rounded w-full mb-2">
          Sign In
        </button>

        {/* ➕ Add Sign Up Link */}
        <p className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
