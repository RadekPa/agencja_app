import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblInvoiceCreateManyInputObjectSchema as tblInvoiceCreateManyInputObjectSchema } from './objects/tblInvoiceCreateManyInput.schema';

export const tblInvoiceCreateManySchema: z.ZodType<Prisma.tblInvoiceCreateManyArgs> = z.object({ data: z.union([ tblInvoiceCreateManyInputObjectSchema, z.array(tblInvoiceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblInvoiceCreateManyArgs>;

export const tblInvoiceCreateManyZodSchema = z.object({ data: z.union([ tblInvoiceCreateManyInputObjectSchema, z.array(tblInvoiceCreateManyInputObjectSchema) ]),  }).strict();