import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesUncheckedCreateNestedManyWithoutDictCoverFormatInputObjectSchema as tblTitlesUncheckedCreateNestedManyWithoutDictCoverFormatInputObjectSchema } from './tblTitlesUncheckedCreateNestedManyWithoutDictCoverFormatInput.schema'

const makeSchema = () => z.object({
  CoverFormatID: z.number().int().optional(),
  CoverFormatDesc: z.string().max(30),
  tblTitles: z.lazy(() => tblTitlesUncheckedCreateNestedManyWithoutDictCoverFormatInputObjectSchema).optional()
}).strict();
export const dictCoverFormatUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictCoverFormatUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatUncheckedCreateInput>;
export const dictCoverFormatUncheckedCreateInputObjectZodSchema = makeSchema();
