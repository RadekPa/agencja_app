import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersCreateWithoutTblCustUsersInputObjectSchema as tblUsersCreateWithoutTblCustUsersInputObjectSchema } from './tblUsersCreateWithoutTblCustUsersInput.schema';
import { tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema as tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema } from './tblUsersUncheckedCreateWithoutTblCustUsersInput.schema';
import { tblUsersCreateOrConnectWithoutTblCustUsersInputObjectSchema as tblUsersCreateOrConnectWithoutTblCustUsersInputObjectSchema } from './tblUsersCreateOrConnectWithoutTblCustUsersInput.schema';
import { tblUsersUpsertWithoutTblCustUsersInputObjectSchema as tblUsersUpsertWithoutTblCustUsersInputObjectSchema } from './tblUsersUpsertWithoutTblCustUsersInput.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './tblUsersWhereUniqueInput.schema';
import { tblUsersUpdateToOneWithWhereWithoutTblCustUsersInputObjectSchema as tblUsersUpdateToOneWithWhereWithoutTblCustUsersInputObjectSchema } from './tblUsersUpdateToOneWithWhereWithoutTblCustUsersInput.schema';
import { tblUsersUpdateWithoutTblCustUsersInputObjectSchema as tblUsersUpdateWithoutTblCustUsersInputObjectSchema } from './tblUsersUpdateWithoutTblCustUsersInput.schema';
import { tblUsersUncheckedUpdateWithoutTblCustUsersInputObjectSchema as tblUsersUncheckedUpdateWithoutTblCustUsersInputObjectSchema } from './tblUsersUncheckedUpdateWithoutTblCustUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUsersCreateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblUsersUncheckedCreateWithoutTblCustUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblUsersCreateOrConnectWithoutTblCustUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => tblUsersUpsertWithoutTblCustUsersInputObjectSchema).optional(),
  connect: z.lazy(() => tblUsersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblUsersUpdateToOneWithWhereWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblUsersUpdateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblUsersUncheckedUpdateWithoutTblCustUsersInputObjectSchema)]).optional()
}).strict();
export const tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema: z.ZodType<Prisma.tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInput>;
export const tblUsersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectZodSchema = makeSchema();
