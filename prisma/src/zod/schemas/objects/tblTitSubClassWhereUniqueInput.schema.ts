import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassSubClassCodeTitleIDCompoundUniqueInputObjectSchema as tblTitSubClassSubClassCodeTitleIDCompoundUniqueInputObjectSchema } from './tblTitSubClassSubClassCodeTitleIDCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  SubClassCode_TitleID: z.lazy(() => tblTitSubClassSubClassCodeTitleIDCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblTitSubClassWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblTitSubClassWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassWhereUniqueInput>;
export const tblTitSubClassWhereUniqueInputObjectZodSchema = makeSchema();
