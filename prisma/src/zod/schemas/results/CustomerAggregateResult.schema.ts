import * as z from 'zod';
export const CustomerAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    custAbb: z.number(),
    name: z.number(),
    email: z.number(),
    phone: z.number(),
    address: z.number(),
    city: z.number(),
    postalCode: z.number(),
    country: z.number(),
    nip: z.number(),
    regon: z.number(),
    notes: z.number(),
    createdAt: z.number(),
    invoices: z.number(),
    simpleInvoicesAsClient: z.number(),
    simpleInvoicesAsBillTo: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    country: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    country: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    custAbb: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    address: z.string().nullable(),
    city: z.string().nullable(),
    postalCode: z.string().nullable(),
    country: z.number().int().nullable(),
    nip: z.string().nullable(),
    regon: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    custAbb: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    address: z.string().nullable(),
    city: z.string().nullable(),
    postalCode: z.string().nullable(),
    country: z.number().int().nullable(),
    nip: z.string().nullable(),
    regon: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});