import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema';
import { tblAgrRightsUpdateManyMutationInputObjectSchema as tblAgrRightsUpdateManyMutationInputObjectSchema } from './tblAgrRightsUpdateManyMutationInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyWithWhereWithoutTblAgreementsInput>;
export const tblAgrRightsUpdateManyWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
