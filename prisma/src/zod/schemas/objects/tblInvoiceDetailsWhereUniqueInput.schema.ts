import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblInvoiceDetailsInvNumInvDetKeyCompoundUniqueInputObjectSchema as tblInvoiceDetailsInvNumInvDetKeyCompoundUniqueInputObjectSchema } from './tblInvoiceDetailsInvNumInvDetKeyCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  InvNum_InvDetKey: z.lazy(() => tblInvoiceDetailsInvNumInvDetKeyCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblInvoiceDetailsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblInvoiceDetailsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblInvoiceDetailsWhereUniqueInput>;
export const tblInvoiceDetailsWhereUniqueInputObjectZodSchema = makeSchema();
