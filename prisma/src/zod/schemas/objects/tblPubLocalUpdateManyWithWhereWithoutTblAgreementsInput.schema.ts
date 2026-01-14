import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubLocalScalarWhereInputObjectSchema as tblPubLocalScalarWhereInputObjectSchema } from './tblPubLocalScalarWhereInput.schema';
import { tblPubLocalUpdateManyMutationInputObjectSchema as tblPubLocalUpdateManyMutationInputObjectSchema } from './tblPubLocalUpdateManyMutationInput.schema';
import { tblPubLocalUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema as tblPubLocalUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUncheckedUpdateManyWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPubLocalScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblPubLocalUpdateManyMutationInputObjectSchema), z.lazy(() => tblPubLocalUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblPubLocalUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblPubLocalUpdateManyWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalUpdateManyWithWhereWithoutTblAgreementsInput>;
export const tblPubLocalUpdateManyWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
