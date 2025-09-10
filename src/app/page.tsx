// app/page.tsx
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Simple-Auth-App 🚀</h1>
      <p className="text-lg text-gray-600 mb-8">
        Please login to continue
      </p>
      <Link
        href="/login"
        className="px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Go to Login
      </Link>
    </main>
  )
}
