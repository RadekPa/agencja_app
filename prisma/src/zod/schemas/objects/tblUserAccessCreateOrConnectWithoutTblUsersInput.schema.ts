import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './tblUserAccessWhereUniqueInput.schema';
import { tblUserAccessCreateWithoutTblUsersInputObjectSchema as tblUserAccessCreateWithoutTblUsersInputObjectSchema } from './tblUserAccessCreateWithoutTblUsersInput.schema';
import { tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema as tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema } from './tblUserAccessUncheckedCreateWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblUserAccessCreateWithoutTblUsersInputObjectSchema), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblUsersInputObjectSchema)])
}).strict();
export const tblUserAccessCreateOrConnectWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessCreateOrConnectWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateOrConnectWithoutTblUsersInput>;
export const tblUserAccessCreateOrConnectWithoutTblUsersInputObjectZodSchema = makeSchema();
