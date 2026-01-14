import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblInvoiceSelectObjectSchema as tblInvoiceSelectObjectSchema } from './tblInvoiceSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tblInvoiceSelectObjectSchema).optional()
}).strict();
export const tblInvoiceArgsObjectSchema = makeSchema();
export const tblInvoiceArgsObjectZodSchema = makeSchema();
