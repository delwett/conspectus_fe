import { defaultLocale } from '@/config'

const { format } = new Intl.DateTimeFormat(defaultLocale, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
})

export default function formatDate(date: string | number | Date): string {
  return format(new Date(date))
}
