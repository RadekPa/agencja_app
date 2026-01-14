import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  InvNum: z.number().int().optional()
}).strict();
export const tblInvoiceWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblInvoiceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceWhereUniqueInput>;
export const tblInvoiceWhereUniqueInputObjectZodSchema = makeSchema();
