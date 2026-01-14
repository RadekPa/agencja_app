import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsScalarWhereInputObjectSchema as tblSubmissionsScalarWhereInputObjectSchema } from './tblSubmissionsScalarWhereInput.schema';
import { tblSubmissionsUpdateManyMutationInputObjectSchema as tblSubmissionsUpdateManyMutationInputObjectSchema } from './tblSubmissionsUpdateManyMutationInput.schema';
import { tblSubmissionsUncheckedUpdateManyWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUncheckedUpdateManyWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUncheckedUpdateManyWithoutDictSubmSentTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmissionsUpdateManyMutationInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateManyWithoutDictSubmSentTypeInputObjectSchema)])
}).strict();
export const tblSubmissionsUpdateManyWithWhereWithoutDictSubmSentTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateManyWithWhereWithoutDictSubmSentTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateManyWithWhereWithoutDictSubmSentTypeInput>;
export const tblSubmissionsUpdateManyWithWhereWithoutDictSubmSentTypeInputObjectZodSchema = makeSchema();
