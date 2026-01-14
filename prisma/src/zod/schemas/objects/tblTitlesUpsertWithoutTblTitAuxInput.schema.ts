import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesUpdateWithoutTblTitAuxInputObjectSchema as tblTitlesUpdateWithoutTblTitAuxInputObjectSchema } from './tblTitlesUpdateWithoutTblTitAuxInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitAuxInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitAuxInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitAuxInput.schema';
import { tblTitlesCreateWithoutTblTitAuxInputObjectSchema as tblTitlesCreateWithoutTblTitAuxInputObjectSchema } from './tblTitlesCreateWithoutTblTitAuxInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitAuxInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblTitlesUpdateWithoutTblTitAuxInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitAuxInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitAuxInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema)]),
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional()
}).strict();
export const tblTitlesUpsertWithoutTblTitAuxInputObjectSchema: z.ZodType<Prisma.tblTitlesUpsertWithoutTblTitAuxInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpsertWithoutTblTitAuxInput>;
export const tblTitlesUpsertWithoutTblTitAuxInputObjectZodSchema = makeSchema();
