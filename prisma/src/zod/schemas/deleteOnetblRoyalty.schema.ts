import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblRoyaltySelectObjectSchema as tblRoyaltySelectObjectSchema } from './objects/tblRoyaltySelect.schema';
import { tblRoyaltyIncludeObjectSchema as tblRoyaltyIncludeObjectSchema } from './objects/tblRoyaltyInclude.schema';
import { tblRoyaltyWhereUniqueInputObjectSchema as tblRoyaltyWhereUniqueInputObjectSchema } from './objects/tblRoyaltyWhereUniqueInput.schema';

export const tblRoyaltyDeleteOneSchema: z.ZodType<Prisma.tblRoyaltyDeleteArgs> = z.object({ select: tblRoyaltySelectObjectSchema.optional(), include: tblRoyaltyIncludeObjectSchema.optional(), where: tblRoyaltyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblRoyaltyDeleteArgs>;

export const tblRoyaltyDeleteOneZodSchema = z.object({ select: tblRoyaltySelectObjectSchema.optional(), include: tblRoyaltyIncludeObjectSchema.optional(), where: tblRoyaltyWhereUniqueInputObjectSchema }).strict();