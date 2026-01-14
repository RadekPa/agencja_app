import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsCreateWithoutTblContactsInputObjectSchema as tblCustContactsCreateWithoutTblContactsInputObjectSchema } from './tblCustContactsCreateWithoutTblContactsInput.schema';
import { tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema as tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutTblContactsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema)])
}).strict();
export const tblCustContactsCreateOrConnectWithoutTblContactsInputObjectSchema: z.ZodType<Prisma.tblCustContactsCreateOrConnectWithoutTblContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateOrConnectWithoutTblContactsInput>;
export const tblCustContactsCreateOrConnectWithoutTblContactsInputObjectZodSchema = makeSchema();
