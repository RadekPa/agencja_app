import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesUpdateWithoutTblTitAuthorsInputObjectSchema as tblTitlesUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUpdateWithoutTblTitAuthorsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitAuthorsInput.schema';
import { tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema as tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesCreateWithoutTblTitAuthorsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitAuthorsInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblTitlesUpdateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema)]),
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional()
}).strict();
export const tblTitlesUpsertWithoutTblTitAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitlesUpsertWithoutTblTitAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpsertWithoutTblTitAuthorsInput>;
export const tblTitlesUpsertWithoutTblTitAuthorsInputObjectZodSchema = makeSchema();
