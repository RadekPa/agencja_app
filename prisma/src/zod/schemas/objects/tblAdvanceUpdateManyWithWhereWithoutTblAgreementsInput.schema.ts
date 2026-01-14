import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAdvanceScalarWhereInputObjectSchema as tblAdvanceScalarWhereInputObjectSchema } from './tblAdvanceScalarWhereInput.schema';
import { tblAdvanceUpdateManyMutationInputObjectSchema as tblAdvanceUpdateManyMutationInputObjectSchema } from './tblAdvanceUpdateManyMutationInput.schema';
import { tblAdvanceUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema as tblAdvanceUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUncheckedUpdateManyWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAdvanceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAdvanceUpdateManyMutationInputObjectSchema), z.lazy(() => tblAdvanceUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAdvanceUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAdvanceUpdateManyWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceUpdateManyWithWhereWithoutTblAgreementsInput>;
export const tblAdvanceUpdateManyWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
