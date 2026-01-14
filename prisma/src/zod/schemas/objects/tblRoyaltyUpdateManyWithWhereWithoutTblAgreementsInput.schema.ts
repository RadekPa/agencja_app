import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyaltyScalarWhereInputObjectSchema as tblRoyaltyScalarWhereInputObjectSchema } from './tblRoyaltyScalarWhereInput.schema';
import { tblRoyaltyUpdateManyMutationInputObjectSchema as tblRoyaltyUpdateManyMutationInputObjectSchema } from './tblRoyaltyUpdateManyMutationInput.schema';
import { tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema as tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema } from './tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyaltyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblRoyaltyUpdateManyMutationInputObjectSchema), z.lazy(() => tblRoyaltyUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblRoyaltyUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyaltyUpdateManyWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyUpdateManyWithWhereWithoutTblAgreementsInput>;
export const tblRoyaltyUpdateManyWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
