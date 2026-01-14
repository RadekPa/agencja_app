import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './tblAgrEventsWhereUniqueInput.schema';
import { tblAgrEventsUpdateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUpdateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUpdateWithoutDictAgrEventsInput.schema';
import { tblAgrEventsUncheckedUpdateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUncheckedUpdateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUncheckedUpdateWithoutDictAgrEventsInput.schema';
import { tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsCreateWithoutDictAgrEventsInput.schema';
import { tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUncheckedCreateWithoutDictAgrEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgrEventsUpdateWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedUpdateWithoutDictAgrEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema)])
}).strict();
export const tblAgrEventsUpsertWithWhereUniqueWithoutDictAgrEventsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsUpsertWithWhereUniqueWithoutDictAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsUpsertWithWhereUniqueWithoutDictAgrEventsInput>;
export const tblAgrEventsUpsertWithWhereUniqueWithoutDictAgrEventsInputObjectZodSchema = makeSchema();
