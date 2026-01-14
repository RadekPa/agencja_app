import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblInvoiceDetailsSelectObjectSchema as tblInvoiceDetailsSelectObjectSchema } from './tblInvoiceDetailsSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblInvoiceDetailsSelectObjectSchema).optional()
}).strict();
export const tblInvoiceDetailsArgsObjectSchema = makeSchema();
export const tblInvoiceDetailsArgsObjectZodSchema = makeSchema();
