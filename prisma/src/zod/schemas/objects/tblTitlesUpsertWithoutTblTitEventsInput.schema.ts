import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesUpdateWithoutTblTitEventsInputObjectSchema as tblTitlesUpdateWithoutTblTitEventsInputObjectSchema } from './tblTitlesUpdateWithoutTblTitEventsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitEventsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitEventsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitEventsInput.schema';
import { tblTitlesCreateWithoutTblTitEventsInputObjectSchema as tblTitlesCreateWithoutTblTitEventsInputObjectSchema } from './tblTitlesCreateWithoutTblTitEventsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitEventsInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblTitlesUpdateWithoutTblTitEventsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitEventsInputObjectSchema)]),
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional()
}).strict();
export const tblTitlesUpsertWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.tblTitlesUpsertWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpsertWithoutTblTitEventsInput>;
export const tblTitlesUpsertWithoutTblTitEventsInputObjectZodSchema = makeSchema();
