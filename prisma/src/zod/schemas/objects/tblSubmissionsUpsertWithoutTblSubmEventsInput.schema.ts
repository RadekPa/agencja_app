import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsUpdateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUpdateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUpdateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsCreateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsWhereInputObjectSchema as tblSubmissionsWhereInputObjectSchema } from './tblSubmissionsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblSubmissionsUpdateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblSubmEventsInputObjectSchema)]),
  where: z.lazy(() => tblSubmissionsWhereInputObjectSchema).optional()
}).strict();
export const tblSubmissionsUpsertWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpsertWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpsertWithoutTblSubmEventsInput>;
export const tblSubmissionsUpsertWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
