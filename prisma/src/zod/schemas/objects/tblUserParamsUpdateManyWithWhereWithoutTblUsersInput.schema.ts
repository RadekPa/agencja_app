import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserParamsScalarWhereInputObjectSchema as tblUserParamsScalarWhereInputObjectSchema } from './tblUserParamsScalarWhereInput.schema';
import { tblUserParamsUpdateManyMutationInputObjectSchema as tblUserParamsUpdateManyMutationInputObjectSchema } from './tblUserParamsUpdateManyMutationInput.schema';
import { tblUserParamsUncheckedUpdateManyWithoutTblUsersInputObjectSchema as tblUserParamsUncheckedUpdateManyWithoutTblUsersInputObjectSchema } from './tblUserParamsUncheckedUpdateManyWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserParamsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblUserParamsUpdateManyMutationInputObjectSchema), z.lazy(() => tblUserParamsUncheckedUpdateManyWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblUserParamsUpdateManyWithWhereWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserParamsUpdateManyWithWhereWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUpdateManyWithWhereWithoutTblUsersInput>;
export const tblUserParamsUpdateManyWithWhereWithoutTblUsersInputObjectZodSchema = makeSchema();
