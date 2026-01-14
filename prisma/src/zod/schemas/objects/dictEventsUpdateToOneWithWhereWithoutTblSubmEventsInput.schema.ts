import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './dictEventsWhereInput.schema';
import { dictEventsUpdateWithoutTblSubmEventsInputObjectSchema as dictEventsUpdateWithoutTblSubmEventsInputObjectSchema } from './dictEventsUpdateWithoutTblSubmEventsInput.schema';
import { dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema as dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema } from './dictEventsUncheckedUpdateWithoutTblSubmEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictEventsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictEventsUpdateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema)])
}).strict();
export const dictEventsUpdateToOneWithWhereWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.dictEventsUpdateToOneWithWhereWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUpdateToOneWithWhereWithoutTblSubmEventsInput>;
export const dictEventsUpdateToOneWithWhereWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
