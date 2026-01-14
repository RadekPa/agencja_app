import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersCreateWithoutTblUserAccessInputObjectSchema as tblUsersCreateWithoutTblUserAccessInputObjectSchema } from './tblUsersCreateWithoutTblUserAccessInput.schema';
import { tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema as tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblUserAccessInput.schema';
import { tblUsersCreateOrConnectWithoutTblUserAccessInputObjectSchema as tblUsersCreateOrConnectWithoutTblUserAccessInputObjectSchema } from './tblUsersCreateOrConnectWithoutTblUserAccessInput.schema';
import { tblUsersUpsertWithoutTblUserAccessInputObjectSchema as tblUsersUpsertWithoutTblUserAccessInputObjectSchema } from './tblUsersUpsertWithoutTblUserAccessInput.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './tblUsersWhereUniqueInput.schema';
import { tblUsersUpdateToOneWithWhereWithoutTblUserAccessInputObjectSchema as tblUsersUpdateToOneWithWhereWithoutTblUserAccessInputObjectSchema } from './tblUsersUpdateToOneWithWhereWithoutTblUserAccessInput.schema';
import { tblUsersUpdateWithoutTblUserAccessInputObjectSchema as tblUsersUpdateWithoutTblUserAccessInputObjectSchema } from './tblUsersUpdateWithoutTblUserAccessInput.schema';
import { tblUsersUncheckedUpdateWithoutTblUserAccessInputObjectSchema as tblUsersUncheckedUpdateWithoutTblUserAccessInputObjectSchema } from './tblUsersUncheckedUpdateWithoutTblUserAccessInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblUsersCreateOrConnectWithoutTblUserAccessInputObjectSchema).optional(),
  upsert: z.lazy(() => tblUsersUpsertWithoutTblUserAccessInputObjectSchema).optional(),
  connect: z.lazy(() => tblUsersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblUsersUpdateToOneWithWhereWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblUsersUpdateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblUsersUncheckedUpdateWithoutTblUserAccessInputObjectSchema)]).optional()
}).strict();
export const tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema: z.ZodType<Prisma.tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInput>;
export const tblUsersUpdateOneRequiredWithoutTblUserAccessNestedInputObjectZodSchema = makeSchema();
