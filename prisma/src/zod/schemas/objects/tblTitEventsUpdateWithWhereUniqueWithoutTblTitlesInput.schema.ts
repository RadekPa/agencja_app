import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsUpdateWithoutTblTitlesInputObjectSchema as tblTitEventsUpdateWithoutTblTitlesInputObjectSchema } from './tblTitEventsUpdateWithoutTblTitlesInput.schema';
import { tblTitEventsUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblTitEventsUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblTitEventsUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitEventsUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsUncheckedUpdateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitEventsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpdateWithWhereUniqueWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpdateWithWhereUniqueWithoutTblTitlesInput>;
export const tblTitEventsUpdateWithWhereUniqueWithoutTblTitlesInputObjectZodSchema = makeSchema();
