import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereInputObjectSchema as tblSubmissionsWhereInputObjectSchema } from './tblSubmissionsWhereInput.schema';
import { tblSubmissionsUpdateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUpdateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUpdateWithoutTblSubmEventsInput.schema';
import { tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema as tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema } from './tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblSubmissionsUpdateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema)])
}).strict();
export const tblSubmissionsUpdateToOneWithWhereWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateToOneWithWhereWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateToOneWithWhereWithoutTblSubmEventsInput>;
export const tblSubmissionsUpdateToOneWithWhereWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
