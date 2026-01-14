import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsUpdateWithoutTblTitlesInputObjectSchema as tblTitEventsUpdateWithoutTblTitlesInputObjectSchema } from './tblTitEventsUpdateWithoutTblTitlesInput.schema';
import { tblTitEventsUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblTitEventsUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblTitEventsUncheckedUpdateWithoutTblTitlesInput.schema';
import { tblTitEventsCreateWithoutTblTitlesInputObjectSchema as tblTitEventsCreateWithoutTblTitlesInputObjectSchema } from './tblTitEventsCreateWithoutTblTitlesInput.schema';
import { tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblTitEventsUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsUncheckedUpdateWithoutTblTitlesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitEventsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpsertWithWhereUniqueWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpsertWithWhereUniqueWithoutTblTitlesInput>;
export const tblTitEventsUpsertWithWhereUniqueWithoutTblTitlesInputObjectZodSchema = makeSchema();
