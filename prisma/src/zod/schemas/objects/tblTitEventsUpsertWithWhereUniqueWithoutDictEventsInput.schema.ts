import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsUpdateWithoutDictEventsInputObjectSchema as tblTitEventsUpdateWithoutDictEventsInputObjectSchema } from './tblTitEventsUpdateWithoutDictEventsInput.schema';
import { tblTitEventsUncheckedUpdateWithoutDictEventsInputObjectSchema as tblTitEventsUncheckedUpdateWithoutDictEventsInputObjectSchema } from './tblTitEventsUncheckedUpdateWithoutDictEventsInput.schema';
import { tblTitEventsCreateWithoutDictEventsInputObjectSchema as tblTitEventsCreateWithoutDictEventsInputObjectSchema } from './tblTitEventsCreateWithoutDictEventsInput.schema';
import { tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema as tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblTitEventsUpdateWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsUncheckedUpdateWithoutDictEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema)])
}).strict();
export const tblTitEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpsertWithWhereUniqueWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpsertWithWhereUniqueWithoutDictEventsInput>;
export const tblTitEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectZodSchema = makeSchema();
