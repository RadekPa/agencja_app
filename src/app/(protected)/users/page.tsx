"use client"
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, Th, Td } from '../../../components/ui/Table'
import { Pagination } from '../../../components/ui/Pagination'
import { UserCreateSchema, UserUpdateSchema } from '../../../validation/user'

type User = { id: number; name?: string | null; email: string; role: 'ADMIN' | 'ADVANCED' | 'USER'; dateMod?: string; permissions?: any }

export default function UsersPage() {
  const t = useTranslations('users')
  const tCommon = useTranslations('common')
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [meta, setMeta] = useState({ page: 1, pageSize: 10, total: 0, pages: 1 })

  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)

  const [formErrors, setFormErrors] = useState<string[]>([])
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'USER' })

  const load = async (p = page) => {
    setLoading(true)
    const qs = new URLSearchParams({ search, page: String(p), pageSize: String(pageSize) })
    const res = await fetch(`/api/users?${qs.toString()}`)
    if (!res.ok) { setUsers([]); setLoading(false); return }
    const json = await res.json()
    setUsers(Array.isArray(json?.data) ? json.data : [])
    setMeta(json?.meta ?? { page: p, pageSize, total: 0, pages: 1 })
    setLoading(false)
  }

  useEffect(()=>{ load(1) }, [search, pageSize])

  const addUser = async () => {
    const parsed = UserCreateSchema.safeParse(form)
    if (!parsed.success) { setFormErrors(parsed.error.errors.map(e=>e.message)); return }
    setFormErrors([])
    const res = await fetch('/api/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    if (!res.ok) {
      const err = await res.json().catch(()=>({ error: 'error' }))
      setFormErrors([err.error || t('error')])
      return
    }
    setForm({ name: '', email: '', password: '', role: 'USER' })
    setShowAddModal(false)
    await load(1)
  }

  const removeUser = async (id: number) => {
    if (!confirm(t('confirmDelete'))) return
    const res = await fetch(`/api/users/${id}`, { method: 'DELETE' })
    if (!res.ok) {
      alert(t('noPermission'))
      return
    }
    await load(page)
  }

  const updateRole = async (id: number, role: 'ADMIN'|'ADVANCED'|'USER') => {
    const res = await fetch(`/api/users/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ role }) })
    if (!res.ok) { alert(t('noPermission')); return }
    await load(page)
  }

  const openEdit = (u: User) => setEditingUser(u)
  const closeEdit = () => setEditingUser(null)

  const saveEdit = async (payload: any) => {
    // include permissions if present on payload
    const bodyToSend = { ...payload }
    if ((payload as any).permissions) bodyToSend.permissions = (payload as any).permissions
    const res = await fetch(`/api/users/${payload.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(bodyToSend) })
    if (!res.ok) { alert(t('updateError')); return }
    closeEdit()
    await load(page)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{t('title')}</h1>
          <Button variant="primary" onClick={() => { setShowAddModal(true); setFormErrors([]); }}>{t('createUser')}</Button>
        </div>
      </Card>

      <Card className="p-6">
        {loading ? <p className="text-center text-muted-foreground py-8">{tCommon('loading')}</p> : (
          <div className="space-y-4">
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>{t('email')}</Th>
                  <Th>{t('name')}</Th>
                  <Th>{t('role')}</Th>
                  <th></th>
                </tr>
              </thead>
                <tbody>
                {(Array.isArray(users) ? users : []).map(u => (
                  <tr key={u.id}>
                    <Td>{u.id}</Td>
                    <Td>{u.email}</Td>
                    <Td>{u.name ?? '-'}</Td>
                    <Td>
                      <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={u.role} onChange={e=>updateRole(u.id, e.target.value as any)}>
                        <option value="USER">USER</option>
                        <option value="ADVANCED">ADVANCED</option>
                        <option value="ADMIN">ADMIN</option>
                      </select>
                    </Td>
                    <Td>
                      <div className="flex items-center gap-2">
                        <Button onClick={()=>openEdit(u)}>{tCommon('edit')}</Button>
                        <Button onClick={()=>removeUser(u.id)}>{tCommon('delete')}</Button>
                      </div>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="flex items-center justify-between">
              <Pagination page={meta.page} pages={meta.pages} onPage={(p)=>{ setPage(p); load(p) }} />
              <div>
                <label className="label mr-2">{tCommon('perPage')}</label>
                <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={String(pageSize)} onChange={e=>{ setPageSize(Number(e.target.value)); setPage(1); load(1) }}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Add user modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-card text-card-foreground p-6 rounded shadow w-full max-w-lg border border-border">
            <h3 className="text-lg font-semibold mb-4">{t('createUser')}</h3>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="label">{t('name')}</label>
                <Input value={form.name} onChange={e=>setForm(prev=>({ ...prev, name: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('email')}</label>
                <Input value={form.email} onChange={e=>setForm(prev=>({ ...prev, email: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('password')}</label>
                <Input type="password" value={form.password} onChange={e=>setForm(prev=>({ ...prev, password: e.target.value }))} />
              </div>
              <div>
                <label className="label">{t('role')}</label>
                <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={form.role} onChange={e=>setForm(prev=>({ ...prev, role: e.target.value }))}>
                  <option value="USER">USER</option>
                  <option value="ADVANCED">ADVANCED</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              </div>
            </div>
            {formErrors.length > 0 && (
              <ul className="mt-2 list-disc list-inside text-sm text-red-600">
                {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
              </ul>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => { setShowAddModal(false); setFormErrors([]); }}>{tCommon('cancel')}</Button>
              <Button variant="primary" onClick={addUser}>{tCommon('add')}</Button>
            </div>
          </div>
        </div>
      )}

      {/* Simple edit modal */}
      {editingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-card text-card-foreground p-6 rounded shadow w-full max-w-lg border border-border">
            <h3 className="text-lg font-semibold mb-4">{t('editUser')}</h3>
            <div className="grid grid-cols-1 gap-3">
              <label className="label">{t('email')}</label>
              <Input value={editingUser.email} onChange={e=>setEditingUser(prev=>prev?{ ...prev, email: e.target.value }:prev)} />
              <label className="label">{t('name')}</label>
              <Input value={editingUser.name ?? ''} onChange={e=>setEditingUser(prev=>prev?{ ...prev, name: e.target.value }:prev)} />
              <label className="label">{t('role')}</label>
              <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={editingUser.role} onChange={e=>setEditingUser(prev=>prev?{ ...prev, role: e.target.value as any }:prev)}>
                <option value="USER">USER</option>
                <option value="ADVANCED">ADVANCED</option>
                <option value="ADMIN">ADMIN</option>
              </select>

              <div className="flex items-center justify-between">
                <div>
                  <label className="label">{t('permissions')}</label>
                  <div className="text-sm text-muted-foreground">{t('permissionsNote')}</div>
                </div>
                <div>
                  <a className="underline text-sm text-primary" href={`/permissions?userId=${editingUser.id}`}>{t('editPermissions')}</a>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={closeEdit}>{tCommon('cancel')}</Button>
              <Button variant="primary" onClick={()=>saveEdit(editingUser)}>{tCommon('save')}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
