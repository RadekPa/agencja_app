import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutTblCustContactsInputObjectSchema as tblCustomersCreateWithoutTblCustContactsInputObjectSchema } from './tblCustomersCreateWithoutTblCustContactsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustContactsInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblCustContactsInput>;
export const tblCustomersCreateOrConnectWithoutTblCustContactsInputObjectZodSchema = makeSchema();
