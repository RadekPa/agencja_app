import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './tblSubmEventsWhereUniqueInput.schema';
import { tblSubmEventsUpdateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUpdateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUpdateWithoutTblSubmissionsInput.schema';
import { tblSubmEventsUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUncheckedUpdateWithoutTblSubmissionsInput.schema';
import { tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsCreateWithoutTblSubmissionsInput.schema';
import { tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUncheckedCreateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblSubmEventsUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const tblSubmEventsUpsertWithWhereUniqueWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsUpsertWithWhereUniqueWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsUpsertWithWhereUniqueWithoutTblSubmissionsInput>;
export const tblSubmEventsUpsertWithWhereUniqueWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
