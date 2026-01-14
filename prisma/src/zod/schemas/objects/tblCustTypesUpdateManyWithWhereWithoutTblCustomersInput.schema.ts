import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesScalarWhereInputObjectSchema as tblCustTypesScalarWhereInputObjectSchema } from './tblCustTypesScalarWhereInput.schema';
import { tblCustTypesUpdateManyMutationInputObjectSchema as tblCustTypesUpdateManyMutationInputObjectSchema } from './tblCustTypesUpdateManyMutationInput.schema';
import { tblCustTypesUncheckedUpdateManyWithoutTblCustomersInputObjectSchema as tblCustTypesUncheckedUpdateManyWithoutTblCustomersInputObjectSchema } from './tblCustTypesUncheckedUpdateManyWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustTypesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblCustTypesUpdateManyMutationInputObjectSchema), z.lazy(() => tblCustTypesUncheckedUpdateManyWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustTypesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpdateManyWithWhereWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpdateManyWithWhereWithoutTblCustomersInput>;
export const tblCustTypesUpdateManyWithWhereWithoutTblCustomersInputObjectZodSchema = makeSchema();
