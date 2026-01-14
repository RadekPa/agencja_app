import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsUpdateWithoutDictEventsInputObjectSchema as tblTitEventsUpdateWithoutDictEventsInputObjectSchema } from './tblTitEventsUpdateWithoutDictEventsInput.schema';
import { tblTitEventsUncheckedUpdateWithoutDictEventsInputObjectSchema as tblTitEventsUncheckedUpdateWithoutDictEventsInputObjectSchema } from './tblTitEventsUncheckedUpdateWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitEventsUpdateWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsUncheckedUpdateWithoutDictEventsInputObjectSchema)])
}).strict();
export const tblTitEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpdateWithWhereUniqueWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpdateWithWhereUniqueWithoutDictEventsInput>;
export const tblTitEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectZodSchema = makeSchema();
