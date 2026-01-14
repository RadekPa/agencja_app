import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsScalarWhereInputObjectSchema as tblSubmEventsScalarWhereInputObjectSchema } from './tblSubmEventsScalarWhereInput.schema';
import { tblSubmEventsUpdateManyMutationInputObjectSchema as tblSubmEventsUpdateManyMutationInputObjectSchema } from './tblSubmEventsUpdateManyMutationInput.schema';
import { tblSubmEventsUncheckedUpdateManyWithoutDictEventsInputObjectSchema as tblSubmEventsUncheckedUpdateManyWithoutDictEventsInputObjectSchema } from './tblSubmEventsUncheckedUpdateManyWithoutDictEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmEventsUpdateManyMutationInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedUpdateManyWithoutDictEventsInputObjectSchema)])
}).strict();
export const tblSubmEventsUpdateManyWithWhereWithoutDictEventsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsUpdateManyWithWhereWithoutDictEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsUpdateManyWithWhereWithoutDictEventsInput>;
export const tblSubmEventsUpdateManyWithWhereWithoutDictEventsInputObjectZodSchema = makeSchema();
