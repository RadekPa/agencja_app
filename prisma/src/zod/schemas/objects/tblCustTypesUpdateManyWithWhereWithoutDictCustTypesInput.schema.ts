import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesScalarWhereInputObjectSchema as tblCustTypesScalarWhereInputObjectSchema } from './tblCustTypesScalarWhereInput.schema';
import { tblCustTypesUpdateManyMutationInputObjectSchema as tblCustTypesUpdateManyMutationInputObjectSchema } from './tblCustTypesUpdateManyMutationInput.schema';
import { tblCustTypesUncheckedUpdateManyWithoutDictCustTypesInputObjectSchema as tblCustTypesUncheckedUpdateManyWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUncheckedUpdateManyWithoutDictCustTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustTypesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblCustTypesUpdateManyMutationInputObjectSchema), z.lazy(() => tblCustTypesUncheckedUpdateManyWithoutDictCustTypesInputObjectSchema)])
}).strict();
export const tblCustTypesUpdateManyWithWhereWithoutDictCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpdateManyWithWhereWithoutDictCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpdateManyWithWhereWithoutDictCustTypesInput>;
export const tblCustTypesUpdateManyWithWhereWithoutDictCustTypesInputObjectZodSchema = makeSchema();
