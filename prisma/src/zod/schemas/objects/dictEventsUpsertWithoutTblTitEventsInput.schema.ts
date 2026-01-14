import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsUpdateWithoutTblTitEventsInputObjectSchema as dictEventsUpdateWithoutTblTitEventsInputObjectSchema } from './dictEventsUpdateWithoutTblTitEventsInput.schema';
import { dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectSchema as dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectSchema } from './dictEventsUncheckedUpdateWithoutTblTitEventsInput.schema';
import { dictEventsCreateWithoutTblTitEventsInputObjectSchema as dictEventsCreateWithoutTblTitEventsInputObjectSchema } from './dictEventsCreateWithoutTblTitEventsInput.schema';
import { dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema as dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './dictEventsUncheckedCreateWithoutTblTitEventsInput.schema';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './dictEventsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictEventsUpdateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictEventsCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedCreateWithoutTblTitEventsInputObjectSchema)]),
  where: z.lazy(() => dictEventsWhereInputObjectSchema).optional()
}).strict();
export const dictEventsUpsertWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictEventsUpsertWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUpsertWithoutTblTitEventsInput>;
export const dictEventsUpsertWithoutTblTitEventsInputObjectZodSchema = makeSchema();
