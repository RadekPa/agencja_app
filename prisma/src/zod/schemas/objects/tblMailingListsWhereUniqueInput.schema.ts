import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblMailingListsClassCodeSubClassCodeCustIDCompoundUniqueInputObjectSchema as tblMailingListsClassCodeSubClassCodeCustIDCompoundUniqueInputObjectSchema } from './tblMailingListsClassCodeSubClassCodeCustIDCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  ClassCode_SubClassCode_CustID: z.lazy(() => tblMailingListsClassCodeSubClassCodeCustIDCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblMailingListsWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblMailingListsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsWhereUniqueInput>;
export const tblMailingListsWhereUniqueInputObjectZodSchema = makeSchema();
