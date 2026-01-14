import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './tblCustTypesWhereUniqueInput.schema';
import { tblCustTypesCreateWithoutTblCustomersInputObjectSchema as tblCustTypesCreateWithoutTblCustomersInputObjectSchema } from './tblCustTypesCreateWithoutTblCustomersInput.schema';
import { tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustTypesUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustTypesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustTypesCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateOrConnectWithoutTblCustomersInput>;
export const tblCustTypesCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
