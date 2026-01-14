import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateNestedManyWithoutDictCoverFormatInputObjectSchema as tblTitlesCreateNestedManyWithoutDictCoverFormatInputObjectSchema } from './tblTitlesCreateNestedManyWithoutDictCoverFormatInput.schema'

const makeSchema = () => z.object({
  CoverFormatDesc: z.string().max(30),
  tblTitles: z.lazy(() => tblTitlesCreateNestedManyWithoutDictCoverFormatInputObjectSchema).optional()
}).strict();
export const dictCoverFormatCreateInputObjectSchema: z.ZodType<Prisma.dictCoverFormatCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatCreateInput>;
export const dictCoverFormatCreateInputObjectZodSchema = makeSchema();
