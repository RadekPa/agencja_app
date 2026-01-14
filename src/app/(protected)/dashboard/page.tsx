import { prisma } from '../../../lib/prisma'
import { HeroCards } from '../../../components/dashboard/HeroCards'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const t = await getTranslations()

  const p = prisma as any
  const customers = await p.tblCustomers.count()

  return (
    <div className="space-y-6">
      <HeroCards items={[
        { title: t('dashboard.customers'), value: customers },
        { title: t('dashboard.status'), value: t('dashboard.online'), hint: t('common.welcome') }
      ]} />
    </div>
  )
}
