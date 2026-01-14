import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Step: z.number().int(),
  AgrRightID: z.number().int()
}).strict();
export const tblRoyRatesStepAgrRightIDCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblRoyRatesStepAgrRightIDCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesStepAgrRightIDCompoundUniqueInput>;
export const tblRoyRatesStepAgrRightIDCompoundUniqueInputObjectZodSchema = makeSchema();
