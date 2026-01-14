import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsScalarWhereInputObjectSchema as tblSubmissionsScalarWhereInputObjectSchema } from './tblSubmissionsScalarWhereInput.schema';
import { tblSubmissionsUpdateManyMutationInputObjectSchema as tblSubmissionsUpdateManyMutationInputObjectSchema } from './tblSubmissionsUpdateManyMutationInput.schema';
import { tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmissionsUpdateManyMutationInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeInputObjectSchema)])
}).strict();
export const tblSubmissionsUpdateManyWithWhereWithoutDictCopyTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateManyWithWhereWithoutDictCopyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateManyWithWhereWithoutDictCopyTypeInput>;
export const tblSubmissionsUpdateManyWithWhereWithoutDictCopyTypeInputObjectZodSchema = makeSchema();
