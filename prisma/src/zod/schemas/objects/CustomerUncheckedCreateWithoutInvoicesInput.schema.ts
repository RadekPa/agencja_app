import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  country: z.number().int().optional().nullable(),
  nip: z.string().optional().nullable(),
  regon: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable()
}).strict();
export const CustomerUncheckedCreateWithoutInvoicesInputObjectSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutInvoicesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUncheckedCreateWithoutInvoicesInput>;
export const CustomerUncheckedCreateWithoutInvoicesInputObjectZodSchema = makeSchema();
