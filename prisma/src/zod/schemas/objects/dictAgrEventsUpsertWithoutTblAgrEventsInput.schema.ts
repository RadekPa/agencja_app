import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAgrEventsUpdateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUpdateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUpdateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsCreateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUncheckedCreateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsWhereInputObjectSchema as dictAgrEventsWhereInputObjectSchema } from './dictAgrEventsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictAgrEventsUpdateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictAgrEventsCreateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => dictAgrEventsUncheckedCreateWithoutTblAgrEventsInputObjectSchema)]),
  where: z.lazy(() => dictAgrEventsWhereInputObjectSchema).optional()
}).strict();
export const dictAgrEventsUpsertWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.dictAgrEventsUpsertWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsUpsertWithoutTblAgrEventsInput>;
export const dictAgrEventsUpsertWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
