import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesStepAgrRightIDCompoundUniqueInputObjectSchema as tblRoyRatesStepAgrRightIDCompoundUniqueInputObjectSchema } from './tblRoyRatesStepAgrRightIDCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  Step_AgrRightID: z.lazy(() => tblRoyRatesStepAgrRightIDCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblRoyRatesWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblRoyRatesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesWhereUniqueInput>;
export const tblRoyRatesWhereUniqueInputObjectZodSchema = makeSchema();
