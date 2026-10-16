import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

type Form = z.infer<typeof schema>

export default function Login(){
  const { register, handleSubmit, formState } = useForm<Form>({ resolver: zodResolver(schema) })
  const onSubmit = (data: Form) => {
    console.log('login', data)
    alert('Demo login - integrate Firebase auth next')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-xl font-semibold">Sign in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
        <div>
          <label className="block text-sm">Email</label>
          <input className="w-full border rounded p-2" {...register('email')} />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input type="password" className="w-full border rounded p-2" {...register('password')} />
        </div>
        <div>
          <button className="w-full bg-forest text-white py-2 rounded">Sign in</button>
        </div>
      </form>
    </div>
  )
}
