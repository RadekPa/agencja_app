import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyaltyWhereInputObjectSchema as tblRoyaltyWhereInputObjectSchema } from './objects/tblRoyaltyWhereInput.schema';

export const tblRoyaltyDeleteManySchema: z.ZodType<Prisma.tblRoyaltyDeleteManyArgs> = z.object({ where: tblRoyaltyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblRoyaltyDeleteManyArgs>;

export const tblRoyaltyDeleteManyZodSchema = z.object({ where: tblRoyaltyWhereInputObjectSchema.optional() }).strict();