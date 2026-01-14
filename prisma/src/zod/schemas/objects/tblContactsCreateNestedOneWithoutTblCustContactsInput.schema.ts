import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblContactsCreateWithoutTblCustContactsInputObjectSchema as tblContactsCreateWithoutTblCustContactsInputObjectSchema } from './tblContactsCreateWithoutTblCustContactsInput.schema';
import { tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema as tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './tblContactsUncheckedCreateWithoutTblCustContactsInput.schema';
import { tblContactsCreateOrConnectWithoutTblCustContactsInputObjectSchema as tblContactsCreateOrConnectWithoutTblCustContactsInputObjectSchema } from './tblContactsCreateOrConnectWithoutTblCustContactsInput.schema';
import { tblContactsWhereUniqueInputObjectSchema as tblContactsWhereUniqueInputObjectSchema } from './tblContactsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblContactsCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblContactsCreateOrConnectWithoutTblCustContactsInputObjectSchema).optional(),
  connect: z.lazy(() => tblContactsWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblContactsCreateNestedOneWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.tblContactsCreateNestedOneWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsCreateNestedOneWithoutTblCustContactsInput>;
export const tblContactsCreateNestedOneWithoutTblCustContactsInputObjectZodSchema = makeSchema();
