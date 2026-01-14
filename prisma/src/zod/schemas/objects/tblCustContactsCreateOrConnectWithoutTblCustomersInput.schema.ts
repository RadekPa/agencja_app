import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsCreateWithoutTblCustomersInputObjectSchema as tblCustContactsCreateWithoutTblCustomersInputObjectSchema } from './tblCustContactsCreateWithoutTblCustomersInput.schema';
import { tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustContactsCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustContactsCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateOrConnectWithoutTblCustomersInput>;
export const tblCustContactsCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
