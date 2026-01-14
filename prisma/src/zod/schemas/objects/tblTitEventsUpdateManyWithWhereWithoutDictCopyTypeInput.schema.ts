import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsScalarWhereInputObjectSchema as tblTitEventsScalarWhereInputObjectSchema } from './tblTitEventsScalarWhereInput.schema';
import { tblTitEventsUpdateManyMutationInputObjectSchema as tblTitEventsUpdateManyMutationInputObjectSchema } from './tblTitEventsUpdateManyMutationInput.schema';
import { tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeInputObjectSchema as tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitEventsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitEventsUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeInputObjectSchema)])
}).strict();
export const tblTitEventsUpdateManyWithWhereWithoutDictCopyTypeInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpdateManyWithWhereWithoutDictCopyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpdateManyWithWhereWithoutDictCopyTypeInput>;
export const tblTitEventsUpdateManyWithWhereWithoutDictCopyTypeInputObjectZodSchema = makeSchema();
