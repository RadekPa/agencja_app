import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(250).optional().nullable(),
  email: z.string().max(50).optional().nullable(),
  phone: z.string().max(20).optional().nullable(),
  address: z.string().max(150).optional().nullable(),
  city: z.string().max(50).optional().nullable(),
  postalCode: z.string().max(50).optional().nullable(),
  country: z.number().int().optional().nullable(),
  nip: z.string().max(50).optional().nullable(),
  regon: z.string().max(50).optional().nullable(),
  notes: z.string().max(250).optional().nullable(),
  createdAt: z.coerce.date().optional().nullable()
}).strict();
export const CustomerCreateManyInputObjectSchema: z.ZodType<Prisma.CustomerCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateManyInput>;
export const CustomerCreateManyInputObjectZodSchema = makeSchema();
