import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblCustTypesInputObjectSchema as tblCustomersCreateWithoutTblCustTypesInputObjectSchema } from './tblCustomersCreateWithoutTblCustTypesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustTypesInput.schema';
import { tblCustomersCreateOrConnectWithoutTblCustTypesInputObjectSchema as tblCustomersCreateOrConnectWithoutTblCustTypesInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblCustTypesInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustTypesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblCustTypesInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateNestedOneWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblCustTypesInput>;
export const tblCustomersCreateNestedOneWithoutTblCustTypesInputObjectZodSchema = makeSchema();
