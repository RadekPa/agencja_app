import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { tblTitlesUpdateWithoutTblTitEventsInputObjectSchema as tblTitlesUpdateWithoutTblTitEventsInputObjectSchema } from './tblTitlesUpdateWithoutTblTitEventsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitEventsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitEventsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblTitlesUpdateWithoutTblTitEventsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitEventsInputObjectSchema)])
}).strict();
export const tblTitlesUpdateToOneWithWhereWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblTitEventsInput>;
export const tblTitlesUpdateToOneWithWhereWithoutTblTitEventsInputObjectZodSchema = makeSchema();
