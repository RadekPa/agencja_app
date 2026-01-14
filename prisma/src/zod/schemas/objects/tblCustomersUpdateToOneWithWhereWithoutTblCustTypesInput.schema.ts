import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersUpdateWithoutTblCustTypesInputObjectSchema as tblCustomersUpdateWithoutTblCustTypesInputObjectSchema } from './tblCustomersUpdateWithoutTblCustTypesInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblCustTypesInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblCustTypesInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblCustTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutTblCustTypesInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblCustTypesInputObjectSchema)])
}).strict();
export const tblCustomersUpdateToOneWithWhereWithoutTblCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblCustTypesInput>;
export const tblCustomersUpdateToOneWithWhereWithoutTblCustTypesInputObjectZodSchema = makeSchema();
