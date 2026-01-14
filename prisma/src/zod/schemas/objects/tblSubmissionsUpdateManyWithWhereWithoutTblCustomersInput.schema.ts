import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsScalarWhereInputObjectSchema as tblSubmissionsScalarWhereInputObjectSchema } from './tblSubmissionsScalarWhereInput.schema';
import { tblSubmissionsUpdateManyMutationInputObjectSchema as tblSubmissionsUpdateManyMutationInputObjectSchema } from './tblSubmissionsUpdateManyMutationInput.schema';
import { tblSubmissionsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema as tblSubmissionsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUncheckedUpdateManyWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmissionsUpdateManyMutationInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateManyWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblSubmissionsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateManyWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateManyWithWhereWithoutTblCustomersInput>;
export const tblSubmissionsUpdateManyWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
