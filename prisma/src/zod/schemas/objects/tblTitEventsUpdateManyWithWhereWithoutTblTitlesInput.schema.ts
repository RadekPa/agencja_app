import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsScalarWhereInputObjectSchema as tblTitEventsScalarWhereInputObjectSchema } from './tblTitEventsScalarWhereInput.schema';
import { tblTitEventsUpdateManyMutationInputObjectSchema as tblTitEventsUpdateManyMutationInputObjectSchema } from './tblTitEventsUpdateManyMutationInput.schema';
import { tblTitEventsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema as tblTitEventsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema } from './tblTitEventsUncheckedUpdateManyWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitEventsUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitEventsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblTitEventsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpdateManyWithWhereWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpdateManyWithWhereWithoutTblTitlesInput>;
export const tblTitEventsUpdateManyWithWhereWithoutTblTitlesInputObjectZodSchema = makeSchema();
