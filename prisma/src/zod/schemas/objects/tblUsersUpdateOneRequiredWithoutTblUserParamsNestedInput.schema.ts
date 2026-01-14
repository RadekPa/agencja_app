import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersCreateWithoutTblUserParamsInputObjectSchema as tblUsersCreateWithoutTblUserParamsInputObjectSchema } from './tblUsersCreateWithoutTblUserParamsInput.schema';
import { tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema as tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblUserParamsInput.schema';
import { tblUsersCreateOrConnectWithoutTblUserParamsInputObjectSchema as tblUsersCreateOrConnectWithoutTblUserParamsInputObjectSchema } from './tblUsersCreateOrConnectWithoutTblUserParamsInput.schema';
import { tblUsersUpsertWithoutTblUserParamsInputObjectSchema as tblUsersUpsertWithoutTblUserParamsInputObjectSchema } from './tblUsersUpsertWithoutTblUserParamsInput.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './tblUsersWhereUniqueInput.schema';
import { tblUsersUpdateToOneWithWhereWithoutTblUserParamsInputObjectSchema as tblUsersUpdateToOneWithWhereWithoutTblUserParamsInputObjectSchema } from './tblUsersUpdateToOneWithWhereWithoutTblUserParamsInput.schema';
import { tblUsersUpdateWithoutTblUserParamsInputObjectSchema as tblUsersUpdateWithoutTblUserParamsInputObjectSchema } from './tblUsersUpdateWithoutTblUserParamsInput.schema';
import { tblUsersUncheckedUpdateWithoutTblUserParamsInputObjectSchema as tblUsersUncheckedUpdateWithoutTblUserParamsInputObjectSchema } from './tblUsersUncheckedUpdateWithoutTblUserParamsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblUserParamsInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblUserParamsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblUsersCreateOrConnectWithoutTblUserParamsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblUsersUpsertWithoutTblUserParamsInputObjectSchema).optional(),
  connect: z.lazy(() => tblUsersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblUsersUpdateToOneWithWhereWithoutTblUserParamsInputObjectSchema), z.lazy(() => tblUsersUpdateWithoutTblUserParamsInputObjectSchema), z.lazy(() => tblUsersUncheckedUpdateWithoutTblUserParamsInputObjectSchema)]).optional()
}).strict();
export const tblUsersUpdateOneRequiredWithoutTblUserParamsNestedInputObjectSchema: z.ZodType<Prisma.tblUsersUpdateOneRequiredWithoutTblUserParamsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersUpdateOneRequiredWithoutTblUserParamsNestedInput>;
export const tblUsersUpdateOneRequiredWithoutTblUserParamsNestedInputObjectZodSchema = makeSchema();
