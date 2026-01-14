import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './tblSubmEventsWhereUniqueInput.schema';
import { tblSubmEventsUpdateWithoutDictEventsInputObjectSchema as tblSubmEventsUpdateWithoutDictEventsInputObjectSchema } from './tblSubmEventsUpdateWithoutDictEventsInput.schema';
import { tblSubmEventsUncheckedUpdateWithoutDictEventsInputObjectSchema as tblSubmEventsUncheckedUpdateWithoutDictEventsInputObjectSchema } from './tblSubmEventsUncheckedUpdateWithoutDictEventsInput.schema';
import { tblSubmEventsCreateWithoutDictEventsInputObjectSchema as tblSubmEventsCreateWithoutDictEventsInputObjectSchema } from './tblSubmEventsCreateWithoutDictEventsInput.schema';
import { tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema as tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema } from './tblSubmEventsUncheckedCreateWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblSubmEventsUpdateWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedUpdateWithoutDictEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblSubmEventsCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema)])
}).strict();
export const tblSubmEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsUpsertWithWhereUniqueWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsUpsertWithWhereUniqueWithoutDictEventsInput>;
export const tblSubmEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectZodSchema = makeSchema();
