"use client"
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  Database, 
  FileText, 
  Receipt, 
  TrendingUp, 
  Shield,
  UserCircle,
  UsersIcon,
  Languages as LanguagesIcon,
  Building2,
  BookOpen,
  File,
  DollarSign
} from 'lucide-react'

type Permission = {
  id: number
  module: string
  userAccess: boolean
  advancedAccess: boolean
  adminAccess: boolean
}

const MODULES = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, category: 'main' },
  { key: 'contacts', label: 'Kontakty', icon: UserCircle, category: 'data' },
  { key: 'clients', label: 'Klienci', icon: Building2, category: 'data' },
  { key: 'authors', label: 'Autorzy', icon: BookOpen, category: 'data' },
  { key: 'invoices', label: 'Faktury VAT', icon: Receipt, category: 'main' },
  { key: 'simple-invoices', label: 'Faktury proste', icon: File, category: 'main' },
  { key: 'cashflow', label: 'Cashflow', icon: TrendingUp, category: 'main' },
  { key: 'finances', label: 'Finanse', icon: DollarSign, category: 'main' },
  { key: 'users', label: 'Użytkownicy', icon: UsersIcon, category: 'admin' },
  { key: 'permissions', label: 'Uprawnienia', icon: Shield, category: 'admin' },
  { key: 'languages', label: 'Języki', icon: LanguagesIcon, category: 'admin' },
]

export default function PermissionsPage(){
  const t = useTranslations('permissions')
  const tCommon = useTranslations('common')
  const [permissions, setPermissions] = useState<Record<string, Permission>>({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => { loadPermissions() }, [])

  const loadPermissions = async () => {
    setLoading(true)
    const res = await fetch('/api/permissions')
    if (!res.ok) { 
      setPermissions({})
      setLoading(false)
      return 
    }
    const json = await res.json()
    const permissionsMap: Record<string, Permission> = {}
    
    // Map permissions by module
    if (Array.isArray(json.data)) {
      json.data.forEach((p: Permission) => {
        permissionsMap[p.module] = p
      })
    }
    
    // Initialize missing modules with default values
    MODULES.forEach(mod => {
      if (!permissionsMap[mod.key]) {
        permissionsMap[mod.key] = {
          id: 0,
          module: mod.key,
          userAccess: false,
          advancedAccess: false,
          adminAccess: true,
        }
      }
    })
    
    setPermissions(permissionsMap)
    setLoading(false)
  }

  const toggleAccess = (moduleKey: string, role: 'userAccess' | 'advancedAccess' | 'adminAccess') => {
    setPermissions(prev => ({
      ...prev,
      [moduleKey]: {
        ...prev[moduleKey],
        [role]: !prev[moduleKey]?.[role]
      }
    }))
  }

  const save = async () => {
    setLoading(true)
    setMessage(null)
    
    try {
      // Save each module's permissions
      for (const mod of MODULES) {
        const perm = permissions[mod.key]
        if (perm) {
          const res = await fetch('/api/permissions', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              module: mod.key,
              userAccess: perm.userAccess,
              advancedAccess: perm.advancedAccess,
              adminAccess: perm.adminAccess,
            })
          })
          
          if (!res.ok) {
            setMessage(t('saveError'))
            setLoading(false)
            return
          }
        }
      }
      
      setMessage(t('saved'))
      await loadPermissions()
    } catch (error) {
      setMessage(t('saveError'))
    }
    
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">{t('title')}</h1>
            <p className="text-sm text-muted-foreground mt-2">
              {t('description')}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant="primary" onClick={save} disabled={loading}>
              {loading ? t('saving') : t('save')}
            </Button>
            {message && (
              <div className={`text-sm ${message === t('saveError') ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-sm">Moduł</th>
                <th className="text-center py-4 px-4 font-semibold text-sm">
                  <div className="flex flex-col items-center gap-1">
                    <span>USER</span>
                    <span className="text-xs font-normal text-muted-foreground">Podstawowy</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-semibold text-sm">
                  <div className="flex flex-col items-center gap-1">
                    <span>ADVANCED</span>
                    <span className="text-xs font-normal text-muted-foreground">Rozszerzony</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-semibold text-sm">
                  <div className="flex flex-col items-center gap-1">
                    <span>ADMIN</span>
                    <span className="text-xs font-normal text-muted-foreground">Pełny</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Main Modules */}
              {MODULES.filter(m => m.category === 'main').map(mod => {
                const perm = permissions[mod.key]
                const Icon = mod.icon
                return (
                  <tr key={mod.key} className="border-b border-gray-100 dark:border-gray-800 hover:bg-accent/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">{mod.label}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.userAccess ?? false}
                        onChange={() => toggleAccess(mod.key, 'userAccess')}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.advancedAccess ?? false}
                        onChange={() => toggleAccess(mod.key, 'advancedAccess')}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.adminAccess ?? true}
                        onChange={() => toggleAccess(mod.key, 'adminAccess')}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                    </td>
                  </tr>
                )
              })}
              
              {/* Data Category Header */}
              <tr className="bg-muted/30">
                <td colSpan={4} className="py-2 px-4 text-sm font-semibold text-muted-foreground">
                  Dane
                </td>
              </tr>
              
              {/* Data Modules */}
              {MODULES.filter(m => m.category === 'data').map(mod => {
                const perm = permissions[mod.key]
                const Icon = mod.icon
                return (
                  <tr key={mod.key} className="border-b border-gray-100 dark:border-gray-800 hover:bg-accent/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">{mod.label}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.userAccess ?? false}
                        onChange={() => toggleAccess(mod.key, 'userAccess')}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.advancedAccess ?? false}
                        onChange={() => toggleAccess(mod.key, 'advancedAccess')}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.adminAccess ?? true}
                        onChange={() => toggleAccess(mod.key, 'adminAccess')}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                    </td>
                  </tr>
                )
              })}
              
              {/* Admin Category Header */}
              <tr className="bg-muted/30">
                <td colSpan={4} className="py-2 px-4 text-sm font-semibold text-muted-foreground">
                  {t('administration')}
                </td>
              </tr>
              
              {/* Admin Modules */}
              {MODULES.filter(m => m.category === 'admin').map(mod => {
                const perm = permissions[mod.key]
                const Icon = mod.icon
                return (
                  <tr key={mod.key} className="border-b border-gray-100 dark:border-gray-800 hover:bg-accent/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">{mod.label}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.userAccess ?? false}
                        onChange={() => toggleAccess(mod.key, 'userAccess')}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.advancedAccess ?? false}
                        onChange={() => toggleAccess(mod.key, 'advancedAccess')}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <input
                        type="checkbox"
                        checked={perm?.adminAccess ?? true}
                        onChange={() => toggleAccess(mod.key, 'adminAccess')}
                        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg space-y-2 text-sm">
          <p className="font-semibold mb-3">{t('accessLevels')}:</p>
          <div className="space-y-1.5 text-muted-foreground">
            <p><strong className="text-foreground">USER</strong> - {t('basicAccess')}</p>
            <p><strong className="text-foreground">ADVANCED</strong> - {t('extendedAccess')}</p>
            <p><strong className="text-foreground">ADMIN</strong> - {t('fullAccess')}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
