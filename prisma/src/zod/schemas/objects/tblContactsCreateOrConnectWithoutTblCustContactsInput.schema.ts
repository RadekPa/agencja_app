import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblContactsWhereUniqueInputObjectSchema as tblContactsWhereUniqueInputObjectSchema } from './tblContactsWhereUniqueInput.schema';
import { tblContactsCreateWithoutTblCustContactsInputObjectSchema as tblContactsCreateWithoutTblCustContactsInputObjectSchema } from './tblContactsCreateWithoutTblCustContactsInput.schema';
import { tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema as tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './tblContactsUncheckedCreateWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblContactsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblContactsCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema)])
}).strict();
export const tblContactsCreateOrConnectWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.tblContactsCreateOrConnectWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsCreateOrConnectWithoutTblCustContactsInput>;
export const tblContactsCreateOrConnectWithoutTblCustContactsInputObjectZodSchema = makeSchema();
