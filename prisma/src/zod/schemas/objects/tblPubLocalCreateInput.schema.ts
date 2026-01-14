import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateNestedOneWithoutTblPubLocalInputObjectSchema as tblAgreementsCreateNestedOneWithoutTblPubLocalInputObjectSchema } from './tblAgreementsCreateNestedOneWithoutTblPubLocalInput.schema'

const makeSchema = () => z.object({
  LocalTitle: z.string().max(150).optional().nullable(),
  PubDate: z.coerce.date().optional().nullable(),
  LocalISBN: z.string().max(13).optional().nullable(),
  Printrun: z.number().int().optional().nullable(),
  LocalEdition: z.number().int().optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedOneWithoutTblPubLocalInputObjectSchema).optional()
}).strict();
export const tblPubLocalCreateInputObjectSchema: z.ZodType<Prisma.tblPubLocalCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalCreateInput>;
export const tblPubLocalCreateInputObjectZodSchema = makeSchema();
