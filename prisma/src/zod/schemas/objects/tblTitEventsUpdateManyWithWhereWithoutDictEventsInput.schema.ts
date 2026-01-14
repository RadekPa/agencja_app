import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsScalarWhereInputObjectSchema as tblTitEventsScalarWhereInputObjectSchema } from './tblTitEventsScalarWhereInput.schema';
import { tblTitEventsUpdateManyMutationInputObjectSchema as tblTitEventsUpdateManyMutationInputObjectSchema } from './tblTitEventsUpdateManyMutationInput.schema';
import { tblTitEventsUncheckedUpdateManyWithoutDictEventsInputObjectSchema as tblTitEventsUncheckedUpdateManyWithoutDictEventsInputObjectSchema } from './tblTitEventsUncheckedUpdateManyWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitEventsUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitEventsUncheckedUpdateManyWithoutDictEventsInputObjectSchema)])
}).strict();
export const tblTitEventsUpdateManyWithWhereWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpdateManyWithWhereWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpdateManyWithWhereWithoutDictEventsInput>;
export const tblTitEventsUpdateManyWithWhereWithoutDictEventsInputObjectZodSchema = makeSchema();
