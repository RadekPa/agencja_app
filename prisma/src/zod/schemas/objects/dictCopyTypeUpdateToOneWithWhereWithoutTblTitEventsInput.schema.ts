import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './dictCopyTypeWhereInput.schema';
import { dictCopyTypeUpdateWithoutTblTitEventsInputObjectSchema as dictCopyTypeUpdateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUpdateWithoutTblTitEventsInput.schema';
import { dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectSchema as dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectSchema } from './dictCopyTypeUncheckedUpdateWithoutTblTitEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictCopyTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictCopyTypeUpdateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectSchema)])
}).strict();
export const dictCopyTypeUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUpdateToOneWithWhereWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUpdateToOneWithWhereWithoutTblTitEventsInput>;
export const dictCopyTypeUpdateToOneWithWhereWithoutTblTitEventsInputObjectZodSchema = makeSchema();
