import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './tblCustTypesWhereUniqueInput.schema';
import { tblCustTypesUpdateWithoutTblCustomersInputObjectSchema as tblCustTypesUpdateWithoutTblCustomersInputObjectSchema } from './tblCustTypesUpdateWithoutTblCustomersInput.schema';
import { tblCustTypesUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblCustTypesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblCustTypesUncheckedUpdateWithoutTblCustomersInput.schema';
import { tblCustTypesCreateWithoutTblCustomersInputObjectSchema as tblCustTypesCreateWithoutTblCustomersInputObjectSchema } from './tblCustTypesCreateWithoutTblCustomersInput.schema';
import { tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustTypesUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblCustTypesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustTypesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustTypesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpsertWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpsertWithWhereUniqueWithoutTblCustomersInput>;
export const tblCustTypesUpsertWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
