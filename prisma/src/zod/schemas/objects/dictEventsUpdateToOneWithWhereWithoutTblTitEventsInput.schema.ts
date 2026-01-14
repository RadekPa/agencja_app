import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './dictEventsWhereInput.schema';
import { dictEventsUpdateWithoutTblTitEventsInputObjectSchema as dictEventsUpdateWithoutTblTitEventsInputObjectSchema } from './dictEventsUpdateWithoutTblTitEventsInput.schema';
import { dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectSchema as dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectSchema } from './dictEventsUncheckedUpdateWithoutTblTitEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictEventsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictEventsUpdateWithoutTblTitEventsInputObjectSchema), z.lazy(() => dictEventsUncheckedUpdateWithoutTblTitEventsInputObjectSchema)])
}).strict();
export const dictEventsUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictEventsUpdateToOneWithWhereWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsUpdateToOneWithWhereWithoutTblTitEventsInput>;
export const dictEventsUpdateToOneWithWhereWithoutTblTitEventsInputObjectZodSchema = makeSchema();
