'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import DashboardStats from '@/components/admin/DashboardStats'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'EDITOR')) {
      router.push('/admin/login')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!session) {
    return null
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="text-sm text-gray-500">
            Welcome back, {session.user.name}
          </div>
        </div>
        <DashboardStats />
      </div>
    </AdminLayout>
  )
}