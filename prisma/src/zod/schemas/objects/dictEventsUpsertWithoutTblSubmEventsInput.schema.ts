import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsUpdateWithoutTblSubmEventsInputObjectSchema as dictEventsUpdateWithoutTblSubmEventsInputObjectSchema } from './dictEventsUpdateWithoutTblSubmEventsInput.schema';
import { dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema as dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema } from './dictEventsUncheckedUpdateWithoutTblSubmEventsInput.schema';
import { dictEventsCreateWithoutTblSubmEventsInputObjectSchema as dictEventsCreateWithoutTblSubmEventsInputObjectSchema } from './dictEventsCreateWithoutTblSubmEventsInput.schema';
import { dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema as dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema } from './dictEventsUncheckedCreateWithoutTblSubmEventsInput.schema';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './dictEventsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictEventsUpdateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedUpdateWithoutTblSubmEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictEventsCreateWithoutTblSubmEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedCreateWithoutTblSubmEventsInputObjectSchema)]),
  where: z.lazy(() => dictEventsWhereInputObjectSchema).optional()
}).strict();
export const dictEventsUpsertWithoutTblSubmEventsInputObjectSchema: z.ZodType<Prisma.dictEventsUpsertWithoutTblSubmEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUpsertWithoutTblSubmEventsInput>;
export const dictEventsUpsertWithoutTblSubmEventsInputObjectZodSchema = makeSchema();
