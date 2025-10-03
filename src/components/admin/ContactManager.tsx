'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Mail, Phone, Calendar, Search, Eye, Check, X, Archive } from 'lucide-react'

interface Contact {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  subject: string
  message: string
  status: 'PENDING' | 'READ' | 'RESPONDED' | 'CLOSED'
  createdAt: string
  updatedAt: string
}

export default function ContactManager() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchContacts()
  }, [currentPage, statusFilter])

  const fetchContacts = async () => {
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '10'
      })

      if (statusFilter) params.append('status', statusFilter)

      const response = await fetch(`/api/admin/contacts?${params}`)
      if (response.ok) {
        const data = await response.json()
        setContacts(data.contacts)
        setTotalPages(data.pagination.pages)
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateContactStatus = async (id: string, status: Contact['status']) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })

      if (response.ok) {
        const updatedContact = await response.json()
        setContacts(contacts.map(c => c.id === id ? updatedContact : c))
      }
    } catch (error) {
      console.error('Failed to update contact:', error)
    }
  }

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: Contact['status']) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800'
      case 'READ':
        return 'bg-blue-100 text-blue-800'
      case 'RESPONDED':
        return 'bg-green-100 text-green-800'
      case 'CLOSED':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: Contact['status']) => {
    switch (status) {
      case 'PENDING':
        return <Mail className="h-4 w-4" />
      case 'READ':
        return <Eye className="h-4 w-4" />
      case 'RESPONDED':
        return <Check className="h-4 w-4" />
      case 'CLOSED':
        return <Archive className="h-4 w-4" />
      default:
        return <Mail className="h-4 w-4" />
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6">
        {[...Array(5)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Management</h1>
          <p className="text-gray-600">Manage contact form submissions</p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="PENDING">Pending</option>
          <option value="READ">Read</option>
          <option value="RESPONDED">Responded</option>
          <option value="CLOSED">Closed</option>
        </select>

        <div className="text-sm text-gray-600 flex items-center">
          Total: {contacts.length} contacts
        </div>
      </div>

      {/* Contacts List */}
      <div className="space-y-4">
        {filteredContacts.map((contact) => (
          <Card key={contact.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(contact.status)}`}>
                      {getStatusIcon(contact.status)}
                      {contact.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${contact.email}`} className="hover:text-blue-600">
                        {contact.email}
                      </a>
                    </div>
                    {contact.phone && (
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        <a href={`tel:${contact.phone}`} className="hover:text-blue-600">
                          {contact.phone}
                        </a>
                      </div>
                    )}
                    {contact.company && (
                      <div className="text-gray-600">
                        <strong>Company:</strong> {contact.company}
                      </div>
                    )}
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(contact.createdAt)}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Subject: {contact.subject}</h4>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                      {contact.message}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 ml-4">
                  {contact.status === 'PENDING' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateContactStatus(contact.id, 'READ')}
                    >
                      Mark as Read
                    </Button>
                  )}
                  {contact.status === 'READ' && (
                    <Button
                      size="sm"
                      onClick={() => updateContactStatus(contact.id, 'RESPONDED')}
                    >
                      Mark Responded
                    </Button>
                  )}
                  {(contact.status === 'READ' || contact.status === 'RESPONDED') && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateContactStatus(contact.id, 'CLOSED')}
                    >
                      Close
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No contacts found.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}