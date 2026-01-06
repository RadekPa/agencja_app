import { z } from 'zod'

export const ContactCreateSchema = z.object({
  phoneNumber: z.string().optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  firstName: z.string().min(2, 'Imię min. 2 znaki').max(30, 'Imię max. 30 znaków'),
  middleName: z.string().max(30, 'Drugie imię max. 30 znaków').optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  lastName: z.string().min(2, 'Nazwisko min. 2 znaki').max(50, 'Nazwisko max. 50 znaków'),
  informal: z.number().int().default(0),
  fax: z.string().max(20, 'Fax max. 20 znaków').optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  email: z.union([
    z.literal(''),
    z.string().email('Nieprawidłowy format email').max(50, 'Email max. 50 znaków')
  ]).optional().transform(val => val === '' ? undefined : val),
  contactPosition: z.string().max(50, 'Stanowisko max. 50 znaków').optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  accountant: z.number().int().optional().nullable(),
})

export const ContactUpdateSchema = z.object({
  phoneNumber: z.string().optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  firstName: z.string().min(2, 'Imię min. 2 znaki').max(30, 'Imię max. 30 znaków'),
  middleName: z.string().max(30, 'Drugie imię max. 30 znaków').optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  lastName: z.string().min(2, 'Nazwisko min. 2 znaki').max(50, 'Nazwisko max. 50 znaków'),
  informal: z.number().int().default(0),
  fax: z.string().max(20, 'Fax max. 20 znaków').optional().or(z.literal('')).transform(val => val === '' ? undefined : val),
  email: z.union([
    z.literal(''),
    z.string().email('Nieprawidłowy format email').max(50, 'Email max. 50 znaków')
  ]).optional().transform(val => val === '' ? undefined : val),
  contactPosition: z.string().max(50, 'Stanowisko max. 50 znaków').optional().or(z.literal('')).transform(val => val ==='' ? undefined : val),
  accountant: z.number().int().optional().nullable(),
})
