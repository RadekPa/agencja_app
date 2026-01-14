import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeUpdateWithoutTblTitEventsInputObjectSchema as dictCopyTypeUpdateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUpdateWithoutTblTitEventsInput.schema';
import { dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectSchema as dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUncheckedUpdateWithoutTblTitEventsInput.schema';
import { dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema as dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeCreateWithoutTblTitEventsInput.schema';
import { dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema as dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUncheckedCreateWithoutTblTitEventsInput.schema';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './dictCopyTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictCopyTypeUpdateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictCopyTypeCreateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedCreateWithoutTblTitEventsInputObjectSchema)]),
  where: z.lazy(() => dictCopyTypeWhereInputObjectSchema).optional()
}).strict();
export const dictCopyTypeUpsertWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUpsertWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUpsertWithoutTblTitEventsInput>;
export const dictCopyTypeUpsertWithoutTblTitEventsInputObjectZodSchema = makeSchema();
