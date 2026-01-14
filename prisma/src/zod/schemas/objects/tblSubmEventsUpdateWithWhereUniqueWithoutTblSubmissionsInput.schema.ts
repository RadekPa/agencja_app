import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './tblSubmEventsWhereUniqueInput.schema';
import { tblSubmEventsUpdateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUpdateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUpdateWithoutTblSubmissionsInput.schema';
import { tblSubmEventsUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUncheckedUpdateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmEventsUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const tblSubmEventsUpdateWithWhereUniqueWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsUpdateWithWhereUniqueWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsUpdateWithWhereUniqueWithoutTblSubmissionsInput>;
export const tblSubmEventsUpdateWithWhereUniqueWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
