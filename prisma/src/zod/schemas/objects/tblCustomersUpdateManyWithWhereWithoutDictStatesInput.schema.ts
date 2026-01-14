import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersScalarWhereInputObjectSchema as tblCustomersScalarWhereInputObjectSchema } from './tblCustomersScalarWhereInput.schema';
import { tblCustomersUpdateManyMutationInputObjectSchema as tblCustomersUpdateManyMutationInputObjectSchema } from './tblCustomersUpdateManyMutationInput.schema';
import { tblCustomersUncheckedUpdateManyWithoutDictStatesInputObjectSchema as tblCustomersUncheckedUpdateManyWithoutDictStatesInputObjectSchema } from './tblCustomersUncheckedUpdateManyWithoutDictStatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblCustomersUpdateManyMutationInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateManyWithoutDictStatesInputObjectSchema)])
}).strict();
export const tblCustomersUpdateManyWithWhereWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateManyWithWhereWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateManyWithWhereWithoutDictStatesInput>;
export const tblCustomersUpdateManyWithWhereWithoutDictStatesInputObjectZodSchema = makeSchema();
