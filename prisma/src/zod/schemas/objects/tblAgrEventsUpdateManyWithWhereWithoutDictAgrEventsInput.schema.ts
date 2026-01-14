import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsScalarWhereInputObjectSchema as tblAgrEventsScalarWhereInputObjectSchema } from './tblAgrEventsScalarWhereInput.schema';
import { tblAgrEventsUpdateManyMutationInputObjectSchema as tblAgrEventsUpdateManyMutationInputObjectSchema } from './tblAgrEventsUpdateManyMutationInput.schema';
import { tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrEventsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsInputObjectSchema)])
}).strict();
export const tblAgrEventsUpdateManyWithWhereWithoutDictAgrEventsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsUpdateManyWithWhereWithoutDictAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsUpdateManyWithWhereWithoutDictAgrEventsInput>;
export const tblAgrEventsUpdateManyWithWhereWithoutDictAgrEventsInputObjectZodSchema = makeSchema();
