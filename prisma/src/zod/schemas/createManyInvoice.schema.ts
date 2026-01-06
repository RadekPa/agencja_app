import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InvoiceCreateManyInputObjectSchema as InvoiceCreateManyInputObjectSchema } from './objects/InvoiceCreateManyInput.schema';

export const InvoiceCreateManySchema: z.ZodType<Prisma.InvoiceCreateManyArgs> = z.object({ data: z.union([ InvoiceCreateManyInputObjectSchema, z.array(InvoiceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.InvoiceCreateManyArgs>;

export const InvoiceCreateManyZodSchema = z.object({ data: z.union([ InvoiceCreateManyInputObjectSchema, z.array(InvoiceCreateManyInputObjectSchema) ]),  }).strict();