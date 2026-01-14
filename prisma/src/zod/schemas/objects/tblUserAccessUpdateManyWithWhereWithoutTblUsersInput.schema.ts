import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessScalarWhereInputObjectSchema as tblUserAccessScalarWhereInputObjectSchema } from './tblUserAccessScalarWhereInput.schema';
import { tblUserAccessUpdateManyMutationInputObjectSchema as tblUserAccessUpdateManyMutationInputObjectSchema } from './tblUserAccessUpdateManyMutationInput.schema';
import { tblUserAccessUncheckedUpdateManyWithoutTblUsersInputObjectSchema as tblUserAccessUncheckedUpdateManyWithoutTblUsersInputObjectSchema } from './tblUserAccessUncheckedUpdateManyWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserAccessScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblUserAccessUpdateManyMutationInputObjectSchema), z.lazy(() => tblUserAccessUncheckedUpdateManyWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblUserAccessUpdateManyWithWhereWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpdateManyWithWhereWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpdateManyWithWhereWithoutTblUsersInput>;
export const tblUserAccessUpdateManyWithWhereWithoutTblUsersInputObjectZodSchema = makeSchema();
