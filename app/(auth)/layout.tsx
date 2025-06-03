import React, { ReactNode } from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-4 py-10">
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px]border px-4 py-10 shadow-md sm:min-w-[520] sm:px-8">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2 5">
            <h1 className="h2-bold text-dark100_light900">Join Devflow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your question answered
            </p>
          </div>
          <Image
            src="images/site-logo.svg"
            alt="Devflow Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};
export default AuthLayout;
