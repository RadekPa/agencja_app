import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceDetailsCreateManyInputObjectSchema as tblInvoiceDetailsCreateManyInputObjectSchema } from './objects/tblInvoiceDetailsCreateManyInput.schema';

export const tblInvoiceDetailsCreateManySchema: z.ZodType<Prisma.tblInvoiceDetailsCreateManyArgs> = z.object({ data: z.union([ tblInvoiceDetailsCreateManyInputObjectSchema, z.array(tblInvoiceDetailsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblInvoiceDetailsCreateManyArgs>;

export const tblInvoiceDetailsCreateManyZodSchema = z.object({ data: z.union([ tblInvoiceDetailsCreateManyInputObjectSchema, z.array(tblInvoiceDetailsCreateManyInputObjectSchema) ]),  }).strict();