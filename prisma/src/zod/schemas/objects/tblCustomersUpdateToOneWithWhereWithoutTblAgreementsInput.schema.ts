import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersUpdateWithoutTblAgreementsInputObjectSchema as tblCustomersUpdateWithoutTblAgreementsInputObjectSchema } from './tblCustomersUpdateWithoutTblAgreementsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblCustomersUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblCustomersUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateToOneWithWhereWithoutTblAgreementsInput>;
export const tblCustomersUpdateToOneWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
