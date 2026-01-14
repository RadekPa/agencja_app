import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsUpdateWithoutTblCustomersInputObjectSchema as tblCustContactsUpdateWithoutTblCustomersInputObjectSchema } from './tblCustContactsUpdateWithoutTblCustomersInput.schema';
import { tblCustContactsUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblCustContactsUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblCustContactsUncheckedUpdateWithoutTblCustomersInput.schema';
import { tblCustContactsCreateWithoutTblCustomersInputObjectSchema as tblCustContactsCreateWithoutTblCustomersInputObjectSchema } from './tblCustContactsCreateWithoutTblCustomersInput.schema';
import { tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblCustContactsUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustContactsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpsertWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpsertWithWhereUniqueWithoutTblCustomersInput>;
export const tblCustContactsUpsertWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
