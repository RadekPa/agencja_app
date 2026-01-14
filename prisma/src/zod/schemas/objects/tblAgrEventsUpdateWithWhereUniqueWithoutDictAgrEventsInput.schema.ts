import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './tblAgrEventsWhereUniqueInput.schema';
import { tblAgrEventsUpdateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUpdateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUpdateWithoutDictAgrEventsInput.schema';
import { tblAgrEventsUncheckedUpdateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUncheckedUpdateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUncheckedUpdateWithoutDictAgrEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrEventsUpdateWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedUpdateWithoutDictAgrEventsInputObjectSchema)])
}).strict();
export const tblAgrEventsUpdateWithWhereUniqueWithoutDictAgrEventsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsUpdateWithWhereUniqueWithoutDictAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsUpdateWithWhereUniqueWithoutDictAgrEventsInput>;
export const tblAgrEventsUpdateWithWhereUniqueWithoutDictAgrEventsInputObjectZodSchema = makeSchema();
