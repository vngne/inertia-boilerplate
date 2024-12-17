import { Command } from 'lucide-react'
export default function RegisterSide() {
  return (
    <div className="hidden lg:block">
    <div className="flex flex-col justify-between h-full p-8 bg-zinc-100">
      <div className="space-y-6">
        <Command className="text-red-500 " />
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Join thousands of users
        </h2>
        <p className="text-zinc-900">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
          consectetur? Dicta repellendus et soluta sequi? Culpa et deleniti,
          commodi reprehenderit, consequatur necessitatibus nemo eius
          quibusdam quaerat doloribus maiores dicta dolorum.
        </p>
      </div>
    </div>
  </div>
  )
}
