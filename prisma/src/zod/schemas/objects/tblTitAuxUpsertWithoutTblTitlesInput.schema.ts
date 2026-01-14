import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuxUpdateWithoutTblTitlesInputObjectSchema as tblTitAuxUpdateWithoutTblTitlesInputObjectSchema } from './tblTitAuxUpdateWithoutTblTitlesInput.schema';
import { tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblTitAuxUncheckedUpdateWithoutTblTitlesInput.schema';
import { tblTitAuxCreateWithoutTblTitlesInputObjectSchema as tblTitAuxCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuxCreateWithoutTblTitlesInput.schema';
import { tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuxUncheckedCreateWithoutTblTitlesInput.schema';
import { tblTitAuxWhereInputObjectSchema as tblTitAuxWhereInputObjectSchema } from './tblTitAuxWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblTitAuxUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuxUncheckedUpdateWithoutTblTitlesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitAuxCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuxUncheckedCreateWithoutTblTitlesInputObjectSchema)]),
  where: z.lazy(() => tblTitAuxWhereInputObjectSchema).optional()
}).strict();
export const tblTitAuxUpsertWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuxUpsertWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxUpsertWithoutTblTitlesInput>;
export const tblTitAuxUpsertWithoutTblTitlesInputObjectZodSchema = makeSchema();
