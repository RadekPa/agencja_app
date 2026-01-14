"use client"
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

interface AgreementDetails {
  id: string
  customerId: string
  customerName: string
  customerDetails: any
  titleId: string
  titleName: string
  titleDetails: any
  date: string
  currency: string
  currencyDesc: string
  language: string
  languageDesc: string
  commission: number
  commissionMaterials: number
  clientReference: string
  status: string
  validYY: number
  pubTermMM: number
  maxNoOfCopies: number
  minNoOfCopies: number
  estimatedCopyPrice: number
  graalShare: number
  copiesToOwner: number
  copiesToGraal: number
  graalRepresent: boolean
  remarks: string
  localTitle: string
  localISBN: string
  localPubDate: string
  agrDoc: string
  dateMod: string
  userMod: string
  events: any[]
  rights: any[]
  royalties: any[]
}

export default function AgreementDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [agreement, setAgreement] = useState<AgreementDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAgreement = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/agreements/${params.id}`)
        if (!response.ok) {
          setError('Nie znaleziono umowy')
          return
        }
        const data = await response.json()
        setAgreement(data)
      } catch (err) {
        console.error('Error fetching agreement:', err)
        setError('Błąd podczas ładowania umowy')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchAgreement()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.back()} className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Powrót
          </Button>
        </div>
        <Card className="p-6">
          <p className="text-center text-muted-foreground">Ładowanie...</p>
        </Card>
      </div>
    )
  }

  if (error || !agreement) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.back()} className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Powrót
          </Button>
        </div>
        <Card className="p-6">
          <p className="text-center text-red-500">{error || 'Umowa nie znaleziona'}</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.back()} className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Powrót
          </Button>
          <h1 className="text-2xl font-bold">Umowa #{agreement.id}</h1>
        </div>
        <div className="text-sm text-muted-foreground">
          Status: <span className={agreement.status === 'A' ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
            {agreement.status === 'A' ? '✓ Aktywna' : '✗ Nieaktywna'}
          </span>
        </div>
      </div>

      {/* Main Info */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Informacje ogólne</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Klient</label>
              <p className="mt-1 font-medium">{agreement.customerName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Tytuł</label>
              <p className="mt-1 font-medium">{agreement.titleName || '-'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Data umowy</label>
              <p className="mt-1 font-medium">{new Intl.DateTimeFormat('pl-PL').format(new Date(agreement.date))}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Waluta</label>
              <p className="mt-1 font-medium">{agreement.currencyDesc || agreement.currency}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Język</label>
              <p className="mt-1 font-medium">{agreement.languageDesc || agreement.language || '-'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Referencja klienta</label>
              <p className="mt-1 font-medium">{agreement.clientReference || '-'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Ostatnia modyfikacja</label>
              <p className="mt-1 text-sm">{new Intl.DateTimeFormat('pl-PL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(agreement.dateMod))}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Przez użytkownika</label>
              <p className="mt-1 font-medium">{agreement.userMod}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Financial Details */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Szczegóły finansowe</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Prowizja</label>
            <p className="mt-1 text-lg font-semibold">{agreement.commission?.toFixed(2) || '0.00'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Prowizja materiałów</label>
            <p className="mt-1 text-lg font-semibold">{agreement.commissionMaterials?.toFixed(2) || '0.00'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Udział Graala</label>
            <p className="mt-1 text-lg font-semibold">{agreement.graalShare?.toFixed(2) || '0.00'} %</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Szacunkowa cena kopii</label>
            <p className="mt-1 text-lg font-semibold">{agreement.estimatedCopyPrice?.toFixed(2) || '0.00'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Kopie dla właściciela</label>
            <p className="mt-1 text-lg font-semibold">{agreement.copiesToOwner || 0}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Kopie dla Graala</label>
            <p className="mt-1 text-lg font-semibold">{agreement.copiesToGraal || 0}</p>
          </div>
        </div>
      </Card>

      {/* Copy Limits */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Limity kopii</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Maksimum kopii</label>
            <p className="mt-1 text-lg font-semibold">{agreement.maxNoOfCopies || 'Brak limitu'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Minimum kopii</label>
            <p className="mt-1 text-lg font-semibold">{agreement.minNoOfCopies || 'Brak limitu'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Ważność (lata)</label>
            <p className="mt-1 text-lg font-semibold">{agreement.validYY || '-'}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Okres publikacji (miesiące)</label>
            <p className="mt-1 text-lg font-semibold">{agreement.pubTermMM || '-'}</p>
          </div>
        </div>
      </Card>

      {/* Local Details */}
      {(agreement.localTitle || agreement.localISBN || agreement.localPubDate) && (
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Informacje lokalne</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Lokalny tytuł</label>
              <p className="mt-1 font-medium">{agreement.localTitle || '-'}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Lokalny ISBN</label>
              <p className="mt-1 font-medium">{agreement.localISBN || '-'}</p>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-muted-foreground">Data publikacji (lokal)</label>
              <p className="mt-1 font-medium">
                {agreement.localPubDate 
                  ? new Intl.DateTimeFormat('pl-PL').format(new Date(agreement.localPubDate))
                  : '-'
                }
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Remarks */}
      {agreement.remarks && (
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Uwagi</h2>
          <p className="text-sm text-foreground whitespace-pre-wrap">{agreement.remarks}</p>
        </Card>
      )}

      {/* Events */}
      {agreement.events && agreement.events.length > 0 && (
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Zdarzenia ({agreement.events.length})</h2>
          <div className="space-y-2">
            {agreement.events.map((event: any, idx: number) => (
              <div key={idx} className="flex justify-between text-sm p-2 hover:bg-accent rounded">
                <span className="font-medium">{event.AgrEventCode}</span>
                <span className="text-muted-foreground">
                  {new Intl.DateTimeFormat('pl-PL').format(new Date(event.EventDate))}
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Rights */}
      {agreement.rights && agreement.rights.length > 0 && (
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Prawa ({agreement.rights.length})</h2>
          <div className="space-y-2">
            {agreement.rights.map((right: any, idx: number) => (
              <div key={idx} className="text-sm p-2 hover:bg-accent rounded">
                <p className="font-medium">Prawo #{right.AgrRightID}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Royalties */}
      {agreement.royalties && agreement.royalties.length > 0 && (
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Tantiemy ({agreement.royalties.length})</h2>
          <div className="space-y-2">
            {agreement.royalties.map((royalty: any, idx: number) => (
              <div key={idx} className="text-sm p-2 hover:bg-accent rounded">
                <p className="font-medium">Tantiema #{royalty.RoyaltyID}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
