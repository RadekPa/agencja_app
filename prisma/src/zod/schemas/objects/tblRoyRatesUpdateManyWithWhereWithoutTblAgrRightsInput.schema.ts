import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesScalarWhereInputObjectSchema as tblRoyRatesScalarWhereInputObjectSchema } from './tblRoyRatesScalarWhereInput.schema';
import { tblRoyRatesUpdateManyMutationInputObjectSchema as tblRoyRatesUpdateManyMutationInputObjectSchema } from './tblRoyRatesUpdateManyMutationInput.schema';
import { tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsInputObjectSchema as tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsInputObjectSchema } from './tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblRoyRatesUpdateManyMutationInputObjectSchema), z.lazy(() => tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const tblRoyRatesUpdateManyWithWhereWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUpdateManyWithWhereWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUpdateManyWithWhereWithoutTblAgrRightsInput>;
export const tblRoyRatesUpdateManyWithWhereWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
