import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './tblCustTypesWhereUniqueInput.schema';
import { tblCustTypesUpdateWithoutTblCustomersInputObjectSchema as tblCustTypesUpdateWithoutTblCustomersInputObjectSchema } from './tblCustTypesUpdateWithoutTblCustomersInput.schema';
import { tblCustTypesUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblCustTypesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblCustTypesUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblCustTypesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustTypesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpdateWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpdateWithWhereUniqueWithoutTblCustomersInput>;
export const tblCustTypesUpdateWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
