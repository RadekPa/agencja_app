import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsScalarWhereInputObjectSchema as tblSubmEventsScalarWhereInputObjectSchema } from './tblSubmEventsScalarWhereInput.schema';
import { tblSubmEventsUpdateManyMutationInputObjectSchema as tblSubmEventsUpdateManyMutationInputObjectSchema } from './tblSubmEventsUpdateManyMutationInput.schema';
import { tblSubmEventsUncheckedUpdateManyWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUncheckedUpdateManyWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUncheckedUpdateManyWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmEventsUpdateManyMutationInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedUpdateManyWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const tblSubmEventsUpdateManyWithWhereWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblSubmEventsUpdateManyWithWhereWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsUpdateManyWithWhereWithoutTblSubmissionsInput>;
export const tblSubmEventsUpdateManyWithWhereWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
