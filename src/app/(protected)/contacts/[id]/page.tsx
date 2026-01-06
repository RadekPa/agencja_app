'use client'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Modal } from '../../../../components/ui/Modal'
import { ContactUpdateSchema } from '../../../../validation/contact'
import Image from 'next/image'

type Contact = { 
  id: number
  phoneNumber?: string | null
  firstName: string
  middleName?: string | null
  lastName: string
  informal: number
  fax?: string | null
  email?: string | null
  contactPosition?: string | null
  accountant?: number | null
  photos?: string[]
  client?: {
    id: number
    name: string
  } | null
  createdAt: string
  updatedAt: string
}

export default function ContactDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const t = useTranslations('contacts')
  const tCommon = useTranslations('common')
  const [contact, setContact] = useState<Contact | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [formErrors, setFormErrors] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const loadContact = async () => {
    const res = await fetch(`/api/contacts/${id}`)
    const c = await res.json()
    setContact(c)
  }

  useEffect(() => { if (id) loadContact() }, [id])

  const updateContact = async () => {
    if (!contact) return
    const parsed = ContactUpdateSchema.safeParse({ 
      phoneNumber: contact.phoneNumber ?? '',
      firstName: contact.firstName,
      middleName: contact.middleName ?? '',
      lastName: contact.lastName,
      informal: contact.informal ?? 0,
      fax: contact.fax ?? '',
      email: contact.email ?? '',
      contactPosition: contact.contactPosition ?? '',
      accountant: contact.accountant,
    })
    if (!parsed.success) {
      setFormErrors(parsed.error.errors.map(e=>e.message))
      return
    }
    setFormErrors([])
    await fetch(`/api/contacts/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data) })
    await loadContact()
    setEditMode(false)
  }

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('photo', file)

      const res = await fetch(`/api/contacts/${id}/photos`, {
        method: 'POST',
        body: formData
      })

      if (res.ok) {
        await loadContact()
      } else {
        alert('Błąd podczas przesyłania zdjęcia')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Błąd podczas przesyłania zdjęcia')
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const deletePhoto = async (photoUrl: string) => {
    try {
      const res = await fetch(`/api/contacts/${id}/photos?url=${encodeURIComponent(photoUrl)}`, {
        method: 'DELETE'
      })

      if (res.ok) {
        await loadContact()
        setDeleteConfirm(null)
      } else {
        alert('Błąd podczas usuwania zdjęcia')
      }
    } catch (error) {
      console.error('Delete error:', error)
      alert('Błąd podczas usuwania zdjęcia')
    }
  }

  if (!contact) return <p className="text-center text-muted-foreground py-8">{tCommon('loading')}</p>

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{t('contactDetails')}</h1>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => window.history.back()}>
              {tCommon('back')}
            </Button>
            {!editMode ? (
              <Button variant="primary" onClick={() => setEditMode(true)}>
                {tCommon('edit')}
              </Button>
            ) : (
              <>
                <Button variant="secondary" onClick={() => { setEditMode(false); loadContact() }}>
                  {tCommon('cancel')}
                </Button>
                <Button variant="primary" onClick={updateContact}>
                  {tCommon('save')}
                </Button>
              </>
            )}
          </div>
        </div>

        {formErrors.length > 0 && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded">
            <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400">
              {formErrors.map((e, i) => (<li key={i}>{e}</li>))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Dane osobowe
            </h3>
            <div>
              <label className="label text-xs text-gray-500">{t('firstName')}</label>
              {editMode ? (
                <Input value={contact.firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact({ ...contact, firstName: e.target.value })} />
              ) : (
                <p className="text-base font-medium">{contact.firstName}</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">{t('middleName')}</label>
              {editMode ? (
                <Input value={contact.middleName ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact({ ...contact, middleName: e.target.value })} />
              ) : (
                <p className="text-base">{contact.middleName || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">{t('lastName')}</label>
              {editMode ? (
                <Input value={contact.lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact({ ...contact, lastName: e.target.value })} />
              ) : (
                <p className="text-base font-medium">{contact.lastName}</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">Telefon</label>
              {editMode ? (
                <Input value={contact.phoneNumber ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact({ ...contact, phoneNumber: e.target.value })} />
              ) : (
                <p className="text-base">{contact.phoneNumber || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">Email</label>
              {editMode ? (
                <Input type="email" value={contact.email ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact({ ...contact, email: e.target.value })} />
              ) : (
                <p className="text-base">{contact.email || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">Fax</label>
              {editMode ? (
                <Input value={contact.fax ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact({ ...contact, fax: e.target.value })} />
              ) : (
                <p className="text-base">{contact.fax || '-'}</p>
              )}
            </div>
            <div>
              <label className="label text-xs text-gray-500">Stanowisko</label>
              {editMode ? (
                <Input value={contact.contactPosition ?? ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact({ ...contact, contactPosition: e.target.value })} />
              ) : (
                <p className="text-base">{contact.contactPosition || '-'}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Informacje dodatkowe
            </h3>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 grid grid-cols-2 gap-4 text-sm text-gray-500">
          <div>
            <span className="font-medium">{tCommon('createdAt')}:</span> {new Intl.DateTimeFormat('pl-PL', { 
              year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' 
            }).format(new Date(contact.createdAt))}
          </div>
        </div>
      </Card>

      {/* Galeria zdjęć */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{t('photoGallery')}</h2>
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button 
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              variant="primary"
            >
              {uploading ? t('uploading') : t('addPhoto')}
            </Button>
          </div>
        </div>

        {contact.photos && contact.photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {contact.photos.map((photoUrl, index) => (
              <div key={index} className="relative group">
                <div 
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                  onClick={() => setSelectedImage(photoUrl)}
                >
                  <Image
                    src={photoUrl}
                    alt={`${contact.firstName} ${contact.lastName} - ${t('photoPreview')} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
                  onClick={() => setDeleteConfirm(photoUrl)}
                >
                  {tCommon('delete')}
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700">
            <p className="text-lg">{t('noPhotos')}</p>
            <p className="text-sm mt-2 text-gray-500">{t('addFirstPhoto') || 'Dodaj pierwsze zdjęcie klikając przycisk powyżej'}</p>
          </div>
        )}
      </Card>

      {/* Modal podglądu zdjęcia */}
      <Modal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        title={t('photoPreview')}
      >
        {selectedImage && (
          <div className="relative w-full bg-gray-100 dark:bg-gray-900 rounded-lg" style={{ height: '70vh' }}>
            <Image
              src={selectedImage}
              alt={t('photoPreview')}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        )}
      </Modal>

      {/* Modal potwierdzenia usunięcia */}
      <Modal
        isOpen={deleteConfirm !== null}
        onClose={() => setDeleteConfirm(null)}
        title={tCommon('confirm')}
      >
        <div className="space-y-6">
          <p className="text-base">{t('confirmDeletePhoto')}</p>
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button variant="secondary" onClick={() => setDeleteConfirm(null)}>
              {tCommon('cancel')}
            </Button>
            <Button variant="destructive" onClick={() => deleteConfirm && deletePhoto(deleteConfirm)}>
              {tCommon('delete')}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
