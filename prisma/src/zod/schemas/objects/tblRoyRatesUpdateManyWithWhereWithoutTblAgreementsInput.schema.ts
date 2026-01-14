import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesScalarWhereInputObjectSchema as tblRoyRatesScalarWhereInputObjectSchema } from './tblRoyRatesScalarWhereInput.schema';
import { tblRoyRatesUpdateManyMutationInputObjectSchema as tblRoyRatesUpdateManyMutationInputObjectSchema } from './tblRoyRatesUpdateManyMutationInput.schema';
import { tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema as tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema } from './tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblRoyRatesUpdateManyMutationInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblRoyRatesUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUpdateManyWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUpdateManyWithWhereWithoutTblAgreementsInput>;
export const tblRoyRatesUpdateManyWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
