import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-purple-50 px-4 py-16 text-center md:px-8">
      <div className="mx-auto max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Image
              src="/images/logoWtext.png"
              alt="Karhuno Logo"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-purple-800 md:text-5xl">
          Page not found
        </h1>
        <p className="mb-8 text-lg text-neutral-700">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved, deleted, or never existed.
        </p>
        <div className="flex justify-center items-center">
          <Button
            variant="accent"
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Link href="/" className="inline-flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-16">
        <p className="text-sm text-neutral-500">
          If you believe this is an error, please{" "}
          <Link
            href="/contact"
            className="font-medium text-neutral-900 underline hover:text-purple-700 hover:cursor-pointer"
          >
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
