import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SimpleInvoiceCreateManyInputObjectSchema as SimpleInvoiceCreateManyInputObjectSchema } from './objects/SimpleInvoiceCreateManyInput.schema';

export const SimpleInvoiceCreateManySchema: z.ZodType<Prisma.SimpleInvoiceCreateManyArgs> = z.object({ data: z.union([ SimpleInvoiceCreateManyInputObjectSchema, z.array(SimpleInvoiceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.SimpleInvoiceCreateManyArgs>;

export const SimpleInvoiceCreateManyZodSchema = z.object({ data: z.union([ SimpleInvoiceCreateManyInputObjectSchema, z.array(SimpleInvoiceCreateManyInputObjectSchema) ]),  }).strict();