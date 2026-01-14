import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblCustContactsInputObjectSchema as tblCustomersCreateWithoutTblCustContactsInputObjectSchema } from './tblCustomersCreateWithoutTblCustContactsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustContactsInput.schema';
import { tblCustomersCreateOrConnectWithoutTblCustContactsInputObjectSchema as tblCustomersCreateOrConnectWithoutTblCustContactsInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblCustContactsInput.schema';
import { tblCustomersUpsertWithoutTblCustContactsInputObjectSchema as tblCustomersUpsertWithoutTblCustContactsInputObjectSchema } from './tblCustomersUpsertWithoutTblCustContactsInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema as tblCustomersUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema } from './tblCustomersUpdateToOneWithWhereWithoutTblCustContactsInput.schema';
import { tblCustomersUpdateWithoutTblCustContactsInputObjectSchema as tblCustomersUpdateWithoutTblCustContactsInputObjectSchema } from './tblCustomersUpdateWithoutTblCustContactsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblCustContactsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustomersUpsertWithoutTblCustContactsInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblCustomersUpdateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectSchema)]).optional()
}).strict();
export const tblCustomersUpdateOneRequiredWithoutTblCustContactsNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblCustContactsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateOneRequiredWithoutTblCustContactsNestedInput>;
export const tblCustomersUpdateOneRequiredWithoutTblCustContactsNestedInputObjectZodSchema = makeSchema();
