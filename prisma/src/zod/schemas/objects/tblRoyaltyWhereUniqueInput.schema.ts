import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyaltyAgrIDAgrRightIDRoyNrCompoundUniqueInputObjectSchema as tblRoyaltyAgrIDAgrRightIDRoyNrCompoundUniqueInputObjectSchema } from './tblRoyaltyAgrIDAgrRightIDRoyNrCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  RoyID: z.number().int().optional(),
  AgrID_AgrRightID_RoyNr: z.lazy(() => tblRoyaltyAgrIDAgrRightIDRoyNrCompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblRoyaltyWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblRoyaltyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyWhereUniqueInput>;
export const tblRoyaltyWhereUniqueInputObjectZodSchema = makeSchema();
