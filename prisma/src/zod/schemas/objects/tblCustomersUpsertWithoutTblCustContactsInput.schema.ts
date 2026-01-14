import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateWithoutTblCustContactsInputObjectSchema as tblCustomersUpdateWithoutTblCustContactsInputObjectSchema } from './tblCustomersUpdateWithoutTblCustContactsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustContactsInput.schema';
import { tblCustomersCreateWithoutTblCustContactsInputObjectSchema as tblCustomersCreateWithoutTblCustContactsInputObjectSchema } from './tblCustomersCreateWithoutTblCustContactsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustContactsInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustContactsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema)]),
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const tblCustomersUpsertWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithoutTblCustContactsInput>;
export const tblCustomersUpsertWithoutTblCustContactsInputObjectZodSchema = makeSchema();
