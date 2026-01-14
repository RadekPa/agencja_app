import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  InvNum: z.number().int(),
  InvDetKey: z.number().int(),
  InvType: z.string().max(1),
  AgID: z.number().int().optional().nullable(),
  OrdNr: z.number().int().optional().nullable(),
  NrItems: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable(),
  RptTitle: z.string().max(150).optional().nullable(),
  RptISBN: z.string().max(50).optional().nullable(),
  RptAuthor: z.string().max(150).optional().nullable(),
  RoyDate: z.coerce.date().optional().nullable(),
  RoyRight: z.string().max(15).optional().nullable(),
  RoyCopies: z.number().int().optional().nullable(),
  RoyPrice: z.number().optional().nullable(),
  RoyRate: z.number().optional().nullable(),
  RoyXRate: z.number().optional().nullable(),
  RoyThisRoy: z.number().optional().nullable(),
  RoyAdvLeft: z.number().optional().nullable(),
  RoyRoyDue: z.number().optional().nullable()
}).strict();
export const tblInvoiceDetailsCreateManyInputObjectSchema: z.ZodType<Prisma.tblInvoiceDetailsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceDetailsCreateManyInput>;
export const tblInvoiceDetailsCreateManyInputObjectZodSchema = makeSchema();
