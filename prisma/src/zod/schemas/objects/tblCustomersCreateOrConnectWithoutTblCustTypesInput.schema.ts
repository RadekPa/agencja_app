import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutTblCustTypesInputObjectSchema as tblCustomersCreateWithoutTblCustTypesInputObjectSchema } from './tblCustomersCreateWithoutTblCustTypesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustTypesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblCustTypesInput>;
export const tblCustomersCreateOrConnectWithoutTblCustTypesInputObjectZodSchema = makeSchema();
