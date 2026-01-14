import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './tblSubmEventsWhereUniqueInput.schema';
import { tblSubmEventsUpdateWithoutDictEventsInputObjectSchema as tblSubmEventsUpdateWithoutDictEventsInputObjectSchema } from './tblSubmEventsUpdateWithoutDictEventsInput.schema';
import { tblSubmEventsUncheckedUpdateWithoutDictEventsInputObjectSchema as tblSubmEventsUncheckedUpdateWithoutDictEventsInputObjectSchema } from './tblSubmEventsUncheckedUpdateWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmEventsUpdateWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedUpdateWithoutDictEventsInputObjectSchema)])
}).strict();
export const tblSubmEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsUpdateWithWhereUniqueWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsUpdateWithWhereUniqueWithoutDictEventsInput>;
export const tblSubmEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectZodSchema = makeSchema();
