import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictAgrEventsWhereInputObjectSchema as dictAgrEventsWhereInputObjectSchema } from './dictAgrEventsWhereInput.schema';
import { dictAgrEventsUpdateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUpdateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUpdateWithoutTblAgrEventsInput.schema';
import { dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema as dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema } from './dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictAgrEventsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictAgrEventsUpdateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema)])
}).strict();
export const dictAgrEventsUpdateToOneWithWhereWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.dictAgrEventsUpdateToOneWithWhereWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsUpdateToOneWithWhereWithoutTblAgrEventsInput>;
export const dictAgrEventsUpdateToOneWithWhereWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
