import LangContext from '@/context/LanguageContext'
import { parseISO, format } from 'date-fns'
import { useContext } from 'react'

interface DateProps {
  dateString: string
}

export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
