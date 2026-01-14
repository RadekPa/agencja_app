import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblCustUsersInputObjectSchema as tblCustomersCreateWithoutTblCustUsersInputObjectSchema } from './tblCustomersCreateWithoutTblCustUsersInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustUsersInput.schema';
import { tblCustomersCreateOrConnectWithoutTblCustUsersInputObjectSchema as tblCustomersCreateOrConnectWithoutTblCustUsersInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblCustUsersInput.schema';
import { tblCustomersUpsertWithoutTblCustUsersInputObjectSchema as tblCustomersUpsertWithoutTblCustUsersInputObjectSchema } from './tblCustomersUpsertWithoutTblCustUsersInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateToOneWithWhereWithoutTblCustUsersInputObjectSchema as tblCustomersUpdateToOneWithWhereWithoutTblCustUsersInputObjectSchema } from './tblCustomersUpdateToOneWithWhereWithoutTblCustUsersInput.schema';
import { tblCustomersUpdateWithoutTblCustUsersInputObjectSchema as tblCustomersUpdateWithoutTblCustUsersInputObjectSchema } from './tblCustomersUpdateWithoutTblCustUsersInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustUsersInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustUsersInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblCustUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustomersUpsertWithoutTblCustUsersInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateToOneWithWhereWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblCustomersUpdateWithoutTblCustUsersInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustUsersInputObjectSchema)]).optional()
}).strict();
export const tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInput>;
export const tblCustomersUpdateOneRequiredWithoutTblCustUsersNestedInputObjectZodSchema = makeSchema();
