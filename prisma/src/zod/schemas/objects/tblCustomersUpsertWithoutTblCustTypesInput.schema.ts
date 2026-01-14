import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateWithoutTblCustTypesInputObjectSchema as tblCustomersUpdateWithoutTblCustTypesInputObjectSchema } from './tblCustomersUpdateWithoutTblCustTypesInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustTypesInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustTypesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustTypesInput.schema';
import { tblCustomersCreateWithoutTblCustTypesInputObjectSchema as tblCustomersCreateWithoutTblCustTypesInputObjectSchema } from './tblCustomersCreateWithoutTblCustTypesInput.schema';
import { tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema as tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblCustTypesInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutTblCustTypesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustTypesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblCustTypesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblCustTypesInputObjectSchema)]),
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const tblCustomersUpsertWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithoutTblCustTypesInput>;
export const tblCustomersUpsertWithoutTblCustTypesInputObjectZodSchema = makeSchema();
