import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrID: z.number().int(),
  AgrRightID: z.number().int(),
  RoyNr: z.number().int()
}).strict();
export const tblRoyaltyAgrIDAgrRightIDRoyNrCompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblRoyaltyAgrIDAgrRightIDRoyNrCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyAgrIDAgrRightIDRoyNrCompoundUniqueInput>;
export const tblRoyaltyAgrIDAgrRightIDRoyNrCompoundUniqueInputObjectZodSchema = makeSchema();
