import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesUpdateWithoutTblTitSubClassInputObjectSchema as tblTitlesUpdateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUpdateWithoutTblTitSubClassInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitSubClassInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitSubClassInput.schema';
import { tblTitlesCreateWithoutTblTitSubClassInputObjectSchema as tblTitlesCreateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesCreateWithoutTblTitSubClassInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitSubClassInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblTitlesUpdateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitSubClassInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema)]),
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional()
}).strict();
export const tblTitlesUpsertWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitlesUpsertWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpsertWithoutTblTitSubClassInput>;
export const tblTitlesUpsertWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
