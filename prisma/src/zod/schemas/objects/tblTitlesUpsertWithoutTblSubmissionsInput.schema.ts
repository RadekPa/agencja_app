import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesUpdateWithoutTblSubmissionsInputObjectSchema as tblTitlesUpdateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUpdateWithoutTblSubmissionsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblSubmissionsInput.schema';
import { tblTitlesCreateWithoutTblSubmissionsInputObjectSchema as tblTitlesCreateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesCreateWithoutTblSubmissionsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblSubmissionsInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblTitlesUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]),
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional()
}).strict();
export const tblTitlesUpsertWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblTitlesUpsertWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpsertWithoutTblSubmissionsInput>;
export const tblTitlesUpsertWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
